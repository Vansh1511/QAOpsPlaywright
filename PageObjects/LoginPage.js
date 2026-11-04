class LoginPage{
constructor(page){
    this.page = page
    this.signInbutton = page.locator("#login")
    this.userName = page.locator('#userEmail');
    this.password = page.locator('#userPassword');
  
    this.checkOut = page.locator('.btn.btn-primary').last()
  }

  async goTO(){
      await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  }

async validLogin (username,password){
   
     await this.userName.fill(username);
     await this.password.fill(password);
     await this.signInbutton.click();
     await this.page.waitForLoadState('networkidle');

 }


}

module.exports = {LoginPage}