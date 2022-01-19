import React from "react";
import { Container, SummonerCard, SummonerImg, SummonerInfo } from "./styles";
import LoadingComponent from '../loadingcomponent';

const SummonerHeader = ({ data }) => {
    const { name, profileIconId, summonerLevel } = data;

    return (
        <Container>
            {
                data ? (
                    <SummonerCard>
                        <SummonerImg src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/profileicon/${profileIconId}.png`} />
                        <SummonerInfo>
                            <h1>Nick: <strong>{name}</strong></h1>
                            <h1>Level: <strong>{summonerLevel}</strong></h1>
                            <button onClick={(e) => window.location.reload()}>Update</button>
                        </SummonerInfo>
                    </SummonerCard>
                ) : (
                <LoadingComponent />
            )
            }
        </Container>
    );
};

export default SummonerHeader;