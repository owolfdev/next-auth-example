import CustomLink from "@/components/custom-link";

export default function Page() {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Middleware usage</h1>
      <p className="font-bold">
        this page is protected by middleware as defined by the auth.ts callbacks
        configuration code.
      </p>
      <p>
        This page is protected by using the universal{" "}
        <CustomLink href="https://nextjs.authjs.dev#auth">
          <code>auth()</code>
        </CustomLink>{" "}
        method in{" "}
        <CustomLink href="https://nextjs.org/docs/app/building-your-application/routing/middleware">
          Next.js Middleware
        </CustomLink>
        .
      </p>
    </div>
  );
}
