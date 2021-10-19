import {fixture, Selector, t} from 'testcafe'
import LoginPage from '../pages/LoginPage'

fixture('Login ToDoist')
    .page `https://todoist.com/users/showlogin`

    test('As a registered user i can login successfully with valid credentials', async t =>{
        await t
            .typeText(LoginPage.userInput,'usertest')
            .typeText(LoginPage.passInput,'passwordtest')
            .click(LoginPage.sendButton)
    })
