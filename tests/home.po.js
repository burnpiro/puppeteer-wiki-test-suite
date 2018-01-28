module.exports = class HomePage {
  constructor () {
    this._toDoInput = '#an-application > div > div > div.css-1v0wx4j > div.css-1bx1f1e > div.css-dyi9i0 > div > form > input'
    this._toDoItemsList = '#an-application > div > div > div.css-1v0wx4j > div.css-1bx1f1e > div.css-dyi9i0 > div > ul'
    this._firstListElement = '#an-application > div > div > div.css-1v0wx4j > div.css-1bx1f1e > div.css-dyi9i0 > div > ul > li:nth-child(1)'
    this._versionNo = '#___gatsby > div > header > div > div > div > a.css-1v42y44'
  }

  async setup (page) {
    this.page = page
    await this.page.goto(testUrl, { waitUntil: 'networkidle2' })
    return true
  }

  async addToDoItem (itemName) {
    try {
      await this.page.waitForSelector(this._toDoInput)
      const inputBox = await this.page.$(this._toDoInput)
      await inputBox.type(itemName)
      await inputBox.press('Enter')
    } catch (e) {
      console.error(e)
    }
    return true
  }

  async getToDoItemsLength () {
    try {
      await this.page.waitForSelector(this._toDoItemsList)
      return await this.page.$eval(this._toDoItemsList, el => el.children.length)
    } catch (e) {
      console.error(e)
    }
    return true
  }

  async firstListElementContent () {
    try {
      await this.page.waitForSelector(this._firstListElement)
      return await this.page.$eval(this._firstListElement, el => el.innerHTML)
    } catch (e) {
      console.error(e)
    }
    return true
  }

  async getVersionNo () {
    try {
      await this.page.waitForSelector(this._versionNo)
      const loggedDetailsHandle = await this.page.$(this._versionNo)
      return await this.page.evaluate(element => element.innerHTML, loggedDetailsHandle)
    } catch (e) {
      console.error(e)
      return false
    }
  }
}
