module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias
    }
  }
  return config
}
