// .storybook/main.js

const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  "core": {
        builder: "webpack5"
    },
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.tsx"
  ],
  "addons": [
    
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-controls',
    '@storybook/addon-postcss',
    {
        name: '@storybook/addon-postcss',
        options: {
          postcssLoaderOptions: {
            implementation: require('postcss'),
          },
        },
      },
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-webpack5"
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
    reactDocgenTypescriptOptions: {
       shouldExtractLiteralValuesFromEnum: true,
       propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
 },
}

