import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://renewing-airedale-8423.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig;
