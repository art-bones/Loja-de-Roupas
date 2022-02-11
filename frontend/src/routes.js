import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/home";
import Contato from "./Pages/contato";


const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/contato" element={<Contato />}/>
        </Routes>
    )
}

export default MainRoutes;