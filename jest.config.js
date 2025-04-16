const config = {
  setupFilesAfterEnv: ['jest-extended/all'],
  transform: {
    '^.+\\.jsx?$': 'esbuild-jest',
  },
};

export default config;
