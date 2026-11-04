const {test,expect} = require('@playwright/test')

test('@web login with valid credentials', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  const userEmail = page.locator('#userEmail');
  const userPassword = page.locator('#userPassword');
  const loginButton = page.locator('#login');

  await userEmail.fill('johnyy3@gmail.com');
  await userPassword.fill('Password123!');
  await loginButton.click();
  await page.waitForLoadState('networkidle');
  const productNames = await page.locator('.card-body b').allTextContents();
  console.log(productNames);
  
})