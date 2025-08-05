// eslint.config.mjs
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
    },
    rules: {
      semi: ["error", "always"],             // Enforce semicolons
      quotes: ["error", "single"],           // Enforce single quotes
      indent: ["error", 2],                  // Enforce 2-space indentation
      "no-unused-vars": "warn",              // Warn about unused variables
      "no-console": "off",                  // Warn about console.log
    },
  },
];
