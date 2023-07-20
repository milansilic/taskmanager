import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainGrid from "./pages/MainGrid";
import EditTask from "./pages/EditTask";

const App = () => {
   return <BrowserRouter basename={import.meta.env.DEV ? '/' : '/taskmanager/'}>
      <Routes>
         <Route path='/' element={<MainGrid/>} />
         <Route path='edit' element={<EditTask/>} />
      </Routes>
   </BrowserRouter>
}
export default App