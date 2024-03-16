import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import { FilmDetail } from './pages/filmDetail/FilmDetail'
import { Homepage } from './pages/homepage/Homepage'
import { ROUTES } from './routes/routes'


// rlebhar : Créer une vrai page 404
export function App() {
  return (
    <div>
      {/* <ToDoApp /> */}
      {/* <EffectLoby /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage />} path={ROUTES.Homepage} />
          <Route element={<FilmDetail />} path={ROUTES.FilmDetail + "/:id"} />
          <Route path="*" elements={<div>404 not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
