import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5px;
`;

export const RankContainer = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #1a232b;
    padding: 15px 0px;
    margin-bottom: 5px;
    border-radius: 5px;
`;

export const RankIcon = styled.img`
    height: 120px;
`;

export const RankInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #fff;
    height: 100px;

    h4 {
        font-weight: light;
    }

    h2 {
        font-size: 23px;
    }
`;

export const RankInfoUnranked = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    color: #fff;
    height: 100px;

    h4 {
        padding: 2px 0px 5px 0px;
        font-weight: light;
    }

    h2 {
        font-size: 23px;
    }
`;

export const WinsSpan = styled.span`
    color: lightgreen;
`;

export const LossesSpan = styled.span`
    color: lightcoral;
`;