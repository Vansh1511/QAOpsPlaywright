import {test, expect} from '@playwright/test';

test('Register a new user', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/register');  
  const firstName = page.locator('#firstName');
  const lastName = page.locator('#lastName');
  const userEmail = page.locator('#userEmail');
  const userMobile = page.locator('#userMobile');
  //const gender = page.locator('input[@value="Male"]');
  const password = page.locator('#userPassword');
  const confirmPassword = page.locator('#confirmPassword');
  const checkBox = page.locator('[formcontrolname="required"]');
  const registerButton = page.locator('#login');
   
  await firstName.fill('Johnyy');
  await lastName.fill('Doe');
  await userEmail.fill('johnyy3@gmail.com');
  await userMobile.fill('1234567890');
 // await gender.check();
  await password.fill('Password123!');
  await confirmPassword.fill('Password123!');
  await checkBox.click();
  await  registerButton.click();


})