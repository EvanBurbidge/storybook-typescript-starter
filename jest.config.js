// jest.config.js
module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  modulePaths: [
    '<rootDir>/src',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
  },
  testEnvironment: 'jsdom',
};