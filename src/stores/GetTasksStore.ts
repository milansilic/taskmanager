import { action, makeObservable, observable } from 'mobx';

export interface objectModel {
    id: number,
    activity: string,
    frequency: string,
    resources: string,
    price: string,
    importanceLevel: number,
    urgencyLevel: number
}

export class GetTasksStore {
    tasks: objectModel[] = [];

    constructor() {
        makeObservable(this, {
            tasks: observable,
            getTasks: action,
        });
    }

    async getTasks() {
        try {
            const response = await fetch("https://64a42511c3b509573b572816.mockapi.io/task");
            const data = await response.json();
            this.tasks = await data.reverse().slice(0, 100);;
        } catch (error) { console.log(error); }
    }
}

export const getTasksStore = new GetTasksStore();