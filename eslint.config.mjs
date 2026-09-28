import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    ignores: [".next/**", "node_modules/**", "_drafts/**", ".claude/**", ".agents/**", ".codex/**", ".gstack/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
