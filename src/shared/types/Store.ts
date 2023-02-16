type StoreResponse<T = unknown> = {
  data: T;
  error: unknown | null;
} | void;

export interface UserStore {
  /* States */
  user: string | null;

  /* Functions */
  signedIn: () => boolean;
  login: () => StoreResponse;
  logout: () => StoreResponse;
}
