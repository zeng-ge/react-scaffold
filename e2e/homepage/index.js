import 'babel-polyfill';
import { expect } from 'chai';
import puppeteer from 'puppeteer';
import timeout from '../utils/timeout';

describe('homepage',function(){
  // this.timeout(20000)
  let browser = null;
  let page = null;
  before(async ()=>{
    browser= await puppeteer.launch({headless: false});
    page = await browser.newPage();
  });

  after(async () => {
    await browser.close();
  });

  it('open homepage successfully', async () => {
    /**
     * page.$相当于document.querySelector
     * page.$$相当于document.querySelectorAll
     * */
    await page.goto('http://127.0.0.1:9090');
    const title = await page.$eval('h1', h1 => h1.innerHTML)
    expect(title).to.equal('react-scaffold');
  });

  it('default page shoud be calendar', async ()=>{
    const activeText = await page.$eval('li.active', item => item.innerHTML);
    expect(activeText).to.equal('Calendar');
    await timeout(10000)
  });

  it('entry calendar list page successfully', async ()=> {
    const liArray = await page.$$('li');
    const listLi = liArray[1];
    listLi.click();
    await timeout(10000)
  });

  it('entry calendar page successfully', async () => {
    const liArray = await page.$$('li');
    const listLi = liArray[0];
    listLi.click();
    await timeout(10000)
  });

})