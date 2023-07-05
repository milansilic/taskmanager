import { useState } from "react";
import { observer } from "mobx-react-lite"
import taskStore from "../stores/TaskStore"
import TaskTable from "../components/TaskTable"
import TaskForm from "../components/TaskForm"
import DeleteModal from "../components/DeleteModal"
import '../styles/pages/mainGrid.scss'

const MainGrid = observer(({passToEdit, unselect}:{passToEdit:any, unselect:any}) => {   
   const [selectedActivity, setSelectedActivity]: any = useState('')
   const [selectedId, setSelectedId]: any = useState()
   const passToDelete = (data:any)=> {
      setSelectedId(data.id);
      setSelectedActivity(data.activity);
   }

   return <>
      <DeleteModal selectedActivity={selectedActivity} selectedId={selectedId} unselect={unselect}/>
      <main className="flex-space-between">
         <h1><span>Personal</span> TASK Manager</h1>
         <TaskTable TASKS={taskStore.tasks} unselect={unselect} passToDelete={passToDelete} passToEdit={passToEdit}/>
         <TaskForm unselect={unselect}/>
      </main>
   </>
})
export default MainGrid;