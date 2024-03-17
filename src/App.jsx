import { useState } from 'react'
import { Home } from './pages/Home/Home'
import { Detail } from './pages/Detail/Detail'
import { ROUTES } from './routes/routes'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'

// rlebhar : Evitez de copier coller le code des potes 
export function App() {
  return (
    <div>
      {/* <ToDoApp /> */}
      {/* <EffectLoby /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path={ROUTES.home} />
          <Route element={<Detail/>} path={ROUTES.detail+"/:id"} />
          <Route path={ROUTES.error} />
      
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
