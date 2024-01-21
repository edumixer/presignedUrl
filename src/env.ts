import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  CLOUDFARE_ENDPOINT: z.string().url(),
  CLOUDFARE_ACCESS_KEY: z.string(),
  CLOUDFARE_SECRET_ACCESS_KEY: z.string(),
})

export const env = envSchema.parse(process.env);
