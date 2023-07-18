import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainGrid from "./pages/MainGrid";
import EditTask from "./pages/EditTask";
import { TaskStoreModel } from "./stores/TaskStore"

const App = () => {
   const [allValues, setAllValues]: any = useState();
  
   const passToEdit = (data: TaskStoreModel) => setAllValues(data)

   const unselect: Function = ()=> {
      for (const r of [...document.getElementsByClassName('rw')]) r.classList.remove('selected');
      document.body.classList.remove('unlock-edit-delete', 'delete-check');
   }

   return <BrowserRouter basename={import.meta.env.DEV ? '/' : '/taskmanager/'}>
      <Routes>
         <Route path='/' element={<MainGrid passToEdit={passToEdit} unselect={unselect}/>} />
         <Route path='edit' element={<EditTask allValues={allValues} unselect={unselect}/>} />
      </Routes>
   </BrowserRouter>
}
export default App