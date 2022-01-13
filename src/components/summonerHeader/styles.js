import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SummonerCard = styled.div`
    width: 60%;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 20px;
    margin: 20px;
    display: flex;
`;

export const SummonerImg = styled.img`
    height: 150px;
    background-color: gray;
    border: 3px solid gray;
    
    @media(max-width: 710px){
        height: 100px;
    }
`;

export const SummonerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
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
        height: 40px;
        background-color: #648de5;
        color: white;
        border-radius: 4px;

        @media(max-width: 710px){
            height: 30px;
        }
    }

    
`;