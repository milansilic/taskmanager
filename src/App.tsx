import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import MainGrid from "./pages/MainGrid";
import EditTask from "./pages/EditTask";

const App = observer(() => {

   const [allValues, setAllValues]: any = useState()

   const passToApp = (data: any) => {
      setAllValues(data)
   }

   return <BrowserRouter>
      <Routes>
         <Route path='/' element={<MainGrid passToApp={passToApp} />} />
         <Route path='edit' element={<EditTask allValues={allValues}/>} />
      </Routes>
   </BrowserRouter>
})
export default App