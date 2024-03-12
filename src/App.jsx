import React from 'react'
import { ROUTES } from "./routes/routes.js"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { HomePage } from './pages/HomePage/HomePage.jsx'
import { FilmDetails } from './pages/FilmDetails/FilmDetails.jsx'

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={< HomePage />} path={ROUTES.homePage} />
        <Route element={<FilmDetails />} path={ROUTES.detail + "/:id"} />
      </Routes>
    </BrowserRouter>
  )
}