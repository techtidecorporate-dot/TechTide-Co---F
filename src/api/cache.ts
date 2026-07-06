interface CacheEntry {
  data: any;
  expiry: number;
}

const store = new Map<string, CacheEntry>();
const DEFAULT_TTL = 30_000;

export function getCached<T = any>(key: string): T | null {
  const entry = store.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiry) {
    store.delete(key);
    return null;
  }
  return entry.data as T;
}

export function setCache(key: string, data: any, ttl = DEFAULT_TTL) {
  store.set(key, { data, expiry: Date.now() + ttl });
}

export function clearCache(pattern?: string) {
  if (!pattern) {
    store.clear();
    return;
  }
  for (const k of store.keys()) {
    if (k.startsWith(pattern)) store.delete(k);
  }
}
