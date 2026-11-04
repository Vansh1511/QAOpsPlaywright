# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: validation.spec.js >> iframe
- Location: tests\validation.spec.js:27:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#courses-iframe').contentFrame().locator('div.text h2')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - link:
      - /url: https://www.rahulshettyacademy.com/
      - img [ref=e3] [cursor=pointer]
    - link "🎯 I’ll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e4] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - generic [ref=e5]:
      - link [ref=e6] [cursor=pointer]:
        - /url: https://www.rahulshettyacademy.com/
        - button "Home" [ref=e7]
      - button "Practice" [ref=e8] [cursor=pointer]
      - button "Login" [ref=e9] [cursor=pointer]
      - button "Signup" [ref=e10] [cursor=pointer]
  - heading "Practice Page" [level=1] [ref=e11]
  - generic [ref=e12]:
    - group "Radio Button Example" [ref=e14]:
      - generic [ref=e16] [cursor=pointer]:
        - radio [ref=e17]
        - text: Radio1
      - generic [ref=e18] [cursor=pointer]:
        - radio [ref=e19]
        - text: Radio2
      - generic [ref=e20] [cursor=pointer]:
        - radio [ref=e21]
        - text: Radio3
    - group "Suggession Class Example" [ref=e23]:
      - textbox "Type to Select Countries" [ref=e25]
    - group "Dropdown Example" [ref=e27]:
      - combobox [ref=e29]:
        - option "Select" [selected]
        - option "Option1"
        - option "Option2"
        - option "Option3"
    - group "Checkbox Example" [ref=e31]:
      - generic [ref=e33] [cursor=pointer]:
        - checkbox [ref=e34]
        - text: Option1
      - generic [ref=e35] [cursor=pointer]:
        - checkbox [ref=e36]
        - text: Option2
      - generic [ref=e37] [cursor=pointer]:
        - checkbox [ref=e38]
        - text: Option3
  - generic [ref=e39]:
    - group "Switch Window Example" [ref=e41]:
      - button "Open Window" [ref=e43] [cursor=pointer]
    - group "Switch Tab Example" [ref=e45]:
      - link "Open Tab" [ref=e47] [cursor=pointer]:
        - /url: https://www.qaclickacademy.com
    - group "Switch To Alert Example" [ref=e49]:
      - textbox "Enter Your Name" [ref=e51]
      - button "Alert" [ref=e52] [cursor=pointer]
      - button "Confirm" [ref=e53] [cursor=pointer]
  - generic [ref=e54]:
    - group "Web Table Example" [ref=e56]:
      - table [ref=e58]:
        - rowgroup [ref=e59]:
          - row [ref=e60]:
            - columnheader "Instructor" [ref=e61]
            - columnheader "Course" [ref=e62]
            - columnheader "Price" [ref=e63]
          - row [ref=e64]:
            - cell "Rahul Shetty" [ref=e65]
            - cell "Selenium Webdriver with Java Basics + Advanced + Interview Guide" [ref=e66]
            - cell "30" [ref=e67]
          - row [ref=e68]:
            - cell "Rahul Shetty" [ref=e69]
            - cell "Learn SQL in Practical + Database Testing from Scratch" [ref=e70]
            - cell "25" [ref=e71]
          - row [ref=e72]:
            - cell "Rahul Shetty" [ref=e73]
            - cell "Appium (Selenium) - Mobile Automation Testing from Scratch" [ref=e74]
            - cell "30" [ref=e75]
          - row [ref=e76]:
            - cell "Rahul Shetty" [ref=e77]
            - cell "WebSecurity Testing for Beginners-QA knowledge to next level" [ref=e78]
            - cell "20" [ref=e79]
          - row [ref=e80]:
            - cell "Rahul Shetty" [ref=e81]
            - cell "Learn JMETER from Scratch - (Performance + Load) Testing Tool" [ref=e82]
            - cell "25" [ref=e83]
          - row [ref=e84]:
            - cell "Rahul Shetty" [ref=e85]
            - cell "WebServices / REST API Testing with SoapUI" [ref=e86]
            - cell "35" [ref=e87]
          - row [ref=e88]:
            - cell "Rahul Shetty" [ref=e89]
            - cell "QA Expert Course :Software Testing + Bugzilla + SQL + Agile" [ref=e90]
            - cell "25" [ref=e91]
          - row [ref=e92]:
            - cell "Rahul Shetty" [ref=e93]
            - cell "Master Selenium Automation in simple Python Language" [ref=e94]
            - cell "25" [ref=e95]
          - row [ref=e96]:
            - cell "Rahul Shetty" [ref=e97]
            - cell "Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C" [ref=e98]
            - cell "20" [ref=e99]
          - row [ref=e100]:
            - cell "Rahul Shetty" [ref=e101]
            - cell "Write effective QA Resume that will turn to interview call" [ref=e102]
            - cell "0" [ref=e103]
    - generic [ref=e104]:
      - group "Element Displayed Example" [ref=e105]:
        - button "Hide" [ref=e107] [cursor=pointer]
        - button "Show" [ref=e108] [cursor=pointer]
        - textbox "Hide/Show Example" [ref=e109]
      - group "Web Table Fixed header" [ref=e110]:
        - table [ref=e113]:
          - rowgroup [ref=e114]:
            - row [ref=e115]:
              - columnheader "Name" [ref=e116]
              - columnheader "Position" [ref=e117]
              - columnheader "City" [ref=e118]
              - columnheader "Amount" [ref=e119]
          - rowgroup [ref=e120]:
            - row [ref=e121]:
              - cell "Alex" [ref=e122]
              - cell "Engineer" [ref=e123]
              - cell "Chennai" [ref=e124]
              - cell "28" [ref=e125]
            - row [ref=e126]:
              - cell "Ben" [ref=e127]
              - cell "Mechanic" [ref=e128]
              - cell "Bengaluru" [ref=e129]
              - cell "23" [ref=e130]
            - row [ref=e131]:
              - cell "Dwayne" [ref=e132]
              - cell "Manager" [ref=e133]
              - cell "Kolkata" [ref=e134]
              - cell "48" [ref=e135]
            - row [ref=e136]:
              - cell "Ivory" [ref=e137]
              - cell "Receptionist" [ref=e138]
              - cell "Chennai" [ref=e139]
              - cell "18" [ref=e140]
            - row [ref=e141]:
              - cell "Jack" [ref=e142]
              - cell "Engineer" [ref=e143]
              - cell "Pune" [ref=e144]
              - cell "32" [ref=e145]
            - row [ref=e146]:
              - cell "Joe" [ref=e147]
              - cell "Postman" [ref=e148]
              - cell "Chennai" [ref=e149]
              - cell "46" [ref=e150]
            - row [ref=e151]:
              - cell "Raymond" [ref=e152]
              - cell "Businessman" [ref=e153]
              - cell "Mumbai" [ref=e154]
              - cell "37" [ref=e155]
            - row [ref=e156]:
              - cell "Ronaldo" [ref=e157]
              - cell "Sportsman" [ref=e158]
              - cell "Chennai" [ref=e159]
              - cell "31" [ref=e160]
            - row [ref=e161]:
              - cell "Smith" [ref=e162]
              - cell "Cricketer" [ref=e163]
              - cell "Delhi" [ref=e164]
              - cell "33" [ref=e165]
        - generic [ref=e166]: "Total Amount Collected: 296"
  - group "Mouse Hover Example" [ref=e169]:
    - button "Mouse Hover" [ref=e172] [cursor=pointer]
  - group "iFrame Example" [ref=e174]:
    - iframe [active] [ref=e176]:
      - generic [ref=f1e2]:
        - banner [ref=f1e3]:
          - generic [ref=f1e6]:
            - list [ref=f1e8]:
              - listitem [ref=f1e9]:
                - generic [ref=f1e10]: 
                - text: contact@rahulshettyacademy.com
            - generic [ref=f1e11]:
              - list [ref=f1e12]:
                - listitem [ref=f1e13]:
                  - link "" [ref=f1e14] [cursor=pointer]:
                    - /url: https://www.youtube.com/channel/UCgx5SDcUQWCQ_1CNneQzCRw
                - listitem [ref=f1e16]:
                  - link "" [ref=f1e17] [cursor=pointer]:
                    - /url: https://linkedin.com/in/rahul-shetty-trainer/
              - link " Register" [ref=f1e20] [cursor=pointer]:
                - /url: https://courses.rahulshettyacademy.com/sign_up
                - generic [ref=f1e21]: 
                - text: Register
              - link " Login" [ref=f1e23] [cursor=pointer]:
                - /url: https://courses.rahulshettyacademy.com/sign_in
                - generic [ref=f1e24]: 
                - text: Login
          - generic [ref=f1e27]:
            - link [ref=f1e30] [cursor=pointer]:
              - /url: /
            - navigation [ref=f1e32]:
              - list [ref=f1e34]:
                - listitem [ref=f1e35]:
                  - link "Home" [ref=f1e36] [cursor=pointer]:
                    - /url: /
                - listitem [ref=f1e37]:
                  - link "Courses" [ref=f1e38] [cursor=pointer]:
                    - /url: https://courses.rahulshettyacademy.com/courses
                - listitem [ref=f1e39]:
                  - link "NEW All Access plan" [ref=f1e40] [cursor=pointer]:
                    - /url: lifetime-access
                - listitem [ref=f1e41]:
                  - link "NEW Learning paths" [ref=f1e42] [cursor=pointer]:
                    - /url: learning-path
                - listitem [ref=f1e43]:
                  - link "Mentorship" [ref=f1e44] [cursor=pointer]:
                    - /url: mentorship
                - listitem [ref=f1e45]:
                  - link "Job Support" [ref=f1e46] [cursor=pointer]:
                    - /url: consulting
                - listitem [ref=f1e47]:
                  - link "Practice" [ref=f1e48] [cursor=pointer]:
                    - /url: practice-project
                - listitem [ref=f1e49]:
                  - link "Blog" [ref=f1e50] [cursor=pointer]:
                    - /url: https://rahulshettyacademy.com/blog/
                - listitem [ref=f1e51]:
                  - link "More " [ref=f1e52] [cursor=pointer]:
                    - /url: "#"
                    - text: More
                    - generic [ref=f1e53]: 
                  - text: 
        - heading "LEARNING PATHS" [level=1] [ref=f1e57]
        - generic [ref=f1e60]:
          - generic [ref=f1e61]: A Learning Path is a selection of courses tied together for learners to progress through, mastering a particular subject or program. It allows you to enroll multiple users in multiple courses at once saving you valuable time.
          - generic [ref=f1e63]:
            - generic [ref=f1e64] [cursor=pointer]:
              - generic [ref=f1e65]: 
              - text: All
            - generic [ref=f1e66] [cursor=pointer]:
              - generic [ref=f1e67]: −
              - text: Javascript
            - generic [ref=f1e68] [cursor=pointer]:
              - generic [ref=f1e69]: −
              - text: Python
            - generic [ref=f1e70] [cursor=pointer]:
              - generic [ref=f1e71]: −
              - text: Java
          - generic [ref=f1e72]:
            - generic [ref=f1e74]:
              - generic [ref=f1e75]:
                - generic [ref=f1e76] [cursor=pointer]
                - generic [ref=f1e78]: java
              - generic [ref=f1e79]:
                - heading "SDET Automation Engineer – JAVA" [level=4] [ref=f1e80]
                - paragraph [ref=f1e81]: If your language of interest is Java, then this is the path you can start from scratch to learn and... Know more
              - generic [ref=f1e82]:
                - generic [ref=f1e83]:
                  - generic [ref=f1e84]: 
                  - text: 36 hours
                - generic [ref=f1e86] [cursor=pointer]:
                  - generic [ref=f1e87]: 
                  - text: 5 courses
                  - generic [ref=f1e88]: 
                  - text:     
                - link "Enroll" [ref=f1e89] [cursor=pointer]:
                  - /url: https://courses.rahulshettyacademy.com/p/java-sdet-automation-package-web-api-mobile-automation/
            - generic [ref=f1e91]:
              - generic [ref=f1e92]:
                - generic [ref=f1e93] [cursor=pointer]
                - generic [ref=f1e95]: generic
              - generic [ref=f1e96]:
                - heading "Software Quality Assurance Engineer" [level=4] [ref=f1e97]
                - paragraph [ref=f1e98]: This Path should be chosen by the people who want to master all the core concepts of Software testin... Know more
              - generic [ref=f1e99]:
                - generic [ref=f1e100]:
                  - generic [ref=f1e101]: 
                  - text: 42 hours
                - generic [ref=f1e103] [cursor=pointer]:
                  - generic [ref=f1e104]: 
                  - text: 5 courses
                  - generic [ref=f1e105]: 
                  - text:     
                - link "Enroll" [ref=f1e106] [cursor=pointer]:
                  - /url: https://courses.rahulshettyacademy.com/p/software-quality-assurance-engineer
            - generic [ref=f1e108]:
              - generic [ref=f1e109]:
                - generic [ref=f1e110] [cursor=pointer]
                - generic [ref=f1e112]: java
              - generic [ref=f1e113]:
                - heading "Test Architect/Senior QA Automation Engineer" [level=4] [ref=f1e114]
                - paragraph [ref=f1e115]: This Path should be chosen if you want to be a Java Test Architect/ Senior QA Automation Engineer wh... Know more
              - generic [ref=f1e116]:
                - generic [ref=f1e117]:
                  - generic [ref=f1e118]: 
                  - text: 48 hours
                - generic [ref=f1e120] [cursor=pointer]:
                  - generic [ref=f1e121]: 
                  - text: 4 courses
                  - generic [ref=f1e122]: 
                  - text:    
                - link "Enroll" [ref=f1e123] [cursor=pointer]:
                  - /url: https://courses.rahulshettyacademy.com/p/test-architect-devops-for-qa-package/
            - generic [ref=f1e125]:
              - generic [ref=f1e126]:
                - generic [ref=f1e127] [cursor=pointer]
                - generic [ref=f1e129]: python
              - generic [ref=f1e130]:
                - heading "SDET Automation Engineer – PYTHON" [level=4] [ref=f1e131]
                - paragraph [ref=f1e132]: If your language of interest is Python, then this is the path you can start from scratch to learn an... Know more
              - generic [ref=f1e133]:
                - generic [ref=f1e134]:
                  - generic [ref=f1e135]: 
                  - text: 38 hours
                - generic [ref=f1e137] [cursor=pointer]:
                  - generic [ref=f1e138]: 
                  - text: 4 courses
                  - generic [ref=f1e139]: 
                  - text:    
                - link "Enroll" [ref=f1e140] [cursor=pointer]:
                  - /url: https://courses.rahulshettyacademy.com/p/python-sdet-automation-testing/
            - generic [ref=f1e142]:
              - generic [ref=f1e143]:
                - generic [ref=f1e144] [cursor=pointer]
                - generic [ref=f1e146]: javascript
              - generic [ref=f1e147]:
                - heading "SDET Automation Engineer – JavaScript" [level=4] [ref=f1e148]
                - paragraph [ref=f1e149]: If your language of interest is javaScript, then below is the path you can start from scratch to lea... Know more
              - generic [ref=f1e150]:
                - generic [ref=f1e151]:
                  - generic [ref=f1e152]: 
                  - text: 36 hours
                - generic [ref=f1e154] [cursor=pointer]:
                  - generic [ref=f1e155]: 
                  - text: 4 courses
                  - generic [ref=f1e156]: 
                  - text:    
                - link "Enroll" [ref=f1e157] [cursor=pointer]:
                  - /url: https://courses.rahulshettyacademy.com/p/javascript-sdet-automation-testing/
        - generic [ref=f1e160]:
          - generic [ref=f1e161]:
            - heading "JOIN OUR ACADEMY" [level=2] [ref=f1e162]
            - generic [ref=f1e163]: Sign up today and get access to "Core Java for Testers" & "QA Resume Preparation" Courses for FREE.
          - link "JOIN NOW" [ref=f1e166] [cursor=pointer]:
            - /url: https://courses.rahulshettyacademy.com/sign_up
        - contentinfo [ref=f1e167]:
          - generic [ref=f1e170]:
            - generic [ref=f1e172]:
              - text: All Right Reserved
              - link "RahulShettyAcademy" [ref=f1e173] [cursor=pointer]:
                - /url: "#"
              - text: © 2026
            - list [ref=f1e175]:
              - listitem [ref=f1e176]:
                - link "About Us" [ref=f1e177] [cursor=pointer]:
                  - /url: /about-my-mission
              - listitem [ref=f1e178]:
                - link "Contact Us" [ref=f1e179] [cursor=pointer]:
                  - /url: contact-us
              - listitem [ref=f1e180]:
                - link "Privacy Policy" [ref=f1e181] [cursor=pointer]:
                  - /url: /privacy
        - text: 
  - table [ref=e178]:
    - rowgroup [ref=e179]:
      - row [ref=e180]:
        - cell [ref=e181]:
          - list [ref=e182]:
            - listitem [ref=e183]:
              - heading [level=3] [ref=e184]:
                - link "Discount Coupons" [ref=e185] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e186]:
              - link "REST API" [ref=e187] [cursor=pointer]:
                - /url: http://www.restapitutorial.com/
            - listitem [ref=e188]:
              - link "SoapUI" [ref=e189] [cursor=pointer]:
                - /url: https://www.soapui.org/
            - listitem [ref=e190]:
              - link "Appium" [ref=e191] [cursor=pointer]:
                - /url: https://courses.rahulshettyacademy.com/p/appium-tutorial
            - listitem [ref=e192]:
              - link "JMeter" [ref=e193] [cursor=pointer]:
                - /url: https://jmeter.apache.org/
        - cell [ref=e194]:
          - list [ref=e195]:
            - listitem [ref=e196]:
              - heading [level=3] [ref=e197]:
                - link "Latest News" [ref=e198] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e199]:
              - link "Broken Link" [ref=e200] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com/brokenlink
            - listitem [ref=e201]:
              - link "Dummy Content for Testing." [ref=e202] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e203]:
              - link "Dummy Content for Testing." [ref=e204] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e205]:
              - link "Dummy Content for Testing." [ref=e206] [cursor=pointer]:
                - /url: "#"
        - cell [ref=e207]:
          - list [ref=e208]:
            - listitem [ref=e209]:
              - heading [level=3] [ref=e210]:
                - link "Contact info" [ref=e211] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e212]:
              - link "Dummy Content for Testing." [ref=e213] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e214]:
              - link "Dummy Content for Testing." [ref=e215] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e216]:
              - link "Dummy Content for Testing." [ref=e217] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e218]:
              - link "Dummy Content for Testing." [ref=e219] [cursor=pointer]:
                - /url: "#"
        - cell [ref=e220]:
          - list [ref=e221]:
            - listitem [ref=e222]:
              - heading [level=3] [ref=e223]:
                - link "Social Media" [ref=e224] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e225]:
              - link "Facebook" [ref=e226] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e227]:
              - link "Twitter" [ref=e228] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e229]:
              - link "Google+" [ref=e230] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e231]:
              - link "Youtube" [ref=e232] [cursor=pointer]:
                - /url: "#"
  - generic [ref=e233]:
    - text: © 2019 Powered by
    - strong [ref=e234]:
      - link "Medianh Consulting" [ref=e235] [cursor=pointer]:
        - /url: http://www.medianhconsulting.com
  - status [ref=e236]
