import styled from 'styled-components';

export const Container = styled.div`
    width: 1010px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5px;
`;

export const Header = styled.div`
    width: 1000px;
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
    display: flex;
    justify-content: center;
    padding: 10px 0px;

    h2 {
        font-size: 25px;
        font-weight: normal;
    }
`;

export const MatchContainer = styled.div`
    background-color: ${props => props.gameResult };
    width: 1000px;
    display: flex;
    justify-content: space-around;
    padding: 5px 0px;
    border: 1px solid white;
    margin: 5px 0px;
`;

export const TeamsContainer = styled.div`
    display: flex;
`;

export const Team = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Player = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 28px 120px;
    grid-template-rows: 28px;
    grid-column-gap: 3px;
    margin: 1px 0px;

    p {
        overflow: hidden;
        cursor: pointer;
    }

    img {
        height: 28px;
        border-radius: 4px;
    }
`;

export const GameInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const VictoryResult = styled.p`
    color: green;
    font-weight: bold;
    font-size: 20px;
`;

export const DefeatResult = styled.p`
    color: red;
    font-weight: bold;
    font-size: 20px;
`;

export const SummonerInfo = styled.div`
    align-self: center;
    display: grid;
    grid-template-columns: 40px 40px 40px;
    grid-template-rows: 40px 40px 20px; 
    grid-gap: 3px;
    align-items: center;
    justify-content: center;

    p {
        grid-area: 3 / 1 / 3 / 4; 
        text-align: center;
    }
`;

export const UserChampionImage = styled.div`
    grid-area: 1 / 1 / 3 / 3;

    img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
    }
`;

export const SpellsImage = styled.div`
    img {
        height: 40px;
        width: 40px;
        border-radius: 5px;
    }
`;

export const SummonerPerformance = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h1 {
        font-size: 18px;
    }
`;

export const SummonerItems = styled.div`
    align-self: center;
    display: grid;
    grid-template-columns: repeat(4, 40px);
    grid-template-rows: 40px 40px;
    grid-gap: 3px;
    align-items: center;
    justify-content: center;

    img {
        height: 40px;
        width: 40px;
        border-radius: 5px;
    }

    div {
        height: 40px;
        width: 40px;
        background-color: gray;
        border-radius: 5px;
    }
`;