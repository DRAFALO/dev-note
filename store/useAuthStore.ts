import { create } from "zustand";

interface AuthStoreType {
  user: {} | null;
  setUser: (user: {} | null) => void;
}

export const useAuthStore = create<AuthStoreType>((set) => ({
  user: null,
  setUser: (user: {} | null) => set({ user }),
}));

export const authStoreActions = {
  setUser: useAuthStore.getState().setUser,
};
