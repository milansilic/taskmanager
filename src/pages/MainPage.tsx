import { useEffect } from 'react';
import { observer } from 'mobx-react-lite'
import { httpClient } from '../stores/HttpClient'
import { selectStore } from '../stores/SelectStore'
import TaskTable from '../components/TaskTable'
import TaskForm from '../components/TaskForm'
import DeleteModal from '../components/DeleteModal'
import Unselect from '../services/unselect'
import '../styles/pages/mainGrid.scss'

const MainPage: React.FC = observer(() => {
   onkeydown = (e) => {
      switch (e.key) {
         case "Escape":
            Unselect.unselect()
            break;
         case "Enter":
            if (document.body.classList.contains('delete-check')) {
               httpClient.deleteTask(selectStore.selectedRow.id);
               Unselect.unselect()
            }
            break;
      }
   }

   useEffect(() => { httpClient.getTasks() }, [])

   return <>
      <DeleteModal />
      <main className="flex-space-between">
         <h1><span>Personal</span> TASK Manager</h1>
         <TaskTable />
         <TaskForm />
      </main>
   </>
})
export default MainPage;