/**
 * * When you add a new environment, you must add it to the list below.
 * * - You must add it to the `.env.local` file.
 * * - You must add it to the `.env.example` file.
 * * - You must add it to the `src/shared/constants/environments.ts` file.
 * * - You must add it to the `docker-compose*.yaml` files.
 */

import { z } from 'zod';

import { IS_SERVER } from './commons';

export const STAGES = {
  Dev: 'dev',
  Staging: 'staging',
  Prod: 'prod',
} as const;

const envSchema = z.object({
  STAGE: z.enum([STAGES.Dev, STAGES.Staging, STAGES.Prod]).default(STAGES.Dev),
});

export const ENV = envSchema.parse({
  STAGE: IS_SERVER ? process.env.STAGE : process.env.NEXT_PUBLIC_STAGE,
});
