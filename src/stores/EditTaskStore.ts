import { action, makeObservable } from 'mobx'
import { getTasksStore } from "./GetTasksStore"

export class EditTaskStore {
    constructor() {
        makeObservable(this, {editTask: action});
    }

    editTask (
        id: number, 
        activity: string, 
        frequency: string, 
        resources: string, 
        price: string, 
        importanceLevel: number, 
        urgencyLevel: number
        ) {
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
            }).then(() => getTasksStore.getTasks())
        }
}

export const editTaskStore = new EditTaskStore();