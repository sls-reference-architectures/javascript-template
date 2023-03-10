import baseConfig from './jest.config.js';

const jestE2EConfig = {
  ...baseConfig,
  globalSetup: './test/common/jest.e2e.setup',
};

export default jestE2EConfig;
