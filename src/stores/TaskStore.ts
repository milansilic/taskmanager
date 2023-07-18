import { action, makeObservable, observable } from 'mobx';

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
    URL: string = "https://64a42511c3b509573b572816.mockapi.io/task/?_limit=1";

    constructor() {
        makeObservable(this, {
            tasks: observable,
            getTasks: action,
            postTasks: action,
            deleteTask: action
        });
        this.getTasks();
    }

    async getTasks() {
        try {
            const response = await fetch(this.URL);
            const data = await response.json();
            this.tasks = await data.slice(0, 100);;
        } catch (error) { console.log(error); }
    }

    postTasks (
        activity: string, 
        frequency: string, 
        resources: string, 
        price: string, 
        importanceLevel: string, 
        urgencyLevel: string, 
        lastPageBtn: HTMLElement | any
        ) {
            fetch(this.URL, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    id: null,
                    activity: activity,
                    frequency: frequency,
                    resources: resources,
                    price: price,
                    importanceLevel: importanceLevel,
                    urgencyLevel: urgencyLevel,
                })
            })
                .then(() => this.getTasks())
                .then(() => {setTimeout(() => {lastPageBtn.click()}, 1);})
        }

    editTasks (
        id: number, 
        activity: string, 
        frequency: string, 
        resources: string, 
        price: string, 
        importanceLevel: string, 
        urgencyLevel: string, 
        toMainBtn: HTMLElement | any) {
            fetch(`${this.URL}/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    id: id,
                    activity: activity,
                    frequency: frequency,
                    resources: resources,
                    price: price,
                    importanceLevel: importanceLevel,
                    urgencyLevel: urgencyLevel,
                })
            })
                .then(() => this.getTasks())
                .then(() => {setTimeout(() => {toMainBtn.click()}, 1);})
        }

    deleteTask(id: number) {
        fetch(`${this.URL}/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        }).then(() => this.getTasks())
    }
}

const taskStore = new TaskStore();
export default taskStore;


