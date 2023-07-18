import { useState } from "react";
import { observer } from "mobx-react-lite"
import taskStore from "../stores/TaskStore"
import TaskTable from "../components/TaskTable"
import TaskForm from "../components/TaskForm"
import DeleteModal from "../components/DeleteModal"
import { TaskStoreModel } from "../stores/TaskStore"
import '../styles/pages/mainGrid.scss'

interface MainGridModel { 
   passToEdit: Function, 
   unselect: Function 
}

const MainGrid: React.FC<MainGridModel> = observer(({passToEdit, unselect}) => {
   const [selectedActivity, setSelectedActivity]: any = useState('')
   const [selectedId, setSelectedId]: any = useState()
   
   const passToDelete = (data: TaskStoreModel) => {
      setSelectedId(data.id);
      setSelectedActivity(data.activity);
   }

   return <>
      <DeleteModal selectedActivity={selectedActivity} selectedId={selectedId} unselect={unselect} />
      <main className="flex-space-between">
         <h1><span>Personal</span> TASK Manager</h1>
         <TaskTable
            TASKS={taskStore.tasks}
            passToDelete={passToDelete}
            passToEdit={passToEdit}
            unselect={unselect}
         />
         <TaskForm unselect={unselect} />
      </main>
   </>
})
export default MainGrid;