const { test, expect }  = require ('@playwright/test');

test('@Web has title', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const userName = page.locator('#username');
  const password = page.locator('#password');
  const cardTitles = page.locator('.card-body a');

  console.log(await page.title());
  await expect(page).toHaveTitle(/LoginPage Practise | Rahul Shetty Academy/);
  await userName.fill('rahulshettyacademy');
  await password.fill('Learning@830$3mK2');
  await page.locator('#signInBtn').click();
  //await cardTitles.first().click();
  console.log(await cardTitles.first().textContent());
  console.log(await cardTitles.nth(1).textContent());
  const allTitles = await cardTitles.allTextContents();
  console.log(allTitles);

})
