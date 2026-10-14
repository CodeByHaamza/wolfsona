import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['packages/*/src/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['packages/*/src/**'],
      exclude: ['**/*.test.ts', '**/index.ts'],
      // Le moteur de règles est pur : il n'y a aucune excuse pour ne pas le couvrir.
      thresholds: {
        'packages/shared/src/**': { statements: 90, branches: 85, functions: 90, lines: 90 },
      },
    },
  },
});
