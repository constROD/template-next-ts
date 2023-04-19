/**
 * * When you add a new environment, you must add it to the list below.
 * * - You must add it to the `.env.local` file.
 * * - You must add it to the `.env.example` file.
 * * - You must add it to the `src/shared/constants/environments.ts` file.
 * * - You must add it to the `docker-compose*.yaml` files.
 */

import { z } from 'zod';

export const STAGES = {
  Dev: 'dev',
  Staging: 'staging',
  Prod: 'prod',
} as const;

const envVariables = z.object({
  STAGE: z.enum([STAGES.Dev, STAGES.Staging, STAGES.Prod]).default(STAGES.Dev),
});

const serverEnv = envVariables.parse({
  STAGE: process.env.STAGE,
});

const clientEnv = envVariables.parse({
  STAGE: process.env.NEXT_PUBLIC_STAGE,
});

export const env = typeof window === 'undefined' ? serverEnv : clientEnv;
