import { InventoryItem } from "../../support/interfaces"
import BaseScreen from "../baseScreen"
import ProductsScreen from "./ProductsScreen"

const BACK_BUTTON = "#back-to-products"
const TITLE_LABEL = ".inventory_details_name.large_size"
const DESCRIPTION_LABEL = ".inventory_details_desc.large_size"
const PRICE_TABLE = ".inventory_details_price"
const ADD_TO_CART_BUTTON = ".btn.btn_primary.btn_small.btn_inventory"
const REMOVE_FROM_CART_BUTTON = ".btn.btn_secondary.btn_small.btn_inventory"

export default class ProductScreen extends BaseScreen {
    static validateUserInPage() {
        this.isVisible(BACK_BUTTON)
    }

    static navigateBack() {
        this.click(BACK_BUTTON)
        ProductsScreen.validateUserInPage()
    }

    /**
     * Validates all items properties are displayed
     */
    static validateItemDetails(item: InventoryItem) {
        this.hasText(TITLE_LABEL, item.title)
        this.hasText(DESCRIPTION_LABEL, item.description)
        this.containsText(PRICE_TABLE, item.price)
        this.containsText(PRICE_TABLE, item.currency)
    }

    static addToCart() {
        this.click(ADD_TO_CART_BUTTON)
        this.isVisible(REMOVE_FROM_CART_BUTTON)
    }

    static removeFromCart() {
        this.click(REMOVE_FROM_CART_BUTTON)
        this.isVisible(ADD_TO_CART_BUTTON)
    }
}
