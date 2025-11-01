/**
 * Environment variable validation and access
 * Use this module instead of accessing process.env directly
 */

interface EnvConfig {
  VITE_SUPABASE_URL?: string;
  VITE_SUPABASE_ANON_KEY?: string;
  NODE_ENV: "development" | "production" | "test";
  MODE: string;
}

/**
 * Validated environment variables
 * Add validation here as needed
 */
export const env: EnvConfig = {
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
  NODE_ENV: import.meta.env.MODE === "production" ? "production" : "development",
  MODE: import.meta.env.MODE,
};

/**
 * Validates that required environment variables are present
 * Call this function at app startup in development
 */
export function validateEnv() {
  if (env.NODE_ENV === "development") {
    const requiredVars: (keyof EnvConfig)[] = [];
    const missing = requiredVars.filter((key) => !env[key]);

    if (missing.length > 0) {
      console.warn(
        `⚠️  Missing environment variables: ${missing.join(", ")}`
      );
    }
  }
}

