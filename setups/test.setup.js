const puppeteer = require('puppeteer')
const env = process.env.ENV || 'development'

let originalTimeout

beforeEach(() => {
  originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000000

  // Capture logging
  if (env === 'developemnt') {
    page.on('console', (...args) => console.log.apply(console, ['[Browser]', ...args]))
  }
})

afterEach(() => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
})

beforeAll(async () => {
  jest.setTimeout(54000000)

  browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  })
})

afterAll(async () => {
  await browser.close()
})
