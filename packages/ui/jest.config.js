const { TextDecoder, TextEncoder } = require('util');

module.exports = {
    
    collectCoverageFrom: [
      '**/*.{ts,tsx}',
      '!**/node_modules/**',
      '!**/.storybook/**',
      '!**/tests/**',
      '!**/coverage/**',
      '!jest.config.js',
    ],
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
    globals: {
      TextDecoder: TextDecoder,
      TextEncoder: TextEncoder,
    },
    setupFiles: ['<rootDir>/enzyme.js'],
    preset: 'ts-jest',
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testPathIgnorePatterns: ['/.next/', '/node_modules/', '/lib/', '/tests/', '/coverage/', '/.storybook/'],
    testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    testURL: 'http://localhost',
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
    },
    transform: {
      '.(ts|tsx)': 'babel-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    // snapshotSerializers: ["enzyme-to-json/serializer"],
  };