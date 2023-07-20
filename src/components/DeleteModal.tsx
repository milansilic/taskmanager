import { observer } from 'mobx-react-lite'
import { deleteTaskStore } from '../stores/DeleteTaskStore'
import { selectStore } from '../stores/SelectStore'
import { unselectStore } from '../stores/UnselectStore'
import '../styles/components/deleteModal.scss'

const DeleteModal: React.FC = observer(() => {
    const executeDelete = ()=> {
        deleteTaskStore.deleteTask(selectStore.selectedRow.id)
        unselectStore.unselect()
    }

    return <section className='delete-modal-mask'>
        <div className='modal flex-space-between'>
            <h3>Are you sure you want to delete task:</h3>
            <b>"{selectStore.selectedRow.activity}"</b>
            <button onClick={()=> executeDelete()}>yes</button>
            <button onClick={()=> unselectStore.unselect()}>no</button>
        </div>
    </section>
})
export default DeleteModal