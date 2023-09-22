/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('Popover', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8888';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false,
      slowMo: 250,
      devtools: true,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close().catch(err =>
      console.log(err));
  });

  test('should add .active class for popover', async () => {
    await page.goto(baseUrl);
    const button = await page.$('[data-toggle="popover"]');
    button.click();
    await page.waitForSelector('[data-widget="popover-top"].active');
  });
});