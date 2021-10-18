const { addWidget } = require('../assets/addWidget')
exports.wpAdminPage = class wpAdminPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/wp-admin");
  }

  async login() {
    const loggedIn = await this.page.$("text=Dashboard")
    if(loggedIn) {
      return
    }
    await this.page.waitForSelector("#wp-logo");
    // await this.page.click('input[name="log"]');
    await this.page.fill('input[name="log"]', "testim_main@elementor.com");
    // await this.page.click('input[name="pwd"]');
    await this.page.fill('input[name="pwd"]', "Aa123456!");
    await this.page.click("text=Log In");
    await this.page.waitForSelector("text=Dashboard");
  }

  async openNewPage() {
    await this.page.waitForSelector("text=Dashboard");
    await this.page.click("text=Pages"),
    await Promise.all([
      this.page.waitForNavigation({ url: '/wp-admin/post-new.php?post_type=page'}),
      this.page.click('div[role="main"] >> text=Add New'),
    ]);
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click("text=← Back to WordPress Editor Edit with Elementor"),
    ]);
    await this.page.waitForSelector("#elementor-panel-header-title");
  }
};
