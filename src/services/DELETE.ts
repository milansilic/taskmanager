import { httpClient } from "../stores/HttpClient";

export class DeleteService {
    static delete = async (url: string, id: number) => {
        fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        }).then(() => httpClient.getTasks())
    }
}
export default DeleteService;