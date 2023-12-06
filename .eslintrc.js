module.exports = {
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@babel/eslint-parser",
  settings: {
    babel: {
      configFile: ".babelrc",
    },
  },
  parserOptions: {
    requireConfigFile: false,
  },

  plugins: ["react", "react-hooks", "testing-library", "prettier", "jsx", "flow"],
  rules: {
    "prettier/prettier": "warn",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: "./",
        devDependencies: true,
      },
    ],
  },
};
