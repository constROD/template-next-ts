import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

/* To load environment variables in tests */
const { loadEnvConfig } = require('@next/env');
loadEnvConfig(process.env.PWD);

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'c8',
      reporter: ['lcov', 'text-summary'],
    },
    setupFiles: ['./src/setupTests.ts'],
  },
});
