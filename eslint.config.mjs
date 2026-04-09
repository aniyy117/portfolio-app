import js from "@eslint/js";
import nextConfig from "eslint-config-next";
import reactPlugin from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";

const config = [
  js.configs.recommended,
  ...nextConfig,

  {
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },

    rules: {
      "no-console": "error",
      "no-unused-vars": "off",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

export default config;
