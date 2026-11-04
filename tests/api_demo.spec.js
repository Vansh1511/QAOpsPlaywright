const {test,expect} = require('@playwright/test');

let webContext;

test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demowebshop.tricentis.com/login');
    await page.locator('#Email').fill('testdemo191@gmail.com')
    await page.locator('#Password').fill('Test@12345')
    await page.locator('input.button-1.login-button').click()
    await context.storageState({path:'Json/state1.json'})
    webContext = await browser.newContext({storageState:'Json/state1.json'})
   
})

test('Client Login through API',async () => {
    const page = await webContext.newPage()
    await page.goto('https://demowebshop.tricentis.com/login')
    await expect(page.locator('div.header-links a[href="/customer/info"]')).toHaveText('testdemo191@gmail.com')
    
});