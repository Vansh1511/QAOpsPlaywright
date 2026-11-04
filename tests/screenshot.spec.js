import {test,expect} from '@playwright/test';

test('Screenshot & partial', async({page}) => {
    await  page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await  page.locator('#displayed-text').screenshot({path:'partialscreenshot.png'})
    await page.locator('#hide-textbox').click()
    await page.screenshot({path:'screenshot.png'});

});

test('visual testing',async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    expect(await page.screenshot()).toMatchSnapshot('landing.png');
})