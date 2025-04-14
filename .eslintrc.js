module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    // Reglas específicas para Tailwind CSS v4
    "no-unknown-at-rules": "off", // Desactivar la regla que prohíbe @import desconocidos
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "import",
          "custom-variant",
          "theme",
          "layer",
        ],
      },
    ],
  },
};
