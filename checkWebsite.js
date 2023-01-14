const puppeteer = require('puppeteer');

async function checkWebsite() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const response = await page.goto('https://asunnot.oikotie.fi/myytavat-asunnot?pagination=1&locations=%5B%5B64,6,%22Helsinki%22%5D%5D&cardType=100&habitationType%5B%5D=1');
    console.log(response.status());
    await browser.close();
}
checkWebsite();