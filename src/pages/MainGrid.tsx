import { useState } from "react";
import { observer } from "mobx-react-lite"
import taskStore from "../stores/TaskStore"
import TaskTable from "../components/TaskTable"
import TaskForm from "../components/TaskForm"
import DeleteModal from "../components/DeleteModal"
import '../styles/pages/mainGrid.scss'


const MainGrid = observer(({passToApp}:{passToApp:any}) => {

   
   const [selectedActivity, setSelectedActivity]: any = useState('')
   const [selectedId, setSelectedId]: any = useState()

   const passSelectedRow = (allValues:any)=> {
      setSelectedId(allValues.id);
      setSelectedActivity(allValues.activity);
   }

   const unselect = ()=> {
      for (const r of [...document.getElementsByClassName('rw')]) r.classList.remove('selected');
      document.body.classList.remove('unlock-edit-delete', 'delete-check');
   }

   return <>
      <DeleteModal selectedActivity={selectedActivity} selectedId={selectedId} unselect={unselect}/>
      <section className="main-grid flex-space-between">
         <h1><span>Personal</span> TASK Manager</h1>
         <main>
            <TaskTable TASKS={taskStore.tasks} unselect={unselect} passSelectedRow={passSelectedRow} passToApp={passToApp}/>
         </main>
         <TaskForm unselect={unselect}/>
      </section>
   </>
})
export default MainGrid;