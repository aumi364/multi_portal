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
      setPrescriptionCode: payload =>
        set(state => ({
          user: {
            ...state.user,
            prescription_code: payload?.prescription_code,
          },
        })),
      setSecretCode: payload =>
        set(state => ({
          user: { ...state.user, secret_code: payload?.secret_code },
        })),
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
