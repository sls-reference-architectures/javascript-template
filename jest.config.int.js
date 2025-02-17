const baseConfig = require('./jest.config.js')

module.exports = {
  ...baseConfig,
  transformIgnorePatterns: [
    '/node_modules/(?!(@middy/core|@middy/http-error-handler|@middy/util|@middy/input-output-logger)/)',
  ],
  moduleNameMapper: {
    '^@middy/core$': '<rootDir>/node_modules/@middy/core',
    '^@middy/util$': '<rootDir>/node_modules/@middy/util',
    '^@middy/http-error-handler$': '<rootDir>/node_modules/@middy/http-error-handler',
    '^@middy/input-output-logger$': '<rootDir>/node_modules/@middy/input-output-logger',
  },
  globalSetup: './test/common/jest.int.setup'
}
