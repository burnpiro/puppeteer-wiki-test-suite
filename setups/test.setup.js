const puppeteer = require('puppeteer')
const env = process.env.ENV || 'development'

let originalTimeout

beforeEach(() => {
  originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000
})

afterEach(() => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
})

beforeAll(async () => {
  jest.setTimeout(5400000)

  browser = await puppeteer.launch({
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  })

  // Capture logging
  if (env === 'developemnt') {
    page.on('console', (...args) => console.log.apply(console, ['[Browser]', ...args]))
  }
})

afterAll(async () => {
  await browser.close()
})
