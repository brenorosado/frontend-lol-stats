import React from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

const Menu = ({ summonerNickname, setSummonerNickname }) => {
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(summonerNickname) {
            navigate(`/lol/${summonerNickname}`);
            setSummonerNickname(e.target.value  || '');
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input className="nickname-input" type="text" placeholder="Summoner" value={summonerNickname} onChange={e => setSummonerNickname(e.target.value)} />
                <input className="submit-button" type="submit" value="Search" />
            </form>
        </Container>
    );
};

export default Menu;