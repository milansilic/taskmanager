import { action, makeObservable } from 'mobx'
import { getTasksStore } from "./GetTasksStore"

export class PostTaskStore {
    constructor() {
        makeObservable(this, {postTasks: action});
    }

    postTasks (
        activity: string, 
        frequency: string, 
        resources: string, 
        price: string, 
        importanceLevel: number, 
        urgencyLevel: number
        ) {
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
            }).then(() => getTasksStore.getTasks())
    }
}

export const postTaskStore = new PostTaskStore();