"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { ROUTES } from "@/constants/routes";
import { useAuthStore } from "@/store/useAuthStore";

function AuthLayout({ children }: { children: React.ReactNode }) {
  const search = useSearchParams();
  const router = useRouter();

  const user = useAuthStore((state) => state.user);

  const urlParams = React.useMemo(
    () => ({
      redirect: search.get("redirect"),
    }),
    [search],
  );

  React.useEffect(() => {
    if (user) {
      router.push(urlParams.redirect || ROUTES.DASHBOARD_PROFILE.LINK);
    }
  }, [router, urlParams.redirect, user]);

  return children;
}

export default AuthLayout;
