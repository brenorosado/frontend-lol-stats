import styled from "styled-components";

export const Container = styled.div`
    height: 350px;
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const RankContainer = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 15px 0px;
    border: 1px solid lightgray;
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