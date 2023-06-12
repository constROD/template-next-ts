import { IS_SERVER } from 'shared/constants/commons';

export * as LocalStorageUtil from './local-storage';

export function set(key: string, value: unknown) {
  if (IS_SERVER) return;
  localStorage[key] = value;
}

export function get(key: string) {
  if (IS_SERVER) return '';
  if (!localStorage[key]) return '';
  return localStorage[key] as string;
}

export function remove(key: string) {
  if (IS_SERVER) return;
  localStorage.removeItem(key);
}

export function list<T = Record<string, unknown>>() {
  if (IS_SERVER) return {};
  return localStorage as T;
}

export function clear() {
  if (IS_SERVER) return;
  localStorage.clear();
}
