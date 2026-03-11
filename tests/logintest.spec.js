const {test,expect} = require("@playwright/test")
const LoginPage = require("../pages/LoginPage");
const HomePage = require("../pages/HomePage");
const logintestData = require("../jsondata/validlogindata.json")
const invalidlogintestData = require("../jsondata/invalidlogindata.json")

test("LoginwithValidInput",async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.loginIntoApplication(logintestData.username,logintestData.password);
    await page.waitForTimeout(2000);
    await homePage.verifyDashboardTitle();
})

test("LoginwithInvalidInput",async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const loginPage = new LoginPage(page);

    await loginPage.loginIntoApplication(invalidlogintestData.username,invalidlogintestData.password);
    await page.waitForTimeout(2000);
    await loginPage.verifyInvalidCredentailsError();
})