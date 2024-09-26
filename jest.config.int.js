const baseConfig = require('./jest.config.js')

module.exports = {
  ...baseConfig,
  globalSetup: './test/common/jest.int.setup'
}
