module.exports = class MontePage {
  constructor () {
    this._toDoItemsList = 'body > section.section.fe__section--gray > div:nth-child(4)'
    this._employeeAvatarClass = '.employee__avatar'
    this._damiansDescription = 'body > section.section.fe__section--gray > div:nth-child(4) > div:nth-child(4) > div.narrow-team__description-container > p.narrow-team-member__description'
  }

  async setup (page) {
    this.page = page
    await this.page.goto('https://monterail.com/about/front-end-development-team/', { waitUntil: 'networkidle2' })
    this.page.setDefaultNavigationTimeout(900000)
    return true
  }

  async editDescription () {
    try {
      await this.page.waitForSelector(this._damiansDescription)
      const damiansDescription = await this.page.$(this._damiansDescription)
      await this.page.evaluate(element => {
        element.style = 'background-color: lawngreen'
        return element.innerHTML
      }, damiansDescription)
      return true
    } catch (e) {
      console.error(e)
    }
    return true
  }

  async getNumberOfDevs () {
    try {
      await this.page.waitForSelector(this._employeeAvatarClass)
      const listElement = await this.page.$$(this._employeeAvatarClass)
      return listElement.length
    } catch (e) {
      console.error(e)
    }
    return true
  }
}
