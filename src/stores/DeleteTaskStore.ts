import { action, makeObservable } from 'mobx'
import { getTasksStore } from "./getTasksStore"

export class DeleteTaskStore {
    constructor() {
        makeObservable(this, {deleteTask: action});
    }

    deleteTask(id: number) {
        fetch(`https://64a42511c3b509573b572816.mockapi.io/task/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        }).then(() => getTasksStore.getTasks())
    }
}

export const deleteTaskStore = new DeleteTaskStore();