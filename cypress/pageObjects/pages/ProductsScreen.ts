import { InventoryItem } from "../../support/interfaces"
import BaseScreen from "../baseScreen"
import ProductScreen from "./ProductScreen"

const PAGE_TITLE = ".title"

const PAGE_TITLE_TEXT = "Products"

export default class ProductsScreen extends BaseScreen {
    static validateUserInPage() {
        cy.get(PAGE_TITLE).contains(PAGE_TITLE_TEXT).should("be.visible")
    }

    static openDetails(item: InventoryItem) {
        cy.contains(item.title).click()
        ProductScreen.validateUserInPage()
    }
}
