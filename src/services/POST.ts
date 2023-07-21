import { httpClient } from "../stores/HttpClient";

export class PostService {
    static post = async (
        url: string,
        activity: string,
        frequency: string,
        resources: string,
        price: string,
        importanceLevel: number,
        urgencyLevel: number
    ) => {
        fetch(url, {
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
        }).then(() => httpClient.getTasks())
    }
}
export default PostService;