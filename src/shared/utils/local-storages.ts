import { isServer } from 'shared/constants/commons';

export function setLocalStorage(key: string, value: unknown) {
  if (isServer) return;
  localStorage[key] = value;
}

export function getLocalStorage(key: string) {
  if (isServer) return '';
  if (!localStorage[key]) return '';
  return localStorage[key] as string;
}

export function listOfLocalStorage<T = Record<string, unknown>>() {
  if (isServer) return {};
  return localStorage as T;
}

export function clearLocalStorage() {
  if (isServer) return;
  localStorage.clear();
}
