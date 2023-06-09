export const ROUTES = {
  SAMPLES: '/samples',
  CSR: '/csr',
  SSR: '/ssr',
  SSG: '/ssg',
  TODOS: '/todos',

  LOGIN: '/login',

  HOME: '/',
  ABOUT: '/about',
} as const;

export const IS_SERVER = typeof window === 'undefined';

export const DEFAULT_ASSET_DOMAIN = '/assets' as const;

/**
 * *Increment this version number when you update the production assets.
 */
export const DEFAULT_ASSET_VERSION = '1.0.0' as const;

export const ERROR_TYPES = {
  Error: 'Error',
  SyntaxError: 'SyntaxError',
  TypeError: 'TypeError',
  ReferenceError: 'ReferenceError',
  RangeError: 'RangeError',
  EvalError: 'EvalError',
  URIError: 'URIError',
  AxiosError: 'AxiosError',
} as const;
