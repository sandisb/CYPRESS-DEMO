import ProductsScreen from "../pageObjects/pages/ProductsScreen"
import LoginInScreen from "../pageObjects/pages/LoginScreen"
import { getInventoryItem } from "../support/common"
import { InventoryItem, TestUser } from "../support/interfaces"
import ProductScreen from "../pageObjects/pages/ProductScreen"

const item: InventoryItem = getInventoryItem()
const standardUser: TestUser = require("../fixtures/testUser.json").standart

describe("Product Details Tests", () => {
    beforeEach(() => {
        LoginInScreen.logIn(standardUser)
        ProductsScreen.openDetails(item)
    })

    it("Validate that back button works in details", () => {
        ProductScreen.navigateBack()
    })

    it("Validate that details about product are presented", () => {
        ProductScreen.validateItemDetails(item)
    })

    afterEach(() => {
        cy.clearCookies()
    })
})
