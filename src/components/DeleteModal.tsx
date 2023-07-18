import taskStore from "../stores/TaskStore";
import '../styles/components/deleteModal.scss'

interface DeleteModalModel {
    selectedActivity: string,
    selectedId: number,
    unselect: Function
}

const DeleteModal: React.FC<DeleteModalModel> = ({selectedActivity, selectedId, unselect}) => {
    const clickHandler = ()=> {
        taskStore.deleteTask(selectedId);
        unselect()
    }

    return <section className='delete-modal-mask'>
        <div className='modal flex-space-between'>
            <h3>Are you sure you want to delete task:</h3>
            <b>"{selectedActivity}"</b>
            <button onClick={()=> clickHandler()}>yes</button>
            <button onClick={()=> unselect()}>no</button>
        </div>
    </section>
}
export default DeleteModal