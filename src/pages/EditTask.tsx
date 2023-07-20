import { useNavigate } from 'react-router-dom'
import { selectStore } from '../stores/SelectStore'
import EditForm from '../components/EditForm'

const EditTask: React.FC = () => {
    if (selectStore.selectedRow.id === 0 ) {
        const navigate = useNavigate();
        setTimeout(() => navigate('/', { replace: true }), 0);
    } 
    return <EditForm selectedRow={selectStore.selectedRow}/>
}
export default EditTask;