# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OrangeHRM.spec.js >> Verify Login
- Location: tests\OrangeHRM.spec.js:3:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Submit' })

```

# Test source

```ts
  1 | const{test,expect} = require('@playwright/test')
  2 | 
  3 | test('Verify Login',async({page})=>{
  4 |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  5 |     await page.getByPlaceholder('Username').fill('Admin')
  6 |     await page.getByPlaceholder('Password').fill('admin123')
> 7 |     await page.getByRole('button',{name:"Submit"}).click()
    |                                                    ^ Error: locator.click: Target page, context or browser has been closed
  8 |     await expect(page.locator('span.oxd-userdropdown-tab p').toHaveText('manda user'))
  9 | })
```