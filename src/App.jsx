import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { FilmItem } from './components/pages/FilmItem'
import { HomePage } from './components/pages/HomePage'
import { ROUTES } from './routes/routes'

// rlebhar : Guys, essayez de pas envoyer le code de vos potes en copié collé...
export function App() {


  return (

    <div>
      
      {/* <ToDoApp /> */}
      {/* <EffectLoby /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path={ROUTES.index} />
          <Route element={<FilmItem />} path={ROUTES.FilmDetail + "/:id"} />
          <Route path="*" element={<div>404 Not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


