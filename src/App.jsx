import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FilmDetail } from "./components/FilmDetail/FilmDetail"
import { HomePage } from "./components/HomePage/HomePage"
import { ROUTES } from "./routes/routes"


//rlebhar : Pas besoin de la div
// rlebhar : il n'y pas pas de dossiers "pages", les pages sont dans "components", et il n'y pas pas de composants.
// rlebhar : le dossier api est dans assets/
export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path={ROUTES.index} />
          <Route element={<FilmDetail />} path={ROUTES.filmsDetail + "/:id"} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}