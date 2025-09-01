import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/home/Home' 
import Accommodation from './pages/accommodation/Accommodation'
import PageAbout from './pages/about/About'
import NoPageFound from './pages/error/Error'
function App() {

  return (
    <BrowserRouter> 
        <Routes>
          <Route path={"/"} element={<Home />}/>
          <Route path={"/accommodation/:id"} element={<Accommodation />}/>
          <Route path={"/about"} element={<PageAbout/>}/>
          <Route path="*" element={<NoPageFound/>} />
        </Routes>
    </BrowserRouter>

  )
    
}

export default App
