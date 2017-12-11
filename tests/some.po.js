module.exports = class LandingPage {
  constructor () {
    this._linkToEng = '#js-link-box-en'
    this._loggedDetail = '#pt-anonuserpage'
  }

  async setup (page) {
    this.page = page
    await this.page.goto(testUrl, { waitUntil: 'networkidle2' })
    return true
  }

  async selectEnglish () {
    try {
      await this.page.waitForSelector(this._linkToEng)
      await this.page.click(this._linkToEng)
    } catch (e) {
      console.error(e)
    }
    return true
  }

  async getLoggedValue () {
    try {
      await this.page.waitForSelector(this._loggedDetail)
      const loggedDetailsHandle = await this.page.$(this._loggedDetail)
      const loggedDetailsValue = await this.page.evaluate(element => element.innerHTML, loggedDetailsHandle)
      return loggedDetailsValue
    } catch (e) {
      console.error(e)
      return false
    }
  }
}
