import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const SummonerCard = styled.div`
    width: 60.65%;
    background-color: #1a232b;
    border-radius: 5px;
    padding: 20px;
    display: flex;
`;

export const SummonerImg = styled.img`
    height: 110px;
    background-color: gray;
    border: 3px solid gray;
    border-radius: 5px;
    
    @media(max-width: 710px){
        height: 100px;
    }
`;

export const SummonerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
        font-size: 25px;
        color: white;
        margin-left: 25px;

        @media(max-width: 710px){
            font-size: 20px;
        }

        strong {
            color: #edc988;
        }
    }

    button {
        margin-left: 25px;
        width: 100px;
        height: 30px;
        background-color: #648de5;
        color: white;
        border-radius: 4px;

        @media(max-width: 710px){
            height: 30px;
        }
    }

    
`;