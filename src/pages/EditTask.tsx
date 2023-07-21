import { useNavigate } from 'react-router-dom'
import { selectStore } from '../stores/SelectStore'
import EditForm from '../components/EditForm'

const EditTask: React.FC = () => {
    const navigate = useNavigate();
    if (selectStore.selectedRow.id === 0 ) navigate('/', {replace: true})
    return <EditForm selectedRow={selectStore.selectedRow} nav={navigate} />
}
export default EditTask;