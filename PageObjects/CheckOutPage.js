const {expect} =require ('@playwright/test')
class CheckOutPage{
    constructor(page){
        this.page = page
        this.checkout = page.locator('li.totalRow button.btn.btn-primary')
        this.checkOutEmail = page.locator("div.user__name.mt-5 .input.input.txt").first()
        this.checkOutCountry = page.locator("[placeholder*='Country']")
        this.results = page.locator('section.ta-results')
        this.checkOutButton = page.locator('a.btnn.action__submit')
    }

    async CheckOut(){
        await this.checkout.click()
        const country = await this.checkOutCountry
        await country.pressSequentially('Ind')
          const suggestions = this.results
             await expect(suggestions).toBeVisible();
            const  OptionCount = await suggestions.locator('button').count()
             for(let i=0;i<OptionCount;i++){
                const  text = await suggestions.locator('button').nth(i).textContent()
                if(text===' India'){
                    await suggestions.locator('button').nth(i).click()
                    break;
                }
             }
             await this.checkOutButton.click()
        
    }
}

module.exports = {CheckOutPage}