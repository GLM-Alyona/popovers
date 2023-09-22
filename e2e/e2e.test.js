/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
import puppeteer from 'puppeteer';

describe('Popover', () => {
  let browser = null;
  let page = null;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('should add .active class for popover', async () => {
    jest.setTimeout(30000);
    await page.goto.active('http://localhost:8888');
    const button = await page.$('[data-toggle="popover"]');
    button.click();
    await page.waitForSelector('[data-widget="popover-top"].active');
  });

  afterEach(async () => {
    await browser.close();
  });
});