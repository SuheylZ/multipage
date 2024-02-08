module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "array": [
      "warn",
      { default: "array" }
    ],
    "@typescript-eslint/no-explicit-any": "error"
    , "@typescript-eslint/prefer-as-const": "error"
    , "@typescript-eslint/prefer-for-of": "error"
    , "@typescript-eslint/prefer-readonly-parameter-types": ["warn", {
      allow :[]
    }]
  }
}