import { observer } from 'mobx-react-lite'
import { httpClient } from '../stores/HttpClient'
import { selectStore } from '../stores/SelectStore'
import Unselect from '../services/unselect'
import '../styles/components/deleteModal.scss'

const DeleteModal: React.FC = observer(() => {
    return <section className='delete-modal-mask'>
        <div className='modal flex-space-between'>
            <h3>Are you sure you want to delete task:</h3>
            <b>"{selectStore.selectedRow.activity}"</b>
            <button onClick={() => {
                httpClient.deleteTask(selectStore.selectedRow.id);
                Unselect.unselect();
            }}>yes</button>
            <button onClick={() => Unselect.unselect()}>no</button>
        </div>
    </section>
})
export default DeleteModal