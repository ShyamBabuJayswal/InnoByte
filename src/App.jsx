

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Rooms from './pages/Rooms'
import Gallary from './pages/Gallary'

function App() {
  

  return (
    
      <div>
        <Navbar/>
        <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/rooms' element={<Rooms/>}/>
      <Route path='/gallary' element={<Gallary/>}/>
      <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </div>
    
  )
}

export default App
