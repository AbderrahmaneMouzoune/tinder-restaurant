import type { Config } from 'drizzle-kit'
import * as dotenv from 'dotenv'

// Read the .env file if it exists, or a file specified by the
// dotenv_config_path parameter that's passed to Node.js
dotenv.config()

if (!process.env.NEON_DATABASE_URL)
  throw new Error('NEON_DATABASE_URL not found in environment')

export default {
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEON_DATABASE_URL,
  },
  strict: true,
} satisfies Config
