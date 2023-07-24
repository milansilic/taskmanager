import { makeObservable, observable, action } from 'mobx';
import { httpClient } from './HttpClient'
import Unselect from '../services/unselect'

export class TaskFormStore {
    activity: string = '';
    frequency: string = '';
    resources: string = '';
    price: string = '';
    importanceLevel: number = 0;
    urgencyLevel: number = 0;
    actReq: string = '';
    ILReq: string = '';
    ULReq: string = '';

    constructor() {
        makeObservable(this, {
            activity: observable,
            frequency: observable,
            resources: observable,
            price: observable,
            importanceLevel: observable,
            urgencyLevel: observable,
            actReq: observable,
            ILReq: observable,
            ULReq: observable,
            setActivity: action,
            setFrequency: action,
            setResources: action,
            setPrice: action,
            setImpLvl: action,
            setUrgLvl: action,
            requiredReset: action,
            inputReset: action,
            handleAdd: action,
            handleDelete: action,
        });
    }

    setActivity(act: string) { this.activity = act }
    setFrequency(frq: string) { this.frequency = frq }
    setResources(res: string) { this.resources = res }
    setPrice(pri: string) { this.price = pri }
    setImpLvl(il: number) { this.importanceLevel = il }
    setUrgLvl(ul: number) { this.urgencyLevel = ul }
   
    requiredReset() {
        this.actReq = '';
        this.ILReq = '';
        this.ULReq = '';
    }

    inputReset() {
        this.activity = '';
        this.frequency = '';
        this.resources = '';
        this.price = '';
        this.importanceLevel = 0;
        this.urgencyLevel = 0;
        this.requiredReset();
    }

    handleAdd(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        this.requiredReset();
        const errorMessage = '...is required!'
        if (!this.activity) this.actReq = errorMessage
        if (this.importanceLevel === 0) this.ILReq = errorMessage
        if (this.urgencyLevel === 0) this.ULReq = errorMessage
        if (this.activity && this.importanceLevel >= 1 && this.importanceLevel <= 5 && this.urgencyLevel >= 1 && this.urgencyLevel <= 5) {
            httpClient.postTask(this.activity, this.frequency, this.resources, this.price, this.importanceLevel, this.urgencyLevel);
            this.inputReset()
            let ele = [...document.querySelectorAll("[name=il], [name=ul]")];
            ele.forEach((elm: any) => elm.checked = false);
            Unselect.unselect();
        }
    }

    handleDelete(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        e.currentTarget.blur();
        document.body.classList.add('delete-check');
    }
}
export const taskFormSt = new TaskFormStore();