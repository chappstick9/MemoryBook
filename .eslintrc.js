module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  env: {
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        argsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/type-annotation-spacing': 1,
    '@typescript-eslint/no-empty-function': 'off',
    curly: 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'prettier/prettier': 'off' //Don't enforce prettier through ESLint -- causes a lot of really ugly warnings/errors when editing. Set your IDE to auto-format on save using prettier.
  }
}
