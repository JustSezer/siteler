interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const attempts = new Map<string, RateLimitRecord>();

const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
const MAX_ENTRIES = 10000;

let lastCleanup = Date.now();

function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  for (const [key, record] of attempts) {
    if (now > record.resetAt) {
      attempts.delete(key);
    }
  }
}

function normalizeIp(rawIp: string): string {
  const ip = rawIp.split(",")[0]?.trim() || "unknown";
  if (ip.length > 45) return ip.substring(0, 45);
  return ip;
}

export function checkRateLimit(rawIp: string): { allowed: boolean; retryAfter?: number } {
  cleanup();

  const ip = normalizeIp(rawIp);
  const now = Date.now();
  const record = attempts.get(ip);

  if (!record || now > record.resetAt) {
    if (attempts.size >= MAX_ENTRIES) {
      for (const [key, rec] of attempts) {
        if (now > rec.resetAt) attempts.delete(key);
      }
      if (attempts.size >= MAX_ENTRIES) {
        return { allowed: false, retryAfter: 60 };
      }
    }

    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (record.count >= MAX_ATTEMPTS) {
    const retryAfter = Math.ceil((record.resetAt - now) / 1000);
    return { allowed: false, retryAfter };
  }

  record.count++;
  return { allowed: true };
}
