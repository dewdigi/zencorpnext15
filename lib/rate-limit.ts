const map = new Map<string, { count: number; resetAt: number }>();

export function enforceRateLimit(key: string, max = 12, windowMs = 60000) {
  const now = Date.now();
  const state = map.get(key);

  if (!state || state.resetAt <= now) {
    map.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: max - 1 };
  }

  if (state.count >= max) {
    return { allowed: false, remaining: 0, retryAt: state.resetAt };
  }

  state.count += 1;
  return { allowed: true, remaining: max - state.count };
}
