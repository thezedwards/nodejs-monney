const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const UserDataDir = require('puppeteer-extra-plugin-user-data-dir');
puppeteer.use(UserDataDir())


puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=500,500', '--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36' ] }).then(async browser => {
  console.log('-- Running chrome!!');
  const page = await browser.newPage();
  await page.goto('https://vippro99.github.io/-meocoder-nodejs-tool/index.html');
  page.on('console', (msg) => console.log(msg.text()));
  await page.waitForTimeout(((Math.floor(Math.random() * 6) + 52) * 60) * 1000);
  await browser.close();

})
