import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home' 
function App() {

  return (
    <BrowserRouter> 
      <Header />
      <main>
        <Routes>
          <Route path={"/"} element={<Home />}/>
        </Routes>
      </main>
    </BrowserRouter>

  )
    
}

export default App
