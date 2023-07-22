import { makeObservable, observable, action } from 'mobx';

export class InputStore {
    activity: string = '';
    frequency: string = '';
    resources: string = '';
    price: string = '';
    importanceLevel: number = 0;
    urgencyLevel: number = 0;
    
    constructor() {
        makeObservable(this, {
            activity: observable,
            frequency: observable,
            resources: observable,
            price: observable,
            importanceLevel: observable,
            urgencyLevel: observable,
            setActivity: action,
            setFrequency: action,
            setResources: action,
            setPrice: action,
            setImpLvl: action,
            setUrgLvl: action,
            inputReset: action,
        });
    }

    setActivity(act: string) {this.activity = act}
    setFrequency(frq: string) {this.frequency = frq}
    setResources(res: string) {this.resources = res}
    setPrice(pri: string) {this.price = pri}
    setImpLvl(il: number) {this.importanceLevel = il}
    setUrgLvl(ul: number) {this.urgencyLevel = ul}
    inputReset() {
        this.activity = '';
        this.frequency = '';
        this.resources = '';
        this.price = '';
        this.importanceLevel = 0;
        this.urgencyLevel = 0;
    }
}
export const inputStore = new InputStore();