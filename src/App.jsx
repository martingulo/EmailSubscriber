import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Fallback from './screens/Fallback'

function App() {
 
  return (
    <> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Fallback />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

