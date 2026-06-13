import { expoClient } from "@better-auth/expo/client";
import { createAuthClient } from "better-auth/react";
import * as SecureStore from "expo-secure-store";

const baseURL = process.env.EXPO_PUBLIC_BETTER_AUTH_URL;

export const authClient = createAuthClient({
  baseURL: baseURL ?? "http://localhost:8081",
  plugins: [
    expoClient({
      scheme: "basiccrm",
      storagePrefix: "basic-crm",
      storage: SecureStore,
    }),
  ],
});

export const auth = authClient;