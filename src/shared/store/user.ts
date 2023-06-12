import { AUTH_LS } from 'shared/constants/local-storage';
import { type StoreResponse } from 'shared/types/store';
import { LocalStorageUtil } from 'shared/utils/local-storage';
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
  user: { email: string } | null; // TODO: Add actual user info.

  /* Computed States */
  computed: {
    isSignedIn: boolean;
  };

  /* Functions */
  verifySession: () => Promise<StoreResponse>;
  login: (args: { email: string; password: string }) => Promise<StoreResponse>;
  logout: () => Promise<StoreResponse>;
  forgotPassword: (args: { email: string }) => Promise<StoreResponse>;
  forgotPasswordConfirm: (args: {
    email: string;
    code: string;
    newPassword: string;
  }) => Promise<StoreResponse>;
  changePassword: (args: { oldPassword: string; newPassword: string }) => Promise<StoreResponse>;
}

export const useUserStore = create(
  immer<UserStore>((set, get) => ({
    /* States */
    user: null,

    /* Computed */
    computed: {
      get isSignedIn() {
        return !!get().user;
      },
    },

    /* Functions */
    verifySession: async () => {
      try {
        if (!get().user) return; // TODO: Temporary added to simulate the previous signed in state
        // TODO: Check session and set user state
        LocalStorageUtil.set(AUTH_LS.PrevSignedIn, true);
      } catch (error) {
        LocalStorageUtil.remove(AUTH_LS.PrevSignedIn);
      }
    },

    login: async args => {
      set(state => {
        state.user = { email: args.email };
      });
      await get().verifySession();
    },

    logout: async () => {
      set(state => {
        state.user = null;
      });
      await get().verifySession();
      LocalStorageUtil.remove(AUTH_LS.PrevSignedIn); // TODO: Temporary added to simulate the previous signed in state
    },

    forgotPassword: async args => {
      // eslint-disable-next-line no-console
      console.debug(args);
    },

    forgotPasswordConfirm: async args => {
      // eslint-disable-next-line no-console
      console.debug(args);
    },

    changePassword: async args => {
      // eslint-disable-next-line no-console
      console.debug(args);
    },
  }))
);
