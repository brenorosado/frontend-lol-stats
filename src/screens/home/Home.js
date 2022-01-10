import React, { useState } from "react";
import { Container, Header, Img } from './styles.js';
import logo from "../../assets/logo.png"
import img from "../../assets/lol.png"

const Home = ({ history }) => {
    const [summoner, setSummoner] = useState('');

    return (
        <Container>
            <Header>
                <img src={logo} alt="logo" />
                <span>
                    <strong>LOL STATS</strong>
                </span>
            </Header>
            <h1>
                Type your <strong>summoner</strong> nickname
            </h1>
            <form>
                <input
                    value={summoner}
                    onChange={(e) => setSummoner(e.target.value)}
                    placeholder="Summoner"
                />
                <label>BR1</label>
                <button
                    type="button"
                    onClick={() => history.push(`/summoner/${summoner}`)}
                >
                    <strong>BUSCAR</strong>
                </button>
            </form>
            <Img src={img} alt="bg" />
        </Container>
    );
};

export default Home;