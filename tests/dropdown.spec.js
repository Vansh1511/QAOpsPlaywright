import {test,expect} from '@playwright/test';


//Static DropDown

test('UI Controls',async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const username = await page.locator('#username')
    const password = await page.locator('#password')
    const dropdown = await page.locator('select.form-control')
    const radio = await page.locator('.radiotextsty').last()
    const checkbox = await page.locator('#terms')
    const button = await page.locator('#okayBtn')
    const documentLink = await page.locator('[href*= "documents-request"]')
    await dropdown.selectOption('consult')
    await radio.click()
    await button.click()
    await expect(radio).toBeChecked() //No boolean result; assertion passes or fails
    console.log(await radio.isChecked()) //true or false
    await checkbox.click()
    await expect(checkbox).toBeChecked();
    console.log(await checkbox.isChecked())
    //await checkbox.uncheck()
    expect (await checkbox.isChecked()).toBeTruthy()
    await expect (documentLink).toHaveAttribute('class','blinkingText')
   
});

test('Child window handling', async({browser}) => {
     const context = await browser.newContext();
     const page = await context.newPage();
    const username = await page.locator('#username')
     await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
     const documentLink = await page.locator('[href*= "documents-request"]')
     
     const [newPage] = await Promise.all([ //[newPage] represents an array
        context.waitForEvent('page'),
        documentLink.click(),
     ])
     await newPage.waitForLoadState();
     const text = await newPage.locator('p.red').textContent()
     //console.log(text)
     const arraytext = text.split('@')
     const domain = arraytext[1].split(" ")[0]
     console.log(domain)
     await page.locator('#username').fill(domain)
     console.log(await page.locator('#username').inputValue())
     await page.pause();

});