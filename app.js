const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://asunnot.oikotie.fi/myytavat-asunnot?pagination=1&locations=%5B%5B64,6,%22Helsinki%22%5D%5D&cardType=100&habitationType%5B%5D=1";
//const url = "https://www.etuovi.com/myytavat-asunnot/helsinki?haku=M1933323781";
const price_data = [];
async function getCount(){
    try{
        const response = await axios.get(url);
        const $=cheerio.load(response.data);

        const data = $("span");
        data.each(function(){
           const count = $(this).find(".searchResultCount").txt; 
        
           price_data.push({count})
        });

        console.log(price_data);
    }
    catch(error){
        console.error(error);
    }
}

getCount();
//var date = new Date();
//document.getElementById("p1").innerHTML = date;


/*
// Alternative aphroach
const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'
    });
    await page.goto(url);

    const [el] = await page.$x('/html/body/div[2]/div/div[3]/div/div[2]/div[1]/div[2]/div[3]/div/div[1]/div[1]/div[1]/h1/span[3]/span[1]')
    const txt = await el.getProperty('txtContent');
    const rawTxt = await txt.jsonValue();

    const [el2] = await page.$x('//*[@id="searchParameters"]/text()')
    const txt2 = await el.getProperty('txtContent');
    const city = await txt.jsonValue();

    console.log({rawTxt,city});

    browser.close();
}
scrapeProduct('https://www.etuovi.com/myytavat-asunnot/helsinki?haku=M1933323781');
*/
