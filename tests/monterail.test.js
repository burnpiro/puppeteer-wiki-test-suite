const MontePage = require('./monterail.po')
const ScreenTest = require('puppeteer-screenshot-tester')

describe('monterail page suite', async () => {
  let page,
    homePage

  beforeEach(async () => {
    page = await browser.newPage()
    await page.setViewport({ width: 1900, height: 1080 })
    homePage = new MontePage()
    await homePage.setup(page)
  })

  it('loaded page without errors', async () => {
    const pageTitle = await page.title()
    expect(pageTitle).toEqual('Front-end development team · Monterail')
  })

  it('shows 14 devs', async () => {
    const listLength = await homePage.getNumberOfDevs()
    expect(listLength).toEqual(14)
  })

  it('displays page in right way', async () => {
    const tester = await ScreenTest()
    // await homePage.editDescription()
    const result = await tester(page, 'developersPage2', { fullPage: true })
    expect(result).toBe(true)
  })
})
