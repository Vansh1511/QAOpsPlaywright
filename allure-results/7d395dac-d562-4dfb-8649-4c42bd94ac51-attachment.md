# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PageObject.spec.js >> Place order for ZARA COAT 3
- Location: tests\PageObject.spec.js:7:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('li.totalRow button.btn.btn-primary')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [aria-hidden] [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - generic [ref=e26]:
      - heading "My Cart" [level=1] [ref=e27]
      - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e30]
```

# Test source

```ts
  1  | const {expect} =require ('@playwright/test')
  2  | class CheckOutPage{
  3  |     constructor(page){
  4  |         this.page = page
  5  |         this.checkout = page.locator('li.totalRow button.btn.btn-primary')
  6  |         this.checkOutEmail = page.locator("div.user__name.mt-5 .input.input.txt").first()
  7  |         this.checkOutCountry = page.locator("[placeholder*='Country']")
  8  |         this.results = page.locator('section.ta-results')
  9  |         this.checkOutButton = page.locator('a.btnn.action__submit')
  10 |     }
  11 | 
  12 |     async CheckOut(){
> 13 |         await this.checkout.click()
     |                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  14 |         const country = await this.checkOutCountry
  15 |         await country.pressSequentially('Ind')
  16 |           const suggestions = this.results
  17 |              await expect(suggestions).toBeVisible();
  18 |             const  OptionCount = await suggestions.locator('button').count()
  19 |              for(let i=0;i<OptionCount;i++){
  20 |                 const  text = await suggestions.locator('button').nth(i).textContent()
  21 |                 if(text===' India'){
  22 |                     await suggestions.locator('button').nth(i).click()
  23 |                     break;
  24 |                 }
  25 |              }
  26 |              await this.checkOutButton.click()
  27 |         
  28 |     }
  29 | }
  30 | 
  31 | module.exports = {CheckOutPage}
```