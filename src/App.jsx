import { Routes, Route } from 'react-router-dom';
import './App.scss'
import Home from './pages/home/Home' 
import Accommodation from './pages/accommodation/Accommodation'
import PageAbout from './pages/about/About'
import NoPageFound from './pages/error/Error'
function App() {

  return (
        <Routes>
          <Route path={"/"} element={<Home />}/>
          <Route path={"/accommodation/:id"} element={<Accommodation />}/>
          <Route path={"/about"} element={<PageAbout/>}/>
          <Route path="*" element={<NoPageFound/>} />
        </Routes>
  )
    
}

export default App
