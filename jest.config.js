// HACK: duplicate the jest configs in the root of the monorepo for Wallaby.js
module.exports = {
  projects: [
    {
      displayName: 'client',
      transform: { '^.+\\.js?$': 'esbuild-jest' },
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/packages/client/**/*.test.js'],
    },
    {
      displayName: 'server',
      transform: { '^.+\\.js$': 'esbuild-jest' },
      testMatch: ['<rootDir>/packages/server/**/*.test.js'],
    },
  ],
};
