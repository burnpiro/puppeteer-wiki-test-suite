const puppeteer = require('puppeteer')
const env = process.env.ENV || 'development'

beforeEach(async () => {
  jest.setTimeout(2400000)

  browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  })

  page = await browser.newPage()

  // Capture logging
  if (env === 'developemnt') {
    page.on('console', (...args) => console.log.apply(console, ['[Browser]', ...args]))
  }
})

afterEach(async () => {
  await browser.close()
})
