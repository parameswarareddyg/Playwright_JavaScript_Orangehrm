const {expect}=require('@playwright/test')
class HomePage{

    constructor(page){
        this.page = page
        this.dashboardtitle = page.locator("//h6[normalize-space()='Dashboard']")
        this.userprofile = page.locator(".oxd-userdropdown-name")
        this.logout = page.getByRole('menuitem',{name:'Logout'})
    }


    async logoutFromApplication()
    {
        await this.userprofile.click()
        await this.logout.click()
    }

    async verifyDashboardTitle()
    {
        await expect(this.dashboardtitle).toHaveText("Dashboard")
    }
}

module.exports = HomePage