import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectStore } from '../stores/SelectStore'
import EditForm from '../components/EditForm'
import Unselect from '../services/unselect'

const EditPage: React.FC = () => {
    const navigate = useNavigate();
    
    onkeydown = (e) => {
        switch (e.key) {
            case "Escape":
                navigate('/');
                Unselect.unselect();
                break;
        }
    }

    if (selectStore.selectedRow.id === 0) {
        useEffect(() => {
            navigate('/');
            Unselect.unselect();
        }, [])
    } else { return <EditForm selectedRow={selectStore.selectedRow} /> }
}
export default EditPage;