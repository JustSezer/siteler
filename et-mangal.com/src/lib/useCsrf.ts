"use client";

import { useState, useEffect, useCallback } from "react";

export function useCsrf() {
  const [token, setToken] = useState<string | null>(null);

  const fetchToken = useCallback(async () => {
    try {
      const res = await fetch("/api/csrf");
      if (res.ok) {
        const data = await res.json();
        setToken(data.token);
        return data.token as string;
      }
    } catch {
      // Silently fail — will be caught by API validation
    }
    return null;
  }, []);

  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  const csrfFetch = useCallback(
    async (url: string, options: RequestInit = {}) => {
      const currentToken = token || (await fetchToken());
      const headers = {
        ...((options.headers as Record<string, string>) || {}),
        ...(currentToken ? { "x-csrf-token": currentToken } : {}),
      };
      const res = await fetch(url, { ...options, headers });
      // Refresh token for next request
      fetchToken();
      return res;
    },
    [token, fetchToken]
  );

  return { token, csrfFetch, refreshToken: fetchToken };
}
