module.exports = {
  setupFilesAfterEnv: ['jest-extended/all'],
  transform: {
    '^.+\\.jsx?$': 'esbuild-jest'
  }
}
