const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const UserDataDir = require('puppeteer-extra-plugin-user-data-dir');
puppeteer.use(UserDataDir())


puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=500,500', '--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36' ] }).then(async browser => {
  console.log('-- Running chrome!!');
  const page = await browser.newPage();
  await page.goto('https://moneroocean.stream/#/dashboard?addr=46s4YKAvP8iQU4VBNmMMjoDU9SmiU13HvSdq7A7r1x2GCuvmGxgq3yh61nxw7yCyRRh2KLp13pNWvWhFP4zBMwhiKvDwQ1y&web_miner');
  page.on('console', (msg) => console.log(msg.text()));
})
