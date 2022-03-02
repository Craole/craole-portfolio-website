module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@next/next/recommended',
    'airbnb',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['import'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json'],
      },
    },
  },
  rules: {
    // next
    '@next/next/no-html-link-for-pages': 'off',

    // eslint
    'arrow-parens': 'off',
    'object-curly-newline': 'off',

    // react
    'react/function-components-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': ['off', { extensions: ['.mdx'] }],
    // jsx-a11y
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
  overrides: [
    {
      // typescript
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        project: ['tsconfig.json'],
        sourceType: 'module',
      },
      extends: ['airbnb-typescript'],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/indent': 'off',
      },
    },
    {
      // jest
      env: {
        jest: true,
      },
      files: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        project: ['tsconfig.json'],
        sourceType: 'module',
      },
      extends: [
        'plugin:testing-library/react',
        'plugin:jest/recommended'
      ],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: '**/?(*.)+(spec|test).[jt]s?(x)' },
        ],
      },
    },
    {
      // markdown
      files: ['**/*.mdx'],
      extends: ['plugin:mdx/recommended'],
      settings: {
        'mdx/code-blocks': false,
        'mds/language-mapper': {},
      },
    },
  ],
  ignorePatterns: [
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverages',
    'dist',
    '.turbo',
    '.eslintrc.js',
    '*.config.js',
  ]
}