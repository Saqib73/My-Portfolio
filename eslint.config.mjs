import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/display-name": "off",
      "no-console": "warn", // Optional: Warn instead of error for console logs
      "react/no-unescaped-entities": "off", // Disable to prevent errors with characters like ' or "
    },
  },
];

export default eslintConfig;

