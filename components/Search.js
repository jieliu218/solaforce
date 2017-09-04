/**
 * Created by jie on 8/14/2017.
 */
import { Selector, t } from 'testcafe';

const input = Selector('#idSearchPanelSearch');
const result = Selector('#idSPCSearchResult');

const pEmp = result.find('div').withText('Odin, Thor');
const pEmp2 = result.find('div').withText('Gordon, Flash');
const pEmp3 = result.find('div').withText('Norris, Chuck');

// SEARCH EMP
export class  SearchEmp{
    async search () {
        await t
            .typeText(input, 'Odin')
            .wait(1000)
            .pressKey('left')
            .expect(pEmp.exists).ok()
            .click(pEmp)
    }
}

export class  SearchEmp2{
    async search () {
        await t
            .typeText(input, 'Flash')
            .wait(1000)
            .pressKey('left')
            .expect(pEmp2.exists).ok()
            .click(pEmp2)
    }
}

export class  SearchEmp3{
    async search () {
        await t
            .typeText(input, 'Chuck')
            .wait(1000)
            .pressKey('left')
            .expect(pEmp3.exists).ok()
            .click(pEmp3)
    }
}