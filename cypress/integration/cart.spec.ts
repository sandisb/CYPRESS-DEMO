import ProductsScreen from "../pageObjects/pages/ProductsScreen"
import LoginInScreen from "../pageObjects/pages/LoginScreen"
import { getInventoryItem } from "../support/common"
import { InventoryItem, TestUser } from "../support/interfaces"
import ProductScreen from "../pageObjects/pages/ProductScreen"
import Header from "../pageObjects/components/Header"

const item: InventoryItem = getInventoryItem()
const standardUser: TestUser = require("../fixtures/testUser.json").standart

describe("Cart tests for product details", () => {
    beforeEach(() => {
        LoginInScreen.logIn(standardUser)
        ProductsScreen.openDetails(item)
    })

    it("Validate that add to cart button changes to remove", () => {
        ProductScreen.addToCart()
    })

    it("Validate that remove button changes to add to cart", () => {
        ProductScreen.addToCart()
        ProductScreen.removeFromCart()
    })

    it("Validate that cart badge appears and hold correct number", () => {
        ProductScreen.addToCart()
        Header.validateCartBadgeNumber(1)
    })

    it("Validate that cart badge appears and hold correct number", () => {
        ProductScreen.addToCart()
        ProductScreen.removeFromCart()
        Header.validateCartBadgeNotVisible()
    })

    afterEach(() => {
        cy.clearCookies()
    })
})
