/**
 * Created by jie on 8/14/2017.
 */
import { Selector, t } from 'testcafe';
import { HR, MGR, EMP } from '../../components/Login';
import { SearchEmp, SearchEmp2, SearchEmp3 } from '../../components/Search';

fixture `Edit people section personal data`
    .page `https://uitest.i.solaforce.com/signin.html`;

const peopleModule = Selector('#idTDPeople');
const contactTab = Selector('a[href="#idEmpTab2"]');
const contactSection = Selector('#idTDOtherContact');

const editContactDataButton = contactSection.find('button').nth(0);
const saveContactDataButton = contactSection.find('button').nth(1);
const country = Selector('select[name=fEmpCountry]').nextSibling('.chosen-container');

test('Test HR', async t => {
    const hr = new HR();
    hr.login();

    await t
        .click(peopleModule)
        .click(contactTab);
    // Edit right
    const contactData = new InputContactData();
    await contactData.input();
});

test('Test Mgr', async t => {
    const mgr = new MGR();
    mgr.login();

    await t
        .click(peopleModule)
        .click(contactTab);
    // Edit right
    const contactData = new InputContactData();
    await contactData.input();
});

test('Test Emp', async t => {
    const emp = new EMP();
    emp.login();

    await t
        .click(peopleModule)
        .click(contactTab);
    // Edit right
    // Edit right
    const contactData = new InputContactData();
    await contactData.input();
});



test('Test HR edit emp', async t => {
    const hr = new HR();
    hr.login();

    const sEmp = new SearchEmp();
    sEmp.search();

    await t
        .expect(contactTab.exists).ok()
        .click(contactTab);
    // Edit right
    const contactData = new InputContactData();
    await contactData.input();
});

test('Test Mgr edit emp', async t => {
    const mgr = new MGR();
    mgr.login();

    const sEmp = new SearchEmp2();
    sEmp.search();

    await t
        .expect(contactTab.exists).ok()
        .click(contactTab);
    // Edit right
    const contactData = new InputContactData();
    await contactData.input();
});

test('Test Mgr edit non-responsible emp', async t => {
    const mgr = new MGR();
    mgr.login();

    const sEmp = new SearchEmp3();
    sEmp.search();

    await t
        .expect(contactTab.exists).ok()
        .click(contactTab);
    // Edit right
    await t
        .expect(editContactDataButton.exists).notOk()
});


class  InputContactData{
    constructor () {
        this.fEmpPhoneOther = Selector('input[name=fEmpPhoneOther]');
        this.fEmpEmailOther = Selector('input[name=fEmpEmailOther]');
        this.fEmpStreetAddress1 = Selector('input[name=fEmpStreetAddress1]');
        this.fEmpStreetAddress2 = Selector('input[name=fEmpStreetAddress2]');
        this.fEmpPostalCode = Selector('input[name=fEmpPostalCode]');
        this.fEmpState = Selector('input[name=fEmpState]');
        this.fEmpCity = Selector('input[name=fEmpCity]');
    }
    async input () {
        await t
            .expect(editContactDataButton.visible).ok()
            .click(editContactDataButton)
            .expect(contactSection.hasClass('cssEditMode')).ok()
            .typeText(this.fEmpPhoneOther, '+358 0449890516')
            .typeText(this.fEmpEmailOther, 'example@example.com', { replace: true })
            .typeText(this.fEmpStreetAddress1, 'Address 1', { replace: true })
            .typeText(this.fEmpStreetAddress2, 'Address 2', { replace: true })
            .typeText(this.fEmpPostalCode, '02150')
            .typeText(this.fEmpState, 'State', { replace: true })
            .typeText(this.fEmpCity, 'City', { replace: true })
            .click(country)
            .click(country.find('li').nth(4))
            .click(saveContactDataButton)
            .expect(contactSection.hasClass('cssReadMode')).ok()
    }
}

