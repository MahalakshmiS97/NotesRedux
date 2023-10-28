import Sidebar from "./Sidebar"
import Notes from "./Notes"
import Edit from './Edit'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navigate } from "react-router-dom"

function App() {


  return (
    <>
     <div id='wrapper'>
      <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='*' element={< Navigate to='/notes'/>}/>
      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App