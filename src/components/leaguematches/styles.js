import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
`;

export const MatchContainer = styled.div`
    width: 900px;
    display: flex;
    justify-content: space-evenly;
    background-color: lightgray;
    padding: 5px 0px;
    margin-bottom: 30px;
`;

export const TeamsContainer = styled.div`
    display: flex;
    border: 1px solid blue;
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
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const VictoryResult = styled.p`
    color: green;
`;

export const DefeatResult = styled.p`
    color: red;
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
    }
`;

export const SummonerPerformance = styled.div`
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
`;