import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Header/header.jsx';
import { HomePage } from './Pages/HomePage.jsx';
import { TVShow } from './Pages/TVShow.jsx';
import { ROUTES } from "./Routes/routes.js";

// rlebhar : Le projet n'est pas du tout architecturé comme vu en cours.
// Il n'y pas de dossier components tout est mélangé. Et attentions au majuscules , minuscules
export function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route element={<HomePage />} path={ROUTES.index} />
          <Route element={<TVShow />} path={ROUTES.showDetail + "/:id"} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}