const base = require('@playwright/test');

exports.customTest = base.test.extend({
    testDataForOrder:  {
            username: 'johnyy3@gmail.com',
            password: 'Password123!',
            productName: 'ZARA COAT 3'
     }
});
