import { action, makeObservable, observable } from 'mobx'
import GetService from '../services/GET'
import PostService from '../services/POST'
import DeleteService from '../services/DELETE'
import PutService from '../services/PUT'

export interface objectModel {
    id: number,
    activity: string,
    frequency: string,
    resources: string,
    price: string,
    importanceLevel: number,
    urgencyLevel: number
}

export class HttpClient {
    URL: string = "https://64a42511c3b509573b572816.mockapi.io/task";
    tasks: objectModel[] = [];

    constructor() {
        makeObservable(this, {
            tasks: observable,
            getTasks: action,
            postTask: action,
            deleteTask: action,
        });
    }

    getTasks = async () => {this.tasks = await GetService.get(this.URL)}

    postTask (
        activity: string,
        frequency: string,
        resources: string,
        price: string,
        importanceLevel: number,
        urgencyLevel: number
    ) {PostService.post(this.URL, activity, frequency, resources, price, importanceLevel, urgencyLevel)}

    editTask (
        id: number, 
        activity: string, 
        frequency: string, 
        resources: string, 
        price: string, 
        importanceLevel: number, 
        urgencyLevel: number
    ) {PutService.put(this.URL,id, activity, frequency, resources, price, importanceLevel, urgencyLevel)}

    deleteTask (id: number) {DeleteService.delete(this.URL, id)}
}
export const httpClient = new HttpClient();