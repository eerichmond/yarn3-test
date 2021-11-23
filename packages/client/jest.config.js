module.exports = {
  transform: { '^.+\\.js$': 'esbuild-jest' },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // This breaks the root level jest.config.js
};
