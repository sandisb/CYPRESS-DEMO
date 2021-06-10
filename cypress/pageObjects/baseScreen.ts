export default class BaseScreen {
    static isVisible(selector: string) {
        cy.get(selector).should("be.visible")
    }

    static click(selector: string) {
        cy.get(selector).click()
    }

    static type(selector: string, text: string, msDelay: number = 0) {
        cy.get(selector).clear().type(text, { delay: msDelay })
    }

    static hasText(selector: string, text: string) {
        cy.get(selector).should("have.text", text)
    }

    static containsText(selector: string, text: string) {
        cy.get(selector).should("contains.text", text)
    }

    static doesNotExist(selector: string) {
        cy.get(selector).should("not.exist")
    }
}
