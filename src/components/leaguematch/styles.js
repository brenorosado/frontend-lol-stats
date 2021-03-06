import styled from 'styled-components';

export const MatchContainer = styled.div`
background-color: ${props => props.gameResult };
width: 800px;
display: flex;
justify-content: space-around;
padding: 5px 0px;
border-radius: 5px;
border: 1px solid #1e1e1e;
margin-bottom: 2px;
`;

export const GameInfoButton = styled.div`
    height: 110px;
    width: 35px;
    border: 1px solid #1e1e1e;
    border-radius: 5px;
    background-color: #1a232b;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const TeamsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Team = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 4px;
`;

export const Player = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 20px 100px;
    grid-column-gap: 2px;
    margin: 1px 0px;

    p {
        overflow: hidden;
        cursor: pointer;
        height: 18px;
        align-self: end;
    }

    img {
        height: 20px;
        border-radius: 4px;
    }
`;

export const GameInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    p { 
        font-size: 12px;
        font-weight: bold;
    }
`;

export const GameResult = styled.p`
    color: ${props => props.gameResult};
`;

export const SummonerInfo = styled.div`
    align-self: center;
    display: grid;
    grid-template-columns: 30px 30px 30px;
    grid-template-rows: 30px 30px 20px; 
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
        height: 60px;
        width: 60px;
        border-radius: 50%;
        border: 1px solid #1e1e1e;
    }
`;

export const SpellsImage = styled.div`
    img {
        height: 30px;
        width: 30px;
        border-radius: 5px;
        border: 1px solid #1e1e1e;
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
    grid-template-columns: repeat(4, 30px);
    grid-template-rows: 30px 30px;
    grid-gap: 2px;
    align-items: center;
    justify-content: center;

    img {
        height: 30px;
        width: 30px;
        border-radius: 5px;
        border: 1px solid #1e1e1e;
    }

    div {
        height: 30px;
        width: 30px;
        background-color: gray;
        border-radius: 5px;
        border: 1px solid #1e1e1e;
    }
`;

export const GameDataStatsContainer = styled.div`
    width: 100%;
    background-color: #1a232b;
    border-radius: 5px;
    padding: 0px 5px;
    display: flex;
    flex-direction: column;
    color: white;

    table {
        width: 100%;
        background-color: rgba(255, 255, 255, 0.05);
        text-align: center;
        border-radius: 5px;
        padding: 10px 0px;
        margin: 5px 0px;

        td {
            padding: 0px 8px;
        }
        
    }
`;

export const ChampionAndSpellsElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 54px;
    height: 39px;

    .tableChampionImage {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            height: 36px;
            width: 36px;
            border-radius: 50%;
        }
    }

    .tableSpellImage {
        display: flex;
        flex-direction: column;
        align-items: space-between;
        justify-content: space-between;
        height: 100%;

        img {
            height: 18px;
            width: 18x;
            border-radius: 5px;
        }
    }
`;

export const TableItemsLine = styled.div`
    display: flex;
    height: 30px;
    width: 180px;
    justify-content: space-between;
    align-items: center;

    img {
        height: 25px;
        width: 25px;
        border-radius: 5px;
    }

    div {
        height: 25px;
        width: 25px;
        background-color: #1e1e1e;
        border-radius: 5px;
        border: 1px solid gray;
    }
`;