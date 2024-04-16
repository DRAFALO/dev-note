"use client";

import React from "react";
import isEqual from "react-fast-compare";
import { GoogleLogin } from "@react-oauth/google";

function GoogleAuthButton() {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}

export default React.memo(GoogleAuthButton, isEqual);
