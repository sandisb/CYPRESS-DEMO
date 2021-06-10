import BaseScreen from "../baseScreen"

const CART_BADGE_LABEL = ".shopping_cart_badge"

export default class Header extends BaseScreen {
    static validateCartBadgeNumber(amount: number) {
        cy.get(CART_BADGE_LABEL).should("be.visible").and("have.text", amount)
    }

    static validateCartBadgeNotVisible() {
        this.doesNotExist(CART_BADGE_LABEL)
    }
}
