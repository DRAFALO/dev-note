"use client";

import React from "react";

import { Button } from "@/components/ui/button";

import { authStoreActions } from "@/store/useAuthStore";

function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>

      <Button onClick={authStoreActions.setUser}>Login Fake</Button>
    </div>
  );
}

export default SignIn;
