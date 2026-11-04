const base = require('@playwright/test');

exports.customTest = base.test.extend({
    authenticatedPage: async({page},use) =>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('johnyy3@gmail.com');
    await page.locator('#userPassword').fill('Password123!');
    await page.locator('#login').click()
    await page.waitForLoadState('networkidle');
    await use(page)
    //Teardown code
    //await context.close();
    },
    
    createOrder:async({authenticatedPage},use)=>{
           const page = authenticatedPage;
           const products = page.locator('.card-body')
           const productName = 'ZARA COAT 3'
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
            const productId = await page.locator('.itemNumber').textContent();
            console.log(productId)  
              const orderDetails = {
              productId :productId,
              productName: 'ZARA COAT 3',
              price: '$11500',
              quantity: '1',
              status: 'Created'
            
              
    };        
            await use({orderDetails})
        
    }
 
})