import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import EditPage from './pages/EditPage'

const App = () => {
   return <BrowserRouter basename={import.meta.env.DEV ? '/' : '/taskmanager/'}>
      <Routes>
         <Route path='/' element={<MainPage />} />
         <Route path='edit' element={<EditPage />} />
      </Routes>
   </BrowserRouter>
}
export default App