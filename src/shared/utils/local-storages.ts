import { IS_SERVER } from 'shared/constants/commons';

export function setLocalStorage(key: string, value: unknown) {
  if (IS_SERVER) return;
  localStorage[key] = value;
}

export function getLocalStorage(key: string) {
  if (IS_SERVER) return '';
  if (!localStorage[key]) return '';
  return localStorage[key] as string;
}

export function listOfLocalStorage<T = Record<string, unknown>>() {
  if (IS_SERVER) return {};
  return localStorage as T;
}

export function clearLocalStorage() {
  if (IS_SERVER) return;
  localStorage.clear();
}
