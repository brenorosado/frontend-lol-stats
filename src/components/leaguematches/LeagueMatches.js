import React, { useEffect, useState } from "react";
import doGetRequest from "../../helpers/Api";
import { findQueueType } from "../../helpers/LolQueueTypeHandler";
import { findSpellImageLink } from "../../helpers/LoLSummonerSpellsHandler";
import { formatTime, calculateGameEndDate } from "../../helpers/DateHandler";
import { Container, MatchContainer, TeamsContainer, Team, Player, GameInfo, VictoryResult, DefeatResult, SummonerInfo, UserChampionImage, SpellsImage } from "./styles";

const LeagueMatches = ({ summonerPuuid }) => {
    const [matchesData, setMatchesData] = useState(null);
    let userChampion = '', gameResult = false, userAssists, userDeaths, userKills, userMinionsKilled, userItems, userVisionScore, userChampionName, userSummonerSpell1, userSummonerSpell2;

    useEffect(async () => {
        await doGetRequest(`/lol/matches/${summonerPuuid}`)
            .then(({ data }) => setMatchesData(data));
    }, [summonerPuuid]);

    matchesData ? (
        console.log(matchesData)) : console.log(`nao existe matchesData`);

    return (
        <Container>
            {
                matchesData ? (
                    matchesData.map(matchData => {

                        const { gameDuration, gameEndTimestamp, queueId } = matchData.info;

                        matchData.info.participants.map(participant => {
                            const { puuid, assists, kills, deaths, totalMinionsKilled, visionScore, item0, item1, item2, item3, item4, item5, item6, summoner1Id, summoner2Id, championName, win } = participant;
                            if(summonerPuuid === puuid) {
                                userChampion = championName;
                                gameResult = win;
                                userAssists = assists;
                                userDeaths = deaths;
                                userKills = kills;
                                userMinionsKilled = totalMinionsKilled;
                                userItems = [item0, item1, item2, item3, item4, item5, item6];
                                userVisionScore = visionScore;
                                userSummonerSpell1 = summoner1Id;
                                userSummonerSpell2 = summoner2Id;
                            };
                        });

                        const blueTeam = matchData.info.participants.slice(0, 5);
                        const redTeam = matchData.info.participants.slice(-5);

                        return (
                            <MatchContainer key={gameEndTimestamp}>
                                <GameInfo>
                                    <p>{findQueueType(queueId)}</p>
                                    <p>{calculateGameEndDate(gameEndTimestamp)}</p>
                                    {gameResult ? <VictoryResult>Victory</VictoryResult> : <DefeatResult>Defeat</DefeatResult>}
                                    <p>{formatTime(gameDuration)}</p>
                                </GameInfo>
                                <SummonerInfo>
                                    <UserChampionImage><img src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${userChampion === 'FiddleSticks' ? 'Fiddlesticks' : userChampion}.png`} alt={userChampion}/></UserChampionImage>
                                    <SpellsImage><img src={`http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/${findSpellImageLink(userSummonerSpell1)}`} alt={findSpellImageLink(userSummonerSpell1)} /></SpellsImage>
                                    <SpellsImage><img src={`http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/${findSpellImageLink(userSummonerSpell2)}`} alt={findSpellImageLink(userSummonerSpell2)} /></SpellsImage>
                                    <p>{userChampion}</p>
                                </SummonerInfo>
                                <TeamsContainer>
                                    <Team>
                                        {
                                            blueTeam.map(participant => {
                                                const { championName, summonerName } = participant;

                                                return (
                                                    <Player key={summonerName}>
                                                        <img src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${championName === 'FiddleSticks' ? 'Fiddlesticks' : championName}.png`} alt={championName}/>
                                                        <p onClick={(e) => console.log('Faça ir para a pagina desse summoner!')}>{summonerName}</p>
                                                    </Player>
                                                );
                                            })
                                        }
                                    </Team>
                                    <Team>
                                        {
                                            redTeam.map(participant => {
                                                const { championName, summonerName } = participant;
                                                return (
                                                    <Player key={summonerName}>
                                                        <img src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${championName}.png`} />
                                                        <p>{summonerName}</p>
                                                    </Player>
                                                );
                                            })
                                        }
                                    </Team>
                                </TeamsContainer>
                            </MatchContainer>
                        );
                    })
                ) : null
            }
        </Container>
    );
};

export default LeagueMatches;