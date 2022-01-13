import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Menu from "../../components/Menu";
import { Container } from "./styles";

const Home = () => {
    const [summonerNickname, setSummonerNickname] = useState('');
    const [game, setGame] = useState('LOL');

    return (
        <>
            <Container>
                <h1>RIOT STATS</h1>
                <img src={logo} alt="TFT"></img>
                <h2>Type your <strong>summoner</strong> nickname and choose your game!</h2>
                <Menu game={game} setGame={setGame} summonerNickname={summonerNickname} setSummonerNickname={setSummonerNickname}/>
            </Container>
        </>
    );
};

export default Home;