import { type StoreResponse } from 'shared/types/store';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

/**
 * ? Note: When using Computed States you must follow the following rules.
 *
 * ! Wrong:
 * ! const { isSignedIn } = useUserStore(state => state.computed);
 *
 * ! If you use the following, it will not detect the change.
 *
 * * Correct:
 * * const isSignedIn = useUserStore(state => state.computed.isSignedIn);
 *
 * * If you use the following, it will detect the change.
 */

export interface UserStore {
  /* States */
  email: string | null;

  /* Computed States */
  computed: {
    isSignedIn: boolean;
  };

  /* Functions */
  verifySession: () => StoreResponse;
  login: (email: string) => StoreResponse;
  logout: () => StoreResponse;
}

export const useUserStore = create(
  immer<UserStore>((set, get) => ({
    /* States */
    email: null,

    /* Computed */
    computed: {
      get isSignedIn() {
        return !!get().email;
      },
    },

    /* Functions */
    verifySession: () => {},

    login: (email: string) => {
      set(state => {
        state.email = email;
      });
      get().verifySession();
    },

    logout: () => {
      set(state => {
        state.email = null;
      });
      get().verifySession();
    },
  }))
);
