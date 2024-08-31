

import './App.css'
import Home from './components/Home'
import { Res } from './components/Res'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Profile from './components/Profile'
import Transactions from './components/Transactions'
import AddComponent from './components/AddComponent'
function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/auth' element={<Res/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/transactions' element={<Transactions/>}/>
      <Route path='/add transaction' element={<AddComponent/>}/>
    </Routes> 


  
    </>
  )
}

export default App
