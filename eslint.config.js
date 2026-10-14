// @ts-check
import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['**/dist/**', '**/coverage/**', '**/node_modules/**']),
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        // Les fichiers de config à la racine n'appartiennent à aucun paquet :
        // on les rattache au projet par défaut plutôt que de les exclure du lint.
        projectService: {
          allowDefaultProject: ['eslint.config.js', 'vitest.config.ts'],
        },
      },
    },
    rules: {
      // Le moteur de règles ne doit jamais muter l'état reçu : on le rend explicite.
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
    },
  },
]);
