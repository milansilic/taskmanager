import { makeObservable, action } from 'mobx';

export class UnselectStore {   
    constructor() {
        makeObservable(this, {
            unselect: action
        });
    }

    unselect(){
        for (const r of [...document.getElementsByClassName('rw')]) r.classList.remove('selected');
        document.body.classList.remove('unlock-edit-delete', 'delete-check');
    }
}
export const unselectStore = new UnselectStore();