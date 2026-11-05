const {test,expect} =require('@playwright/test');

test('Verify Login',async ({page}) =>{
   await page.goto("https://demowebshop.tricentis.com/login")
   await page.locator("#Email").fill("testdemo191@gmail.com")
   await page.locator("#Password").fill("Test@12345")
   await page.locator("input.button-1.login-button").click()
   await expect(page.locator('div.header-links ul li a.account')).toHaveText('testdemo191@gmail.com')
})