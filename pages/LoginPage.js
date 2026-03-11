const {expect} = require("@playwright/test")
class LoginPage{
    constructor(page){
        this.page = page
        this.logintitle = page.locator("//h5[normalize-space()='Login']")
        this.username = page.getByPlaceholder("Username")
        this.password = page.locator("//input[@name='password']")
        this.loginbutton = page.locator("//button[@type='submit']")
        this.invalidcredentials = page.locator("//p[text()='Invalid credentials']")
    }

    async loginIntoApplication(userNameData,passwordData)
    {
        await this.username.fill(userNameData)
        await this.password.fill(passwordData)
        await this.loginbutton.click()
    }

    async verifyLoginPage()
    {
        await expect(this.logintitle).toHaveText("Login")
    }

    async verifyInvalidCredentailsError()
    {
        await expect(this.invalidcredentials).toHaveText("Invalid credentials")
    }
}

module.exports = LoginPage