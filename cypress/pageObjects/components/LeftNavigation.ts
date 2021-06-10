import BaseScreen from "../baseScreen"
import LoginInScreen from "../pages/LoginScreen"

const INVOKE_NAVIGATION_BUTTON = "#react-burger-menu-btn"
const LOGOUT_BUTTON = "#logout_sidebar_link"

export default class LeftNavigation extends BaseScreen {
    static openLeftNavigation() {
        this.click(INVOKE_NAVIGATION_BUTTON)
        this.isVisible(LOGOUT_BUTTON)
    }

    static logOut() {
        this.click(LOGOUT_BUTTON)
        LoginInScreen.validateUserInPage()
    }
}
