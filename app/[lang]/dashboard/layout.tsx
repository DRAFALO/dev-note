"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

import AppLoading from "@/components/common/app-loading";

import { ROUTES } from "@/constants/routes";
import { useAppStatusStore } from "@/store/useAppStatusStore";
import { useAuthStore } from "@/store/useAuthStore";
import { AppStatusEnum } from "@/types/app-statuses";
import { LocaleEnum } from "@/types/locales";

interface Props {
  params: { lang: LocaleEnum };
}

function DashboardLayout(props: React.PropsWithChildren<Props>) {
  const { children, params } = props;

  const router = useRouter();
  const pathname = usePathname();

  const appStatus = useAppStatusStore((state) => state.status);
  const user = useAuthStore((state) => state.user);

  React.useEffect(() => {
    if (appStatus === AppStatusEnum.INITIALIZED && !user) {
      // Cant not push redirect to sign in
      router.push(
        `/${params.lang}/${ROUTES.SIGN_IN.LINK}?redirect=${pathname}`,
      );
    }
  }, [appStatus]); // eslint-disable-line react-hooks/exhaustive-deps

  if (appStatus === AppStatusEnum.IDLE || !user) {
    return <AppLoading />;
  }

  return children;
}

export default DashboardLayout;
