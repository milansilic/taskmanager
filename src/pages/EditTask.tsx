import { useNavigate } from "react-router-dom";
import EditForm from "../components/EditForm";

interface EditTaskModel { 
    allValues: any, 
    unselect: Function 
}

const EditTask: React.FC<EditTaskModel> = ({allValues, unselect}) => {
    if (allValues === undefined) {
        const navigate = useNavigate();
        setTimeout(() => navigate('/', { replace: true }), 0);
    }
    return <>{allValues && (<EditForm allValues={allValues} unselect={unselect}/>)}</>
}
export default EditTask;