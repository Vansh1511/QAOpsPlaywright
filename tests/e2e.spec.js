import {test,expect} from '@playwright/test';

test('login with valid credentials', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  const userEmail = page.locator('#userEmail');
  const userPassword = page.locator('#userPassword');
  const loginButton = page.locator('#login');
  const products = page.locator('.card-body')
  const productName = 'ZARA COAT 3'

  await userEmail.fill('johnyy3@gmail.com');
  await userPassword.fill('Password123!');
  await loginButton.click();
  await page.waitForLoadState('networkidle');
  await page.locator(".card-body b").first().waitFor();
  const productNames = await page.locator('.card-body b').allTextContents();
  console.log(productNames);
})

test('Add to Cart', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
     const userEmail = page.locator('#userEmail');
     const userPassword = page.locator('#userPassword');
     const loginButton = page.locator('#login');
     const products = page.locator('.card-body')
     const productName = 'ZARA COAT 3'

     await userEmail.fill('johnyy3@gmail.com');
     await userPassword.fill('Password123!');
     await loginButton.click();
     await page.waitForLoadState('networkidle');
     await page.locator(".card-body b").first().waitFor();
    const count = await products.count()
     for(let i =0;i<count;++i){
    if(await products.nth(i).locator("b").textContent() === productName){
        //add to cart
        await products.nth(i).locator("text = Add to Cart").click()
        break;
     }
    }
    //Add to cart items
    await page.locator('[routerlink*="/dashboard/cart"]').click()
    await page.locator('div li').first().waitFor()
    const orderId = await page.locator('p.itemNumber').textContent();
    console.log(orderId)

    //Validate orderId 
    await expect(page.locator('p.itemNumber')).toBeVisible();
    await expect(page.locator('p.itemNumber')).toHaveText(orderId)

    //Validate ItemName
    await expect(page.locator("h3:has-text('ZARA COAT 3')")).toBeVisible();
    await expect(page.locator('div.cartSection h3')).toHaveText(productName)
    const Name = await page.locator('div.cartSection h3').textContent()
    console.log(Name)
  
    //Validate CartValue
    await expect(page.locator("li:nth-child(2) span:nth-child(2)")).toHaveText('$11500')
    const cartValue = await page.locator(("li:nth-child(2) span:nth-child(2)")).textContent()
    console.log(cartValue)
});

test('Checkout', async ({page}) => {
     await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
     const email = 'johnyy3@gmail.com'
     const userEmail = page.locator('#userEmail');
     const userPassword = page.locator('#userPassword');
     const loginButton = page.locator('#login');
     const products = page.locator('.card-body')
     const productName = 'ZARA COAT 3'

     await userEmail.fill('johnyy3@gmail.com');
     await userPassword.fill('Password123!');
     await loginButton.click();
     await page.waitForLoadState('networkidle');
     await page.locator(".card-body b").first().waitFor();
    const count = await products.count()
     for(let i =0;i<count;++i){
    if(await products.nth(i).locator("b").textContent() === productName){
        //add to cart
        await products.nth(i).locator("text = Add to Cart").click()
        break;
     }
    }
    //Add to cart items
    await page.locator('[routerlink*="/dashboard/cart"]').click()
    await page.locator('div li').first().waitFor()
    const orderId = await page.locator('p.itemNumber').textContent();
    console.log(orderId)

    await page.goto('https://rahulshettyacademy.com/client/#/dashboard/cart');
    const checkout = await page.locator('li.totalRow button.btn.btn-primary')
    await checkout.click();
    //await page.pause();

    const cvv = await page.locator('div.field.small:nth-child(2) input.input.txt')
    await cvv.fill('977')

    const nameOnCard = await page.locator('div.field:nth-child(1)  input.input.txt.text-validated')
    await nameOnCard.fill('Rahul Shetty')


    const coupon = await page.locator('[name*="coupon"]')
    coupon.fill('rahulshettyacademy')
    await page.locator('button.btn.btn-primary.mt-1').click()
    //Validate Coupon is appiled or not
    await expect(page.locator('p.mt-1.ng-star-inserted')).toBeVisible();
    await expect(page.locator('p.mt-1.ng-star-inserted')).toHaveText('* Coupon Applied')
     //await page.pause()

    //Validate LoginId
    await expect(page.locator("label[type='text']")).toHaveText(email)

     //Shipping Info
    const Country_Name = page.locator("[placeholder*='Country']")
     await Country_Name.pressSequentially('Ind')
     const suggestions = page.locator('section.ta-results')
     await expect(suggestions).toBeVisible();
    const  OptionCount = await suggestions.locator('button').count()
     for(let i=0;i<OptionCount;i++){
        const  text = await suggestions.locator('button').nth(i).textContent()
        if(text===' India'){
            await suggestions.locator('button').nth(i).click()
            break;
        }
     }

    await page.locator('a.btnn.action__submit').click()

    //Validate Thank You Message
    await expect(page.locator('h1.hero-primary')).toHaveText(' Thankyou for the order. ')

    //Validate OrderId After Placing Order
    const order = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    console.log(order)
    //await page.pause();


    //Orders Section
    await page.locator('[routerlink="/dashboard/myorders"].btn.btn-custom').click()
    await page.locator('.table.table-bordered').waitFor();

    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
   

    for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
       if (order.includes(rowOrderId)) {
       await rows.nth(i).locator("button").first().click();
       }
   }
    //await page.pause();   

    //Order Summary
    const orderDetails = await page.locator('div.col-text').textContent();
    expect(order.includes(orderDetails)).toBeTruthy();

});