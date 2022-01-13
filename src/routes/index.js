import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../screens/home";
import Summoner from "../screens/summoner/Summoner";

const ReactRoutes = () => {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/summoner/:summonerNickname" element={<Summoner />}/>
                </Routes>
            </Router>
    );
};

export default ReactRoutes;