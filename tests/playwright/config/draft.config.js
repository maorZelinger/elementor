// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 30000,
  globalTimeout: 600000,
  reporter: 'line',
  testMatch:/draft/,
  testDir:'../',
  workers:1,
  use: {
    headless: false,
    baseURL:'https://testimmain-9pxic.stg.elementor.cool/',
    viewport: { width: 1440, height: 960 },
  },
};

module.exports = config;

