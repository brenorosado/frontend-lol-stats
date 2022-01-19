import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 0px 0px 5px;
`;

export const GamesStatsContainer = styled.div`
    height: 150px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img {
        height: 37px;
        border: 1px solid #1e1e1e;
        border-radius: 5px;
        margin-right: 5px;
    }
`;

export const ChampionInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
    width: 90px;
`;