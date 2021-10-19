import {Selector, t} from 'testcafe'

fixture('Login')
    .page `https://todoist.com/users/showlogin`

    test('As a registered user i can login successfully with valid credentials', async t =>{
        const newLocal = 'usertest'
        await t
            .typeText('#email'.newLocal)
            .typeText('#password','passwordtest')
            .click('button[class*="submit_btn"]')
    })
