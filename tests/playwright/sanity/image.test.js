const { test, expect } = require('@playwright/test');
const { editorPage } = require('../pages/editor-page');
const { wpAdminPage } = require('../pages/wp-admin-page');

test('Image widget sanity test', async ({ page }) => {
  const wpAdmin = new wpAdminPage(page);
  await wpAdmin.goto();
  await wpAdmin.login();
  await wpAdmin.openNewPage();
  
  const editor = new editorPage(page);
  await editor.addWidgitByName('image')

  await page.click('.elementor-control-media__preview');
  await page.click('text=Search No items found. Drop files to upload or Select Files Maximum upload file  >> input[type="search"]');
  await page.fill('text=Search No items found. Drop files to upload or Select Files Maximum upload file  >> input[type="search"]', 'basic');
  await page.waitForSelector('text=/Showing 4 of 4 media items/')
  await page.click('[aria-label="76b19580-d88e-3a36-bef7-9d7aa820ab42"], li[tabindex="0"]');
  await page.click('.button.media-button');
  const img = await editor.previewFrame.waitForSelector('img');
  const src = await img.getAttribute('src')
  expect(src).toContain('.jpeg')
});