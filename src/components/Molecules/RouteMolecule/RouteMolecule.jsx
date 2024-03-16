import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ROUTES } from "../../../routes/routes.js"

import { DetailsTvShowPage } from "../../../pages/DetailsTvShowPage/DetailsTvShowPage.jsx"
import { HomePage } from "../../../pages/HomePage/HomePage.jsx"
import { NotFoundPage } from "../../../pages/NotFoundPage/NotFoundPage.jsx"

// rlebhar : Pas de nécéssité d'avoir un composant pour les Routes qui seront utilisée une fois dans l'app.
export const RouteMolecule = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<HomePage />} path={ROUTES.home} />
            <Route element={<DetailsTvShowPage />} path={ROUTES.detail + "/:id"} />
            <Route element={<NotFoundPage />} path={ROUTES.notFound} />
        </Routes>
    </BrowserRouter>

}