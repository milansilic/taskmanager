import { action, makeObservable, observable } from 'mobx';

interface ITodoModel {
    id: number;
    activity: string;
    frequency: string;
    resources: string;
    price: string;
    importanceLevel: string;
    urgencyLevel: string;
}

export class TaskStore {
    tasks: ITodoModel[] = [];
    todo: ITodoModel = this.resetTodoData();
    // URL: string = "http://localhost:8000/task";
    // empdate: any = {};

    constructor() {
        makeObservable(this, {
            todo: observable,
            tasks: observable,
            // empdate: observable,
            resetTodoData: action,
            getTasks: action,
            postTasks: action,
            deleteTask: action
        });
        this.getTasks();
    }

    resetTodoData() {
        return {
            id: Math.max(0, Math.max(...this.tasks.map(({ id }) => id))) + 1,
            activity: "",
            frequency: "",
            resources: "",
            price: "",
            importanceLevel: "",
            urgencyLevel: "",
        }
    }

    // // OPT1
    async getTasks() {
        try {
            const response = await fetch("https://64a42511c3b509573b572816.mockapi.io/task");
            const data = await response.json();
            this.tasks = await data;
        } catch (error) {console.log(error);}
    }

    // // OPT2
    // getTasks() {
    //     fetch("http://localhost:8000/task")
    //         .then(res => res.json())
    //         .then(data => { this.tasks = data })
    // }

    // // OPT3
    // async getTasks(){
    //     const result = await fetch("http://localhost:8000/task")
    //     result.json().then(json =>{this.tasks = json});       
    // }

    postTasks(activity: any, frequency: any, resources: any, price: any, importanceLevel: any, urgencyLevel: any,) {
        // fetch("http://localhost:8000/task", {
        fetch("https://64a42511c3b509573b572816.mockapi.io/task", {
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
    }

    editTasks(id:any, activity: any, frequency: any, resources: any, price: any, importanceLevel: any, urgencyLevel: any,) {
        fetch(`https://64a42511c3b509573b572816.mockapi.io/task/${id}`, {
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
    }

    deleteTask(id: any) {
        fetch(`https://64a42511c3b509573b572816.mockapi.io/task/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        }).then(() => this.getTasks())
    }
}

const taskStore = new TaskStore();
export default taskStore;