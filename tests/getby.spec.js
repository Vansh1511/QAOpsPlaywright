import {test,expect} from '@playwright/test';

test('GetBy Label @smoke', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/angularpractice')
    //  const title = await page.title()
    //  console.log(title)
    await page.getByPlaceholder('Password').fill('password')
    await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByLabel('Employed').check()
    await expect(page.getByLabel('Employed')).toBeChecked();
    await page.getByLabel('Gender').selectOption('Male')
    await page.getByRole('button',{name:'Submit'}).click()
    await page.getByText('Success! The Form has been submitted successfully!.').isVisible();

    //5 seconds default  for expect assertions override  timeout 10sec Step level
    await expect(page.getByText('Success! The Form has been submitted successfully!.')).toBeVisible({timeout:10_000})
    await page.getByRole('link',{name:"Shop"}).click()

    //Add to cart
    await page.locator("app-card").filter({hasText:'iphone X'}).getByRole('button').click()
   // await page.pause();
});

test('Global Timeout', async ({page}) => {
    const slowExpect = expect.configure({timeout:9000});
    await page.goto('https://rahulshettyacademy.com/angularpractice')
    //  const title = await page.title()
    //  console.log(title)
    await page.getByPlaceholder('Password').fill('password')
    await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByLabel('Employed').check()
    await expect(page.getByLabel('Employed')).toBeChecked();
    await page.getByLabel('Gender').selectOption('Male')
    await page.getByRole('button',{name:'Submit'}).click()
    await page.getByText('Success! The Form has been submitted successfully!.').isVisible();

    
    await slowExpect(page.getByText('Success! The Form has been submitted successfully!.')).toBeVisible({timeout:10_000})
    await page.getByRole('link',{name:"Shop"}).click()

    //Add to cart
    await page.locator("app-card").filter({hasText:'iphone X'}).getByRole('button').click()
    await slowExpect(page.locator('.my-4').first()).toHaveText('Shop Name');
   // await page.pause();

   //Global --Test --Step
});