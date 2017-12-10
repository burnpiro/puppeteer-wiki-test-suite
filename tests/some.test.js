const LandingPage = require('./some.po')

describe('some test suite', () => {
  it('check one test', async () => {
    const landingPage = new LandingPage()
    await landingPage.setup(page)
    await landingPage.selectEnglish()
    const value = await landingPage.getLoggedValue()
    expect(value).toEqual('Not logged in')
  })
})
