import React from "react";
import { auth } from "auth";
import { SessionProvider } from "next-auth/react";
import ClientExample2 from "@/components/client-example2";

async function Protected() {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <ClientExample2 />
    </SessionProvider>
  );
}

export default Protected;
