// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 40000,
  globalTimeout: 900000,
  reporter: 'list',
  testDir: '../sanity',
  globalSetup: require.resolve('./global-setup'),
  retries:1,
  use: {
    headless: false,
    storageState: 'storageState.json',
    baseURL:'https://testimmain-9pxic.stg.elementor.cool/',
    viewport: { width: 1440, height: 960 },
    video: 'on-first-retry',
  },
};

module.exports = config;

