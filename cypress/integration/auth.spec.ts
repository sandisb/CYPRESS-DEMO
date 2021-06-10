import LoginInScreen from "../pageObjects/pages/LoginScreen"
import ProductsScreen from "../pageObjects/pages/ProductsScreen"
import { TestUser } from "../support/interfaces"
import { LoginErrorType } from "../support/enums"
import LeftNavigation from "../pageObjects/components/LeftNavigation"

const standardUser: TestUser = require("../fixtures/testUser.json").standart
const lockedUser: TestUser = require("../fixtures/testUser.json").locked

describe("Authorization tests", () => {
    it("Log in successfully with standart credentials", () => {
        LoginInScreen.logIn(standardUser)
        ProductsScreen.validateUserInPage()
    })

    it("Log in with locked out credentials", () => {
        LoginInScreen.logIn(lockedUser, false)
        LoginInScreen.validateUserInPage()
        LoginInScreen.validateError(LoginErrorType.locked)
    })

    it("Assert error of missing password", () => {
        LoginInScreen.failLogIn(standardUser, false)
    })

    it("Assert error of missing password", () => {
        LoginInScreen.failLogIn(standardUser, true)
    })

    it("Log out", () => {
        LoginInScreen.logIn(standardUser)
        LeftNavigation.openLeftNavigation()
        LeftNavigation.logOut()
    })
})
