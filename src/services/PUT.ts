import { httpClient } from "../stores/HttpClient";

export class PutService {
    static put = async (
        url: string,
        id: number,
        activity: string,
        frequency: string,
        resources: string,
        price: string,
        importanceLevel: number,
        urgencyLevel: number
    ) => {
        fetch(`${url}/${id}`, {
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
        }).then(() => httpClient.getTasks())
    }
}
export default PutService;