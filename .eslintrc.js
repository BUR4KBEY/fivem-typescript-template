module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'prettier',
        'eslint-plugin-prettier',
        'eslint-plugin-import'
    ],
    ignorePatterns: ['scripts/*.js'],
    rules: {
        'import/extensions': 0,
        'import/prefer-default-export': 1,
        'import/export': 0,
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'import/no-useless-path-segments': 0
    }
};
