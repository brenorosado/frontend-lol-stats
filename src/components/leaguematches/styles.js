import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 0px 0px 5px;
`;

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

export const GamesStatsContainer = styled.div`
    width: 800px;
    background-color: #1a232b;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 0px 10px 0px;
    margin-bottom: 5px;
    border-radius: 5px;

    h1 {
        align-self: center;
        font-size: 25px;
        margin-bottom: 5px;
    }
`;

export const GameStats = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const WinRate = styled.div`
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #7180AC;
    background-color: #2b4570;
    border-radius: 50%;

    p {
        text-align: center;
        font-size: 20px;
    }
`;

export const PerformanceStats = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    p {
        color: white;
    }
`;

export const SelectedChampions = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 7px;
    }
`;

export const SelectedRoles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    img {
        height: 40px;
        margin-right: 5px;
    }
`;

export const RoleInfo = styled.div`
    display: flex;
    align-items: center;
`;