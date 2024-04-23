"use client";

import React from "react";
import isEqual from "react-fast-compare";
import delay from "delay";

import LOCAL_STORAGE_KEYS from "@/constants/local-storage-keys";
import { appStatusStoreActions } from "@/store/useAppStatusStore";
import { authStoreActions } from "@/store/useAuthStore";
import { AppStatusEnum } from "@/types/app-statuses";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const onInitialized = React.useCallback(async () => {
    try {
      const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);

      if (token) {
        //  api call /profile to get user data
        // const user = await getProfile();
        await delay(3000); // fake api calling

        authStoreActions.setUser(token);
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error(error); // eslint-disable-line no-console
      }
    } finally {
      appStatusStoreActions.setStatus(AppStatusEnum.INITIALIZED);
    }
  }, []);

  React.useEffect(() => {
    onInitialized();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return children;
}

export default React.memo(AuthProvider, isEqual);
