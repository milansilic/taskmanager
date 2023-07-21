export class Unselect { 
    static unselect(){
        for (const r of [...document.getElementsByClassName('rw')]) r.classList.remove('selected');
        document.body.classList.remove('unlock-edit-delete', 'delete-check');
    }
}
export default Unselect;