import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../screens/home";
import Summoner from "../screens/summoner";

const ReactRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/summoner/:id" element={<Summoner />}/>
                </Routes>
            </Router>
        </>
    );
};

export default ReactRoutes;