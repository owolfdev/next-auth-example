import CustomLink from "@/components/custom-link";

export default function Test() {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Middleware usage</h1>
      <div>/app/middleware-example/page.tsx</div>
      <p className="font-bold">
        this page is protected by middleware as defined by the auth.ts callbacks
        configuration code.
      </p>
      <div>
        <pre>{`callbacks: {
    authorized({ request, auth }) {
      const protectedPaths = ["/middleware-example", "/middleware-example2"];
      const { pathname } = request.nextUrl;
      // Check if the pathname is in the list of protected paths
      if (protectedPaths.includes(pathname)) {
        // Return true if authenticated (auth object exists), false otherwise
        return !!auth;
      }
      // Default to true for all other paths
      return true;
    },
  },`}</pre>
      </div>
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
