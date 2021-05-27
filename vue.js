const baseConfig = require('./index');

module.exports = {
  ...baseConfig,
  extends: [
    ...baseConfig.extends,
    'plugin:vue/essential',
  ],
  rules: {
    'no-param-reassign': 'off', // Vue depends
    'no-bitwise': 'off', // Vue depends
    'func-names': 'off', // Vue depends
    'vue/require-v-for-key': 'off', // Disagree - non-component loops don't need keys
  },
};