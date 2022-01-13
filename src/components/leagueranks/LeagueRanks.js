import React from "react";
import { Container, RankIcon, RankContainer, RankInfoUnranked, RankInfo, WinsSpan, LossesSpan } from "./styles";

const LeagueRanks = ({ data }) => {
    let rankedSoloData = null, rankedFlexData = null;

    data.map(item => {
        if (item.queueType === 'RANKED_SOLO_5x5') rankedSoloData = item;
        if (item.queueType === 'RANKED_FLEX_SR') rankedFlexData = item;
    });

    return (
        <Container>
            {
                rankedSoloData ? (
                    <RankContainer>
                        <RankIcon src={require(`../../assets/Emblem_${rankedSoloData.tier}.png`)} alt={rankedSoloData.tier} />
                        <RankInfo>
                            <h4>Ranked Solo 5x5</h4>
                            <h2>{`${rankedSoloData.tier} ${rankedSoloData.rank}`}</h2>
                            <h3>{rankedSoloData.leaguePoints}LP / <WinsSpan>{rankedSoloData.wins}W</WinsSpan> <LossesSpan>{rankedSoloData.losses}L</LossesSpan></h3>
                            <h3>Winrate: {((rankedSoloData.wins / (rankedSoloData.wins + rankedSoloData.losses)) * 100).toFixed(0)}%</h3>
                        </RankInfo>
                    </RankContainer>
                ) :
                (
                    <RankContainer>
                        <RankIcon src={require(`../../assets/Emblem_UNRANKED.png`)} alt="UNRANKED" />
                        <RankInfoUnranked>
                            <h4>Ranked Solo 5x5</h4>
                            <h2>UNRANKED</h2>
                        </RankInfoUnranked>
                    </RankContainer>
                )
            }
            {
                rankedFlexData ? (
                    <RankContainer>
                        <RankIcon src={require(`../../assets/Emblem_${rankedFlexData.tier}.png`)} alt={rankedFlexData.tier} />
                        <RankInfo>
                            <h4>Ranked Flex 5x5</h4>
                            <h2>{`${rankedFlexData.tier} ${rankedFlexData.rank}`}</h2>
                            <h3>{rankedFlexData.leaguePoints}LP / <WinsSpan>{rankedFlexData.wins}W</WinsSpan> <LossesSpan>{rankedFlexData.losses}L</LossesSpan></h3>
                            <h3>Winrate: {((rankedFlexData.wins / (rankedFlexData.wins + rankedFlexData.losses)) * 100).toFixed(0)}%</h3>
                        </RankInfo>
                    </RankContainer>
                ) :
                (
                    <RankContainer>
                        <RankIcon src={require(`../../assets/Emblem_UNRANKED.png`)} alt="UNRANKED" />
                        <RankInfoUnranked>
                            <h4>Ranked Flex 5x5</h4>
                            <h2>UNRANKED</h2>
                        </RankInfoUnranked>
                    </RankContainer>
                )
            }
        </Container>
    );
};

export default LeagueRanks;