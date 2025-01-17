const cool = require('cool-ascii-faces');
const express = require('express')
const path = require('path')
const puppeteer = require('puppeteer');
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/times', (req, res) => res.send(showTimes()))
  .get('/ss', (req, res) => {
    ss()
    res.send('er')
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  showTimes = () => {
    let result = '';
    const times = process.env.TIMES || 5;
    for (i = 0; i < times; i++) {
      result += i + ' ';
    }
    return result;
  }

   ss = async () => { 
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
      width: 420,
      height: 720,
      deviceScaleFactor: 1,
    });
    await page.goto('https://www.zeta.tech/in').catch((error) => console.log(error))
    await page.screenshot({ path: 'public/example.png', fullPage: true});
    await browser.close();
    return 'true'
  } 

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
      width: 420,
      height: 720,
      deviceScaleFactor: 1,
    });
    await page.goto('https://www.zeta.tech/in').catch((error) => console.log(error))
    await page.screenshot({ path: 'public/example.png', fullPage: true});
    await browser.close();
  })();