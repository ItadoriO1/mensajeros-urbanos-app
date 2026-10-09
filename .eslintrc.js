module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'dist', 'node_modules'],
  rules: {
    // Nivel 1: Prohibición de tipo any explícito
    '@typescript-eslint/no-explicit-any': 'error',

    // Nivel 2: Convenciones semánticas de nombres
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'class', format: ['PascalCase'] },
      { selector: 'interface', format: ['PascalCase'] },
      { selector: 'typeAlias', format: ['PascalCase'] },
      { selector: 'variable', format: ['camelCase', 'UPPER_CASE'] },
      { selector: 'function', format: ['camelCase'] },
      { selector: 'method', format: ['camelCase'] },
    ],

    // Nivel 3: Aislamiento arquitectónico hexagonal
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: './src/domain',
            from: './src/infrastructure',
            message: 'Violación Hexagonal: El dominio puro no puede depender de infrastructure.',
          },
          {
            target: './src/domain',
            from: './src/api',
            message: 'Violación Hexagonal: El dominio puro no puede depender de la API / BFF.',
          },
        ],
      },
    ],
  },
};
