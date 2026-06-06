import { dashClient, sentinelNativeClient } from "@better-auth/infra/native";
import { createAuthClient } from "better-auth/client";

const baseURL = process.env.EXPO_PUBLIC_BETTER_AUTH_URL;
const identifyUrl = process.env.EXPO_PUBLIC_BETTER_AUTH_KV_URL;

export const authClient = createAuthClient({
  baseURL: baseURL ?? "http://localhost:3000",
  plugins: [
    dashClient(),
    sentinelNativeClient({
      autoSolveChallenge: true,
      ...(identifyUrl ? { identifyUrl } : {}),
    }),
  ],
});

export const auth = authClient;