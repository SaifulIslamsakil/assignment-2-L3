import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {
    languageOptions: { globals: globals.browser },
    rules:{
      "no-unused-vars": "error",
      "no-unused-console":"wrn"
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];