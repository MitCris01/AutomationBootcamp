import { Selector } from "testcafe"

class LoginPage{
    constructor(){
        this.userInput = Selector('#email')
        this.passInput = Selector('#password')
        this.sendButton = Selector('button[class*="submit_btn"]')

    }
}

export default new LoginPage