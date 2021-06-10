import { LoginErrorType } from "../../support/enums"
import { TestUser } from "../../support/interfaces"
import BaseScreen from "../baseScreen"
import ProductsScreen from "./ProductsScreen"

const USERNAME_INPUT_FIELD = "#user-name"
const PASSWORD_INPUT_FIELD = "#password"
const LOGIN_BUTTON = "#login-button"
const ERROR_LABEL = "h3[data-test='error']"

export default class LoginInScreen extends BaseScreen {
    /**
     * Validates Login Screen is
     * presented
     */
    static validateUserInPage() {
        this.isVisible(USERNAME_INPUT_FIELD)
        this.isVisible(PASSWORD_INPUT_FIELD)
    }

    static logIn(user: TestUser, checkIfLoggedIn: boolean = true) {
        this.validateUserInPage()
        this.type(USERNAME_INPUT_FIELD, user.username)
        this.type(PASSWORD_INPUT_FIELD, user.password)
        this.click(LOGIN_BUTTON)

        if (checkIfLoggedIn) {
            ProductsScreen.validateUserInPage()
        }
    }

    static failLogIn(user: TestUser, skipUsername: boolean) {
        this.validateUserInPage()
        if (skipUsername) {
            this.type(PASSWORD_INPUT_FIELD, user.password)
            this.click(LOGIN_BUTTON)
            this.validateError(LoginErrorType.noUsername)
        } else {
            this.type(USERNAME_INPUT_FIELD, user.username)
            this.click(LOGIN_BUTTON)
            this.validateError(LoginErrorType.noPassword)
        }
    }

    static validateError(error: LoginErrorType) {
        this.hasText(ERROR_LABEL, error)
    }
}
