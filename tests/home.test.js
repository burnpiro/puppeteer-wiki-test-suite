const HomePage = require('./home.po')

describe('home page suite', async () => {
  let page,
    homePage

  beforeEach(async () => {
    page = await browser.newPage()
    await page.setViewport({ width: 1920, height: 1080 })
    homePage = new HomePage()
    await homePage.setup(page)
  })

  it('loaded page without errors', async () => {
    const pageTitle = await page.title()
    expect(pageTitle).toEqual('React - A JavaScript library for building user interfaces')
  })

  it('shows current version of React', async () => {
    const value = await homePage.getVersionNo()
    expect(value).toEqual('v<!-- -->16.2.0')
  })

  it('displays list of results when user types into search box', async () => {
    await homePage.addToDoItem('component')
    const listLength = await homePage.getToDoItemsLength()
    const firstElementContent = await homePage.firstListElementContent()
    expect(listLength).toEqual(1)
    expect(firstElementContent).toEqual('component')
  })
})
