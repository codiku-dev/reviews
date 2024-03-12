import React from 'react';
import ReactDOM from 'react-dom/client';
import { ROUTES } from "./routes/routes.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Accueil } from "./pages/accueil/Accueil.jsx";
import { Details } from "./pages/details/Details.jsx";

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Accueil/>} path={ROUTES.index} />
      <Route element={<Details/>} path={ROUTES.details + "/:id"} />
    </Routes>
  </BrowserRouter>
)
