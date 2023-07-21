export class GetService {
    static get = async (url: string) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            const tasks = await data.reverse().slice(0, 100);
            return tasks;
        } catch (error) {console.log(error);}
    }
}
export default GetService;