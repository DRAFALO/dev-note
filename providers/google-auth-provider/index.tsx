import React from "react";
import isEqual from "react-fast-compare";
import { GoogleOAuthProvider as Provider } from "@react-oauth/google";

function GoogleAuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}>
      {children}
    </Provider>
  );
}

export default React.memo(GoogleAuthProvider, isEqual);
