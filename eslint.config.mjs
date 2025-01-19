import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

const eslintConfig = [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      react: pluginReact,
      "react-hooks": reactHooksPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ignores: [
      "**/*.d.ts",
      "**/*.pkg",
      "**/*.yml",
      "**/.yarn/",
      "**/android/",
      "**/build/",
      "**/dist/",
      "**/generated/*",
      "**/ios/",
      "**/metro.config.js",
      "*.config.js",
      "*.config.mjs",
      "*.xml",
      "scripts/",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_*$",
          varsIgnorePattern: "^_*$",
          caughtErrorsIgnorePattern: "^_*$",
        },
      ],
      "arrow-body-style": ["error", "as-needed"],
      "linebreak-style": ["error", "unix"],
      "max-len": [
        "error",
        { code: 80, ignoreRegExpLiterals: true, ignoreStrings: true },
      ],
      "no-console": [
        "error",
        { allow: ["debug", "error", "info", "trace", "warn"] },
      ],
      "no-template-curly-in-string": "off",
      "object-shorthand": ["error", "always"],
      "quote-props": ["warn", "consistent-as-needed"],
      quotes: [
        "error",
        "single",
        { allowTemplateLiterals: true, avoidEscape: true },
      ],
      "react/jsx-curly-brace-presence": ["error", "always"],
      "react/self-closing-comp": ["error", { component: true, html: true }],
    },
  },
];

export default eslintConfig;
