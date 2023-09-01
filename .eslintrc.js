module.exports = {
   env: {
      browser: true,
      es2018: true,
   },
   extends: 'airbnb-base',
   overrides: [
   ],
   ignorePatterns: ["module.exports/*", "*.config.js", "*.eslintrc.js"],
   // parser: 'vue-eslint-parser',
   // parserOptions: {
   //    ecmaVersion: 'latest',
   //    sourceType: 'module',
   //    ecmaFeatures: {
   //       parser: '@babel/eslint-parser',
   //       globalReturn: false,
   //       impliedStrict: false,
   //       jsx: false
   //    }
   // },

   rules: {
      indent: ['warn', 3],
      'comma-dangle': ['warn', 'always-multiline'],
      'no-plusplus': 'off',
      'no-unused-vars': 'off',
      'quotes': ["error", "double", { "avoidEscape": true }]
   },
};
