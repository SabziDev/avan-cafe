import { defineConfig } from "@fullstacksjs/eslint-config";
import reactRefresh from "eslint-plugin-react-refresh";
import unicorn from "eslint-plugin-unicorn";

import addBlankLineBeforeReturn from "./eslint-configs/add-blank-line-before-return/add-blank-line-before-return.js";
import mergeDuplicateIdAndClassNameProps from "./eslint-configs/merge-duplicate-id-and-classname-props/merge-duplicate-id-and-classname-props.js";
import mergeExports from "./eslint-configs/merge-exports/merge-exports.js";
import noInvalidIdAndClassNameValue from "./eslint-configs/no-invalid-id-and-classname-value/no-invalid-id-and-classname-value.js";
import noUselessTemplateLiteral from "./eslint-configs/no-useless-template-literal/no-useless-template-literal.js";
import sortComments from "./eslint-configs/sort-comments/sort-comments.js";
import sortJsxProps from "./eslint-configs/sort-jsx-props/sort-jsx-props.js";

const customPlugin = {
  rules: {
    "add-blank-line-before-return":
      addBlankLineBeforeReturn.rules["add-blank-line-before-return"],

    "merge-duplicate-id-and-classname-props":
      mergeDuplicateIdAndClassNameProps.rules[
        "merge-duplicate-id-and-classname-props"
      ],

    "merge-exports": mergeExports.rules["merge-exports"],

    "no-invalid-id-and-classname-value":
      noInvalidIdAndClassNameValue.rules["no-invalid-id-and-classname-value"],

    "no-useless-template-literal":
      noUselessTemplateLiteral.rules["no-useless-template-literal"],

    "sort-comments": sortComments.rules["sort-comments"],

    "sort-jsx-props": sortJsxProps.rules["sort-jsx-props"],
  },
};

const config = defineConfig(
  {
    tailwind: { entryPoint: "./src/input.css" },

    plugins: {
      custom: customPlugin,
    },

    rules: {
      "func-style": ["warn", "expression"],
      quotes: [
        "error",
        "double",
        { avoidEscape: true, allowTemplateLiterals: false },
      ],
      eqeqeq: ["error", "always"],
      "no-console": "warn",

      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",

      "custom/add-blank-line-before-return": "warn",
      "custom/merge-duplicate-id-and-classname-props": "warn",
      "custom/merge-exports": "warn",
      "custom/no-invalid-id-and-classname-value": "error",
      "custom/no-useless-template-literal": "warn",
      "custom/sort-comments": "warn",
      "custom/sort-jsx-props": "warn",
    },
  },

  reactRefresh.configs.vite,
  unicorn.configs.recommended,
  {
    rules: {
      "unicorn/consistent-function-scoping": "warn",

      "unicorn/filename-case": "off",
      "unicorn/prefer-global-this": "off",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/no-null": "off",
    },
  },
);

export default config;
