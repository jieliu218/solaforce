import { Selector } from 'testcafe';
import { HR, MGR, EMP } from '../../components/Login';

fixture `Edit people section personal data`
    .page `https://uitest.i.solaforce.com/signin.html`;

const peopleModule = Selector('#idTDPeople');
const editPersonalDataButton = Selector('#idButEditPersonalData');
const secPersonalData = Selector('#idTDPersonalData');
const tablePersonalData = Selector('#idTDPersonalData table');
const getTableText = tablePersonalData.addCustomMethods({
    getCellText: (table, rowIndex, columnIndex) => {
        return table.rows[rowIndex].cells[columnIndex].innerText;
    }
});
const firstNameInput = Selector('input[name=fEmpFirstName]');
const empInfoText = Selector('textarea[name=fEmpInfo]');
const savePersonalDataButton = secPersonalData.find('button').nth(2);
test('Test HR', async t => {
    var hr = new HR();
    hr.login();

    await t
        .click(peopleModule);
    // READ
    await t
        .expect(secPersonalData.hasClass('cssReadMode')).ok()
        // FIRST NAME
        .expect(getTableText.getCellText(0, 1)).eql(': Nick')
        // GIVEN NAME
        .expect(getTableText.getCellText(1, 1)).eql(': Nick');
    // EDIT
    await t
        .click(editPersonalDataButton)
        .expect(secPersonalData.hasClass('cssEditMode')).ok()
        // FIRST NAME
        .expect(firstNameInput.value).eql('Nick')
        // GIVEN NAME
        .typeText(empInfoText, 'Emp info test')
        .typeText(empInfoText, 'Emp info test 1', { replace: true })
        .expect(empInfoText.value).eql('Emp info test 1')
        .click(savePersonalDataButton)
        .expect(secPersonalData.hasClass('cssReadMode')).ok()
});

test('Test Mgr', async t => {
    const mgr = new MGR();
    mgr.login();

    await t
        .click(peopleModule);
    // READ
    await t
        .expect(secPersonalData.hasClass('cssReadMode')).ok()
        // FIRST NAME
        .expect(getTableText.getCellText(0, 1)).eql(': James');
    // EDIT
    await t
        .expect(editPersonalDataButton.visible).notOk()
});

test('Test Emp', async t => {
    const emp = new EMP();
    emp.login();

    await t
        .click(peopleModule)
    // READ
    await t
        .expect(secPersonalData.hasClass('cssReadMode')).ok()
        // FIRST NAME
        .expect(getTableText.getCellText(0, 1)).eql(': Thor')
        // GIVEN NAME
        .expect(getTableText.getCellText(1, 1)).eql(': Thor');
    // EDIT
    await t
        .expect(editPersonalDataButton.visible).notOk()
});