```

# Test source

```ts
  1  | const {test,expect} = require ('@playwright/test');
  2  | 
  3  | test('Hidden Element', async({page}) => {
  4  |     await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
  5  | 
  6  |     //Navigation
  7  |     // await page.goto('https://www.google.com/')
  8  |     // await page.goBack();
  9  |     // await page.goForward();
  10 | 
  11 |     await expect(page.locator('#displayed-text')).toBeVisible()
  12 |     await page.locator('#hide-textbox').click()
  13 |     await expect(page.locator('#displayed-text')).toBeHidden()
  14 | });
  15 | 
  16 | test('Alert Popup', async({page}) => {
  17 |     await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
  18 |     await page.locator('#confirmbtn').click()
  19 |     page.on('dialog',dialog=>dialog.accept())
  20 | 
  21 |     await page.pause()
  22 |     //hover
  23 |     await page.locator('#mousehover').hover()
  24 |     await page.locator('div.mouse-hover-content a').first().click()
  25 | });
  26 | 
  27 | test('iframe',async ({page}) => {
  28 |     await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
  29 |     const framePage = page.frameLocator('#courses-iframe')
  30 |     await framePage.locator('ul.navigation  [href*="https://courses.rahulshettyacademy."]').first().click()
  31 |     await framePage.locator('li a[href*=learning-path]:visible').click()
  32 |     //await framePage.locator('div.text h2').textContent()
  33 |     const heading = framePage.locator('div.text h2');
  34 |    // await heading.waitFor({ state: 'visible' });
> 35 |     console.log(await heading.textContent());
     |                               ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  36 |     console.log(heading.split(" ")[1]);
  37 | });
```