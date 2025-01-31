module.exports = {
  extends: require.resolve('@ostai/eslint-config'),
  env: {
    browser: true
  },
  rules: {
    'import/no-extraneous-dependencies': 0
  }
}
