import { create } from "zustand";

import { AppStatusEnum } from "@/types/app-statuses";

interface AppStateStoreType {
  status: AppStatusEnum;
  setStatus: (status: AppStatusEnum) => void;
}

export const useAppStatusStore = create<AppStateStoreType>((set) => ({
  status: AppStatusEnum.IDLE,
  setStatus: (status: AppStatusEnum) => set({ status }),
}));

export const appStatusStoreActions = {
  setStatus: useAppStatusStore.getState().setStatus,
};
