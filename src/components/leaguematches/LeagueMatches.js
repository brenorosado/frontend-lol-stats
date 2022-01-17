import React, { useEffect, useState } from "react";
import doGetRequest from "../../helpers/Api";
import { findQueueType } from "../../helpers/LolQueueTypeHandler";
import { findSpellImageLink } from "../../helpers/LoLSummonerSpellsHandler";
import { formatTime, calculateGameEndDate } from "../../helpers/DateHandler";
import {
    Container, MatchContainer, TeamsContainer, Team, Player, GameInfo, SummonerInfo, UserChampionImage, SpellsImage,
    SummonerPerformance, SummonerItems, GameResult, GamesStatsContainer, WinRate, GameStats } from "./styles";

const LeagueMatches = ({ summonerPuuid }) => {
    const [matchesData, setMatchesData] = useState(null);
    let userChampion = '', userChampionLevel, gameResult = false, userAssists, userDeaths, userKills, userMinionsKilled, userItems, userVisionScore, userChampionName, userSummonerSpells;
    let cabeca;
    useEffect(async () => {
        await doGetRequest(`/lol/matches/${summonerPuuid}`)
            .then(({ data }) => setMatchesData(data));

    }, [summonerPuuid]);

    let arrayGamesData = [];
    let arrayGamesResults = [];
    let arrayPlayers = [];
    let arrayUserChampions = [];
    let arrayUserKDAs = [];
    let arrayUserMinionsKilled = [];
    let arrayUserVisionScores = [];
    let arrayUserTeamPosition = [];
    
    if (matchesData) {
        matchesData.map(matchData => {
            let gameParticipants = [];
            const { gameDuration, gameEndTimestamp, queueId } = matchData.info;

            matchData.info.participants.map(participant => {
                const { puuid, assists, kills, deaths, totalMinionsKilled, visionScore, goldEarned, item0, item1,
                    item2, item6, item3, item4, item5, summoner1Id, summoner2Id, championName, champLevel, win, summonerName, totalDamageDealtToChampions, teamPosition } = participant;

                if (summonerPuuid === puuid) {
                    arrayUserChampions = [...arrayUserChampions, championName];
                    arrayGamesResults = [...arrayGamesResults, win ? 'victory' : 'defeat'];
                    arrayUserKDAs = [...arrayUserKDAs, {
                        kills,
                        deaths,
                        assists
                    }];
                    arrayUserMinionsKilled = [...arrayUserMinionsKilled, totalMinionsKilled];
                    arrayUserVisionScores = [...arrayUserVisionScores, visionScore];
                    arrayUserTeamPosition = [...arrayUserTeamPosition, teamPosition];
                };

                let gameParticipant = {
                    puuid,
                    summonerName,
                    championName,
                    champLevel,
                    kills,
                    deaths,
                    assists,
                    totalMinionsKilled,
                    visionScore,
                    totalDamageDealtToChampions,
                    goldEarned,
                    win,
                    items: [item0, item1, item2, item6, item3, item4, item5],
                    spells: [summoner1Id, summoner2Id]
                };

                gameParticipants = [...gameParticipants, gameParticipant];
            });

            arrayPlayers = [...arrayPlayers, gameParticipants];
            console.log(arrayPlayers);

            arrayGamesData = [...arrayGamesData, {
                gameDuration,
                gameEndTimestamp,
                queueId,
                gameParticipants
            }];
        });
    };

    return (
        <Container>
            <GamesStatsContainer>
                <h1>LAST 10 GAMES STATS</h1>
                <GameStats>
                    {
                        matchesData ? (
                            <WinRate>
                                <p>
                                    Winrate {(((arrayGamesResults.filter((v) => (v === 'victory')).length) / arrayGamesResults.length) * 100)}%
                                </p>
                            </WinRate>
                        ) : null
                    }
                </GameStats>
            </GamesStatsContainer>
            {
                matchesData ? (
                    arrayGamesData.map(matchData => {

                        const { gameDuration, gameEndTimestamp, queueId } = matchData;

                        matchData.gameParticipants.map(participant => {
                            if (participant.puuid === summonerPuuid) {
                                userChampion = participant.championName;
                                userChampionLevel = participant.champLevel;
                                gameResult = participant.win;
                                userAssists = participant.assists;
                                userDeaths = participant.deaths;
                                userKills = participant.kills;
                                userMinionsKilled = participant.totalMinionsKilled;
                                userItems = participant.items;
                                userVisionScore = participant.visionScore;
                                userChampionName = participant.championName;
                                userSummonerSpells = participant.spells;
                            };
                        });

                        let blueTeam = matchData.gameParticipants.slice(0, 5);
                        let redTeam = matchData.gameParticipants.slice(-5);
                        console.log(userSummonerSpells);

                        return (
                            <MatchContainer key={gameEndTimestamp} gameResult={gameResult ? '#Acfba6' : '#Fba6a6'}>
                                <GameInfo>
                                    <p>{findQueueType(queueId)}</p>
                                    <p>{calculateGameEndDate(gameEndTimestamp)}</p>
                                    <GameResult gameResult={gameResult ? 'green' : 'red'}>{gameResult ? 'Victory' : 'Defeat'}</GameResult>
                                    <p>{formatTime(gameDuration)}</p>
                                </GameInfo>
                                <SummonerInfo>
                                    <UserChampionImage><img src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${userChampion === 'FiddleSticks' ? 'Fiddlesticks' : userChampion}.png`} alt={userChampion} /></UserChampionImage>
                                    <SpellsImage><img src={`http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/${findSpellImageLink(userSummonerSpells[0])}`} alt={findSpellImageLink(userSummonerSpells[0])} /></SpellsImage>
                                    <SpellsImage><img src={`http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/${findSpellImageLink(userSummonerSpells[1])}`} alt={findSpellImageLink(userSummonerSpells[1])} /></SpellsImage>
                                    <p>{userChampion}</p>
                                </SummonerInfo>
                                <SummonerPerformance>
                                    <h1>{`${userKills} / ${userDeaths} / ${userAssists}`}</h1>
                                    <p>KDA: {((userKills + userAssists) / (userDeaths === 0 ? 1 : userDeaths)).toFixed(2)}</p>
                                    <p>CS: {userMinionsKilled}</p>
                                    <p>Vision score: {userVisionScore}</p>
                                </SummonerPerformance>
                                <SummonerItems>
                                    {
                                        userItems.map(item => {
                                            if (item !== 0) return <img src={`http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${item}.png`} alt={item} />
                                            return <div></div>
                                        })
                                    }
                                </SummonerItems>
                                <TeamsContainer>
                                    <Team>
                                        {
                                            blueTeam.map(participant => {
                                                const { championName, summonerName } = participant;

                                                return (
                                                    <Player key={summonerName}>
                                                        <img src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${championName === 'FiddleSticks' ? 'Fiddlesticks' : championName}.png`} alt={championName} />
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
                                                        <img src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${championName === 'FiddleSticks' ? 'Fiddlesticks' : championName}.png`} alt={championName} />
                                                        <p onClick={(e) => console.log('Faça ir para a pagina desse summoner!')}>{summonerName}</p>
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