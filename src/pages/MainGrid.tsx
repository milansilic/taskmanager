import { useEffect } from 'react';
import { observer } from 'mobx-react-lite'
import { getTasksStore } from '../stores/GetTasksStore'
import TaskTable from '../components/TaskTable'
import TaskForm from '../components/TaskForm'
import DeleteModal from '../components/DeleteModal'
import '../styles/pages/mainGrid.scss'

const MainGrid: React.FC = observer(() => {
   
   useEffect(()=>{getTasksStore.getTasks()},[])
 
   return <>
      <DeleteModal/>
      <main className="flex-space-between">
         <h1><span>Personal</span> TASK Manager</h1>
         <TaskTable/>
         <TaskForm/>
      </main>
   </>
})
export default MainGrid;