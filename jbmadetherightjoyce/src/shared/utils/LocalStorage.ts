const isBrowser: boolean = typeof window !== 'undefined';

class LocalStorageUtil {
  static set(key: string, value: unknown): void {
    if (!isBrowser) return;
    localStorage[key] = value;
  }

  static get(key: string): string {
    if (!isBrowser) return '';
    if (!localStorage[key]) return '';
    return localStorage[key] as string;
  }

  static getAll(): { [key: string]: unknown } {
    if (!isBrowser) return {};
    return localStorage as { [key: string]: unknown };
  }

  static clear(): void {
    if (!isBrowser) return;
    localStorage.clear();
  }
}

export default LocalStorageUtil;
