const config = {
  root: true,
  extends: ["next/core-web-vitals"],
  plugins: ["@tanstack/query"],
  overrides: [
    {
      files: ["*.js"],
      parser: "espree",
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
  ],
};

module.exports = config;
