// global-setup.js
const { chromium } = require("@playwright/test");

module.exports = async (config) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`${config.projects[0].use.baseURL}/wp-admin`);

  await page.waitForSelector("#wp-logo");
  await page.fill('input[name="log"]', "testim_main@elementor.com");
  await page.fill('input[name="pwd"]', "Aa123456!");
  await page.click("text=Log In");
  await page.waitForSelector("text=Dashboard");

  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: "storageState.json" });
  await browser.close();
};
