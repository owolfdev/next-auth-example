import CustomLink from "@/components/custom-link";
import SessionData from "@/components/session-data";
import { auth } from "auth";

export default async function Page() {
  const session = await auth();

  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">React Server Component Usage</h1>
      <div>
        <pre>{`/app/server-example/page.tsx`}</pre>
      </div>
      <p>
        This page is server-rendered as a{" "}
        <CustomLink href="https://nextjs.org/docs/app/building-your-application/rendering/server-components">
          React Server Component
        </CustomLink>
        . It gets the session data on the server using{" "}
        <CustomLink href="https://nextjs.authjs.dev#auth">
          <code>auth()</code>
        </CustomLink>{" "}
        method.
      </p>
      <div className="flex flex-col gap-2 font-mono">
        <hr />
        <code>const session = await auth();</code>
        <code>{`import {auth} from "auth";`}</code>
        <hr />
      </div>
      {session ? (
        <div className="text-2xl font-bold">Authorized!</div>
      ) : (
        <div className="text-2xl font-bold">Not Authorized!</div>
      )}
      <SessionData session={session} />
    </div>
  );
}
