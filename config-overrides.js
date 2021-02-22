/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      components: path.resolve(__dirname, 'src/components'),
      core: path.resolve(__dirname, 'src/core'),
      containers: path.resolve(__dirname, 'src/containers')
    }
  }
  return config
}
