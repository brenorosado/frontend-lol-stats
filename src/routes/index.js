import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../screens/home";
import LolScreen from "../screens/lolscreen";

const ReactRoutes = ({ game, setGame, summonerNickname, setSummonerNickname }) => {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home game={game} setGame={setGame} summonerNickname={summonerNickname} setSummonerNickname={setSummonerNickname} />} />
                    <Route path="/lol/:summoner" element={<LolScreen game={game} setGame={setGame} summonerNickname={summonerNickname} setSummonerNickname={setSummonerNickname} />}/>
                </Routes>
            </Router>
    );
};

export default ReactRoutes;