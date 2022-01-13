import React from "react";
import { Container } from "./styles";
import { BiChevronDown } from 'react-icons/bi'

const Menu = ({ game, setGame, summonerNickname, setSummonerNickname }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setSummonerNickname(e.target.value || '');
        console.log(summonerNickname);
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input className="nickname-input" type="text" placeholder="Summoner" value={summonerNickname} onChange={e => setSummonerNickname(e.target.value)} />
                <div>
                    <div className="dropdown-selected">
                        <span>{game}</span>
                        <BiChevronDown />
                    </div>
                    <div className="dropdown-list">
                        <div className="dropdown-list__item" onClick={(e) => setGame('LOL')}>LOL</div>
                        <div className="dropdown-list__item" onClick={(e) => setGame('LOR')}>LOR</div>
                        <div className="dropdown-list__item" onClick={(e) => setGame('TFT')}>TFT</div>
                        <div className="dropdown-list__item" onClick={(e) => setGame('VAL')}>VAL</div>
                    </div>
                </div>
                <input className="submit-button" type="submit" value="Search" />
            </form>
        </Container>
    );
};

export default Menu;