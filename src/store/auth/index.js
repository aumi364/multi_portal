import create from 'zustand';
import { persist } from 'zustand/middleware';

export const authStore = create(
  persist(
    set => ({
      user: null,
      token: null,
      userType: null,
      login: payload =>
        set({
          token: payload?.token,
          user: payload?.user,
          userType: payload?.type,
        }),
      logout: () =>
        set({
          token: null,
          user: null,
          userType: null,
        }),
    }),
    {
      name: 'auth', // unique name
    },
  ),
);
