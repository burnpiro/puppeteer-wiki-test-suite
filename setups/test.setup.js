const puppeteer = require('puppeteer')
const env = process.env.ENV || 'development'

beforeAll(async () => {
  jest.setTimeout(2400000)

  browser = await puppeteer.launch({
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
