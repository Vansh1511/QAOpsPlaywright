const {test,expect} = require ('@playwright/test');

test('Hidden Element', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    //Navigation
    // await page.goto('https://www.google.com/')
    // await page.goBack();
    // await page.goForward();

    await expect(page.locator('#displayed-text')).toBeVisible()
    await page.locator('#hide-textbox').click()
    await expect(page.locator('#displayed-text')).toBeHidden()
});

test('Alert Popup', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('#confirmbtn').click()
    page.on('dialog',dialog=>dialog.accept())

    await page.pause()
    //hover
    await page.locator('#mousehover').hover()
    await page.locator('div.mouse-hover-content a').first().click()
});

test('iframe',async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const framePage = page.frameLocator('#courses-iframe')
    await framePage.locator('ul.navigation  [href*="https://courses.rahulshettyacademy."]').first().click()
    await framePage.locator('li a[href*=learning-path]:visible').click()
    //await framePage.locator('div.text h2').textContent()
    const heading = framePage.locator('div.text h2');
   // await heading.waitFor({ state: 'visible' });
    console.log(await heading.textContent());
    console.log(heading.split(" ")[1]);
});