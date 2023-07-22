import { makeObservable, observable, action } from 'mobx';
import { objectModel } from './HttpClient'

export class SelectStore {
    selectedRow: objectModel = {
        id: 0,
        activity: '',
        frequency: '',
        resources: '',
        price: '',
        importanceLevel: 1,
        urgencyLevel: 1
    }

    constructor() {
        makeObservable(this, {
            selectedRow: observable,
            rowSelect: action
        });
    }

    rowSelect(i: number, selectedRow: objectModel){
        this.selectedRow = selectedRow;
        
        let tableRows = [...document.getElementsByClassName('rw')]
        if (tableRows[i].classList.contains('selected')) {
            tableRows[i].classList.remove('selected')
            document.body.classList.remove('unlock-edit-delete')
        } else {
            for (const r of tableRows) r.classList.remove('selected')
            tableRows[i].classList.add('selected')
            document.body.classList.add('unlock-edit-delete')
        }
    }

    setActivity(act: string) { this.selectedRow.activity = act }
    setFrequency(frq: string) { this.selectedRow.frequency = frq }
    setResources(res: string) { this.selectedRow.resources = res }
    setPrice(pri: string) { this.selectedRow.price = pri }
    setImpLvl(il: number) { this.selectedRow.importanceLevel = il }
    setUrgLvl(ul: number) { this.selectedRow.urgencyLevel = ul }
}
export const selectStore = new SelectStore();