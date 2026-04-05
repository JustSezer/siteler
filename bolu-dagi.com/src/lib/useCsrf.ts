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
        return data.token;
      }
    } catch {
      // Silently fail
    }
    return null;
  }, []);

  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  const csrfHeaders = token ? { "x-csrf-token": token } : {};

  const csrfFetch = useCallback(
    async (url: string, options: RequestInit = {}) => {
      const currentToken = token || (await fetchToken());
      const headers = {
        ...((options.headers as Record<string, string>) || {}),
        ...(currentToken ? { "x-csrf-token": currentToken } : {}),
      };
      const res = await fetch(url, { ...options, headers });
      fetchToken();
      return res;
    },
    [token, fetchToken]
  );

  return { token, csrfHeaders, csrfFetch, refreshToken: fetchToken };
}
