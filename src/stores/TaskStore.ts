import { makeObservable, observable } from 'mobx';

export interface TaskStoreModel {
    id: number,
    activity: string,
    frequency: string,
    resources: string,
    price: string,
    importanceLevel: string,
    urgencyLevel: string,
}

export class TaskStore {
    tasks: TaskStoreModel[] = [];
    
    constructor() {
        makeObservable(this, {tasks: observable});
    }
}

const taskStore = new TaskStore();
export default taskStore;