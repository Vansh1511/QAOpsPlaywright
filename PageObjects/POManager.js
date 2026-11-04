const {LoginPage} = require('./LoginPage')
const {DashboardPage} = require('./DashboardPage')
const {CheckOutPage} = require('./CheckOutPage')

class POManager{
    constructor(page){
        this.page = page
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page)
        this.checkoutPage = new CheckOutPage(this.page)
    }

    getLoginPage(){
        return this.loginPage
    }

     getdashboardPage(){
        return this.dashboardPage
    }

     getcheckoutPage(){
        return this.checkoutPage
    }
}

module.exports = {POManager}