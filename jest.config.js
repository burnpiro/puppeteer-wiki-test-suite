const env = process.env.ENV || 'development'
const testUrl = process.env.TEST_URL || 'https://www.wikipedia.org/'

module.exports = {
  testMatch: [
    `**/?(*.)(spec|test).js`
  ],
  setupTestFrameworkScriptFile: `${__dirname}/setups/test.setup.js`,
  globals: { // available in all tests
    browser: null,
    page: null,
    testUrl,
    env
  }
}
