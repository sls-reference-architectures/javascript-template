import baseConfig from './jest.config.js';

const jestIntConfig = {
  ...baseConfig,
  globalSetup: './test/common/jest.int.setup',
};

export default jestIntConfig;
