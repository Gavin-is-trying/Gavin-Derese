module.exports = {
  extends: ["next/core-web-vitals"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
      ],
    },
  ],
};