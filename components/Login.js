import { Selector, t } from 'testcafe';
// HR ROLE
export class  HR{
    constructor () {
        this.fLoginUsername = Selector('#fLoginUsername');
        this.fLoginPassword = Selector('#fLoginPassword');
        this.signInButton  = Selector('#idButSignIn');
    }
    async login () {
        await t
            .typeText(this.fLoginUsername, 'sljackson')
            .typeText(this.fLoginPassword, 'fury')
            .click(this.signInButton);
    }
}


// MANAGER ROLE
export class  MGR{
    constructor () {
        this.fLoginUsername = Selector('#fLoginUsername');
        this.fLoginPassword = Selector('#fLoginPassword');
        this.signInButton  = Selector('#idButSignIn');
    }
    async login () {
        await t
            .typeText(this.fLoginUsername, 'wolverine')
            .typeText(this.fLoginPassword, 'gene')
            .click(this.signInButton);
    }
}

// EMPLOYEE
export class  EMP{
    constructor () {
        this.fLoginUsername = Selector('#fLoginUsername');
        this.fLoginPassword = Selector('#fLoginPassword');
        this.signInButton  = Selector('#idButSignIn');
    }
    async login () {
        await t
            .typeText(this.fLoginUsername, 'thor')
            .typeText(this.fLoginPassword, 'odin')
            .click(this.signInButton);
    }
}

