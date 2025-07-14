import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home' 
import Accommodation from './pages/accommodation/Accommodation'
function App() {

  return (
    <BrowserRouter> 
        <Routes>
          <Route path={"/"} element={<Home />}/>
          <Route path={"/accommodation/:id"} element={<Accommodation />}/>
        </Routes>
    </BrowserRouter>

  )
    
}

export default App
