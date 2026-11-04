# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> @web login with valid credentials
- Location: tests\login.spec.js:3:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://rahulshettyacademys.com/client/#/auth/login
Call log:
  - navigating to "https://rahulshettyacademys.com/client/#/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test('@web login with valid credentials', async ({ page }) => {
> 4  |   await page.goto('https://rahulshettyacademys.com/client/#/auth/login');
     |              ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://rahulshettyacademys.com/client/#/auth/login
  5  |   const userEmail = page.locator('#userEmail');
  6  |   const userPassword = page.locator('#userPassword');
  7  |   const loginButton = page.locator('#login');
  8  | 
  9  |   await userEmail.fill('johnyy3@gmail.com');
  10 |   await userPassword.fill('Password123!');
  11 |   await loginButton.click();
  12 |   await page.waitForLoadState('networkidle');
  13 |   const productNames = await page.locator('.card-body b').allTextContents();
  14 |   console.log(productNames);
  15 |   
  16 | })
```