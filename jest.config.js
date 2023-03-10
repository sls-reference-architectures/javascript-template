const jestConfig = {
  setupFilesAfterEnv: ['jest-extended/all'],
  transform: {
    '^.+\\.jsx?$': 'esbuild-jest',
  },
};

export default jestConfig;
