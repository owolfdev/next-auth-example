An example of how to use [NextAuth.js](https://next-auth.js.org) to add authentication to a Next.js app.

this is a slightly modified version of the original **[NextAuth.js example repo](https://github.com/nextauthjs/next-auth-example.git)**.

### About NextAuth.js

NextAuth.js is a complete open source authentication solution. NextAuth.js is an easy to implement, full-stack (client/server) open source authentication library originally designed for [Next.js](https://nextjs.org) and [Serverless](https://vercel.com).

Go to [next-auth.js.org](https://authjs.dev) for more information and documentation.

## Project Overview

This is an example application that shows how `next-auth` is applied to a basic Next.js app.

The deployed version of the original example can be found at [`next-auth-example.vercel.app`](https://next-auth-example.vercel.app)

## Our Custom Example:

**Note:** This example is a fork of the official **[NextAuth.js example repository](https://github.com/nextauthjs/next-auth-example.git)**.

### Code:

[https://github.com/owolfdev/next-auth-example](https://github.com/owolfdev/next-auth-example)

### Deployment:

[https://next-auth-example-weld.vercel.app/](https://next-auth-example-weld.vercel.app/)

This example features four different methods of implementing Next Auth authentication in a Next.js application.

### A. Server-Side Configurations

#### 1. React Server Component Usage

This example demonstrates using NextAuth.js in a React Server Component. The `auth()` method is called server-side to obtain session information. This method is useful for server-rendered pages where you need to know the user's authentication status before rendering the page.

#### 2. Route Handler Usage

This example shows how to protect API routes using NextAuth.js. The `auth()` method is used within an API route (a Route Handler) to ensure that only authenticated requests can access certain data. The client-side code fetches data from this protected API route.

#### 3. Middleware Usage

This method involves using Next.js Middleware to protect certain routes based on authentication status. The `authorized` callback in the `auth.ts` configuration checks if the user is authenticated and determines access to protected paths.

### B. Client-Side Configuration

#### Client Side Rendering Usage

This example uses the `useSession` React Hook from NextAuth.js to manage session state on the client side. This approach is common for pages that render primarily on the client side. It involves checking the user's session and dynamically rendering content based on the authentication status. The `UpdateForm` component in this example allows for updating session information, demonstrating how to interact with the session state on the client side.

### Key Concepts and Takeaways

- **Server vs Client Authentication**: Understanding when to use server-side or client-side authentication is crucial. Server-side methods are typically used for pages that need to be secure and rendered based on the user's session, whereas client-side methods are used for dynamic user interfaces that adapt to the session state.
- **Protected Routes and API**: Both server-side and client-side configurations show how to protect routes and API endpoints using NextAuth.js.
- **Session Management**: The examples demonstrate how to retrieve and manage session information, a key aspect of handling authentication in web applications.
- **Middleware in Next.js**: The middleware example highlights the powerful feature of Next.js that allows intercepting requests and implementing logic such as authentication checks before the request is processed further.

These examples are a great way to get acquainted with various authentication patterns in Next.js using NextAuth.js. Remember, the choice of method depends on the specific needs of your application, such as the level of security required, the type of content being served, and the user experience you want to provide.

## Getting Started

### 1. Clone the repository and install dependencies

```bash
git clone https://github.com/owolfdev/next-auth-example.git
cd next-auth-example
npm install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Add details for one or more providers (e.g. Google, Twitter, GitHub, Email, etc).

#### Database

A database is needed to persist user accounts and to support email sign in. However, you can still use NextAuth.js for authentication without a database by using OAuth for authentication. If you do not specify a database, [JSON Web Tokens](https://jwt.io/introduction) will be enabled by default.

You **can** skip configuring a database and come back to it later if you want.

For more information about setting up a database, please check out the following links:

- Docs: [authjs.dev/reference/core/adapters](https://authjs.dev/reference/core/adapters)

### 3. Configure Authentication Providers

1. Review and update options in `auth.ts` as needed.

2. When setting up OAuth, in the developer admin page for each of your OAuth services, you should configure the callback URL to use a callback path of `{server}/api/auth/callback/{provider}`.

e.g. For Google OAuth you would use: `http://localhost:3000/api/auth/callback/google`

A list of configured providers and their callback URLs is available from the endpoint `api/auth/providers`. You can find more information at https://authjs.dev/getting-started/providers/oauth-tutorial

1. You can also choose to specify an SMTP server for passwordless sign in via email.

### 4. Start the application

To run your site locally, use:

```bash
npm run dev
```

To run it in production mode, use:

```bash
npm run build
npm run start
```

### 5. Preparing for Production

Follow the [Deployment documentation](https://authjs.dev/getting-started/deployment)

## Acknowledgements

## License

ISC
