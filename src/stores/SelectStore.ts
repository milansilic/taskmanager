import { makeObservable, observable, action } from 'mobx';
import { objectModel } from '../stores/GetTasksStore'

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
}

export const selectStore = new SelectStore();