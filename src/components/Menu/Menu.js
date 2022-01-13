import React from "react";
import { Container } from "./styles";
import { BiChevronDown } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";

const Menu = ({ game, setGame, summonerNickname, setSummonerNickname }) => {
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${game}/${summonerNickname}`);
        setSummonerNickname(e.target.value  || '');
        console.log(summonerNickname);
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input className="nickname-input" type="text" placeholder="Summoner" value={summonerNickname} onChange={e => setSummonerNickname(e.target.value)} />
                <div>
                    <div className="dropdown-selected">
                        <span>{game.toUpperCase()}</span>
                        <BiChevronDown />
                    </div>
                    <div className="dropdown-list">
                        <div className="dropdown-list__item" onClick={(e) => setGame('lol')}>LOL</div>
                        <div className="dropdown-list__item" onClick={(e) => setGame('lor')}>LOR</div>
                        <div className="dropdown-list__item" onClick={(e) => setGame('tft')}>TFT</div>
                        <div className="dropdown-list__item" onClick={(e) => setGame('val')}>VAL</div>
                    </div>
                </div>
                <input className="submit-button" type="submit" value="Search" />
            </form>
        </Container>
    );
};

export default Menu;