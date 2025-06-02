const puppeteer = require('puppeteer');

async function launchBrowser() {
  const browser = await puppeteer.launch({ headless: false});
  return browser;
}

async function openPage(browser, url) {
  const page = await browser.newPage();
  await page.goto(url);
  return page;
}

async function closeBrowser(browser) {
  await browser.close();
}

module.exports = {
  launchBrowser,
  openPage,
  closeBrowser,
};