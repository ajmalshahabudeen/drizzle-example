import { defineConfig } from "drizzle-kit"

export default defineConfig({
    schema: "./drizzle/schema.ts",
    out: "./drizzle/generated",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL as string
    },
    verbose: true,
    strict: true
})