// Simple in-memory rate limiter
const requests = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(
  ip: string,
  maxRequests: number = 10,
  windowMs: number = 60_000
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = requests.get(ip);

  // Clean up expired entries periodically
  if (requests.size > 10_000) {
    for (const [key, val] of requests) {
      if (val.resetAt < now) requests.delete(key);
    }
  }

  if (!entry || entry.resetAt < now) {
    requests.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  entry.count++;
  const remaining = Math.max(0, maxRequests - entry.count);

  return { allowed: entry.count <= maxRequests, remaining };
}
