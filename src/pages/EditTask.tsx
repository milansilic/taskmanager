import { useNavigate } from "react-router-dom";
import EditForm from "../components/EditForm";

const EditTask = ({ allValues, unselect }: { allValues: any, unselect: any }) => {
    if (allValues === undefined) {
        const navigate = useNavigate();
        setTimeout(() => navigate('/', { replace: true }), 0);
    }
    return <>{allValues && (<EditForm allValues={allValues} unselect={unselect}/>)}</>
}
export default EditTask;