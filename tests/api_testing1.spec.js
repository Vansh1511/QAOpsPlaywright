const {test,expect} = require('@playwright/test')
let webContext ;

test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const userEmail = page.locator('#userEmail');
    const userPassword = page.locator('#userPassword');
    const loginButton = page.locator('#login');
  

   await userEmail.fill('johnyy3@gmail.com');
   await userPassword.fill('Password123!');
   await loginButton.click();
   await page.waitForLoadState('networkidle');
   await context.storageState({path:'state.json'})
   webContext = await browser.newContext({storageState:'state.json'})
})

test('',async () => {
    const page = await webContext.newPage()
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const productNames = await page.locator('.card-body b').allTextContents();
    console.log(productNames);
});