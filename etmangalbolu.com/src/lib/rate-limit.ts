const rateMap = new Map<string, { count: number; resetTime: number }>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_READ = 60;
const MAX_REQUESTS_WRITE = 10;

// Cleanup old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  rateMap.forEach((value, key) => {
    if (now > value.resetTime) {
      rateMap.delete(key);
    }
  });
}, 5 * 60 * 1000);

export function checkRateLimit(
  ip: string,
  type: "read" | "write" = "read"
): { allowed: boolean; remaining: number } {
  const maxRequests = type === "write" ? MAX_REQUESTS_WRITE : MAX_REQUESTS_READ;
  const key = `${ip}:${type}`;
  const now = Date.now();

  const entry = rateMap.get(key);

  if (!entry || now > entry.resetTime) {
    rateMap.set(key, { count: 1, resetTime: now + WINDOW_MS });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  entry.count++;

  if (entry.count > maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  return { allowed: true, remaining: maxRequests - entry.count };
}
