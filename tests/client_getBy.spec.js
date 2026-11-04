import {test,expect} from '@playwright/test';

test('Login Using GetBy Loc', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
   const userEmail = page.getByPlaceholder('email@example.com')
   const userPassword = page.getByPlaceholder('enter your passsword')
   const loginButton = await page.getByRole('button',{name:'login'})
   //const products = page.locator('.card-body')
   //const productName = 'ZARA COAT 3'

   await userEmail.fill('johnyy3@gmail.com');
   await userPassword.fill('Password123!');
   await loginButton.click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();

   await page.locator('.card-body').filter({hasText:'ZARA COAT 3'})
   .getByRole("button",{name:"Add to Cart"}).click()
   
   await page.getByRole("listitem").getByRole("button",{name:"  Cart "}).click()

   await expect(page.getByText("ZARA COAT 3")).toBeVisible()

   //Checkout
   await page.getByRole("button",{name:"Checkout"}).click()

   await page.getByPlaceholder('Select Country').pressSequentially("Ind")
   await page.getByRole("button",{name:"India"}).nth(1).click()
   await page.getByText("Place Order ").click()
   await expect(page.getByText(" Thankyou for the order. ")).toHaveText(' Thankyou for the order. ')
});