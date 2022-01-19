import React, { useEffect, useState } from "react";
import doGetRequest from "../../helpers/Api";
import {
    Container, GamesStatsContainer, WinRate, GameStats, SelectedChampions,
    PerformanceStats, SelectedRoles, RoleInfo, ChampionInfo } from "./styles";
import LeagueMatch from "../leaguematch";
import LoadingComponent from "../loadingcomponent/LoadingComponent";

const LeagueMatches = ({ summonerPuuid }) => {
    const [matchesData, setMatchesData] = useState(null);
    
    let userChampion = '', userChampionLevel, gameResult = false, userAssists, userDeaths, userKills, userMinionsKilled, userItems, userVisionScore, userChampionName, userSummonerSpells;

    useEffect(async () => {
        await doGetRequest(`/lol/matches/${summonerPuuid}`)
            .then(({ data }) => setMatchesData(data));

    }, [summonerPuuid]);

    let arrayGamesData = [], arrayGamesResults = [], arrayPlayers = [], arrayUserChampions = [], arrayUserKills = [], arrayUserDeaths = [], arrayUserAssists = [], arrayUserMinionsKilled = [], arrayUserVisionScores = [], arrayUserTeamPosition = [];;
    let userAverageKills, userAverageDeaths, userAverageAssists, userAverageKDA, userAverageMinionsKilled, userAverageVisionScore;

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
                    arrayUserKills = [...arrayUserKills, kills];
                    arrayUserDeaths = [...arrayUserDeaths, deaths];
                    arrayUserAssists = [...arrayUserAssists, assists];
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

            arrayGamesData = [...arrayGamesData, {
                gameDuration,
                gameEndTimestamp,
                queueId,
                gameParticipants
            }];
        });

        userAverageMinionsKilled = arrayUserMinionsKilled.reduce((userAverageMinionsKilled, i) => userAverageMinionsKilled + i) / arrayUserMinionsKilled.length;
        userAverageVisionScore = arrayUserVisionScores.reduce((userAverageVisionScore, i) => userAverageVisionScore + i) / arrayUserVisionScores.length;
        userAverageKills = (arrayUserKills.reduce((userAverageKills, i) => userAverageKills + i) / arrayUserKills.length);
        userAverageDeaths = (arrayUserDeaths.reduce((userAverageDeaths, i) => userAverageDeaths + i) / arrayUserDeaths.length);
        userAverageAssists = (arrayUserAssists.reduce((userAverageAssists, i) => userAverageAssists + i) / arrayUserAssists.length);
        userAverageKDA = ((userAverageKills + userAverageAssists) / (userAverageDeaths ? userAverageDeaths : 1)).toFixed(2);
    };

    const mostRolesPlayed = (arrayOfRoles) => {
        let support = {
            role: 'Support',
            porcentage: (((arrayOfRoles.filter((v) => (v === 'UTILITY')).length) / arrayOfRoles.length) * 100)
        };
        let adcarry = {
            role: 'ADCarry',
            porcentage: (((arrayOfRoles.filter((v) => (v === 'BOTTOM')).length) / arrayOfRoles.length) * 100)
        };
        let mid = {
            role: 'Mid',
            porcentage: (((arrayOfRoles.filter((v) => (v === 'MIDDLE')).length) / arrayOfRoles.length) * 100)
        };
        let jungler = {
            role: 'Jungler',
            porcentage: (((arrayOfRoles.filter((v) => (v === 'JUNGLER')).length) / arrayOfRoles.length) * 100)
        };
        let top = {
            role: 'Top',
            porcentage: (((arrayOfRoles.filter((v) => (v === 'TOP')).length) / arrayOfRoles.length) * 100)
        };

        let mostUsedRoles = [support, adcarry, mid, jungler, top].sort((a, b) => b.porcentage - a.porcentage);

        return [mostUsedRoles[0] ? mostUsedRoles[0] : { role: '', porcentage: '0' }, mostUsedRoles[1]];
    };

    const usedRoles = mostRolesPlayed(arrayUserTeamPosition);

    const findTheTwoMostUsedChampions = (arrayOfChampions) => {
        let count = [], secondCount = [];

        for (let i = 0; i < arrayOfChampions.length; i++) count = [...count, arrayOfChampions.filter(x => x == arrayOfChampions[i]).length];
        let max = Math.max(...count);
        const indexOfMax = count.indexOf(max);

        let result = [{
            championName: arrayOfChampions[indexOfMax],
            usedPorcentage: `${(arrayOfChampions.filter(x => x === arrayOfChampions[indexOfMax]).length) * 10}%`
        }];

        const mostUsedChampion = arrayOfChampions.splice(indexOfMax, 1)[0];

        for (let i = 0; i < arrayOfChampions.length; i++) {
            if (arrayOfChampions[i] === mostUsedChampion) {
                arrayOfChampions.splice(i, 1);
                i--;
            };
        };

        for (let i = 0; i < arrayOfChampions.length; i++) {
            secondCount = [...secondCount, arrayOfChampions.filter(x => x === arrayOfChampions[i]).length];
        };

        max = Math.max(...secondCount);
        const indexOfSecondMax = secondCount.indexOf(max);

        result = [...result, {
            championName: arrayOfChampions[indexOfSecondMax],
            usedPorcentage: `${(arrayOfChampions.filter(x => x === arrayOfChampions[indexOfSecondMax]).length) * 10}%`
        }];

        return result;
    };

    const twoMostUsedChampions = findTheTwoMostUsedChampions(arrayUserChampions);

    return (
        <Container>
            <GamesStatsContainer>
                <GameStats>
                    {
                        matchesData ? (
                            <>
                                <WinRate>
                                    <p>
                                        Winrate {(((arrayGamesResults.filter((v) => (v === 'victory')).length) / arrayGamesResults.length) * 100)}%
                                    </p>
                                </WinRate>
                                <PerformanceStats>
                                    <h3>Average: </h3>
                                    <p>{userAverageKills} / {userAverageDeaths} / {userAverageAssists}</p>
                                    <p>KDA: {userAverageKDA}</p>
                                    <p>CS: {userAverageMinionsKilled}</p>
                                    <p>Vision Score: {userAverageVisionScore}</p>
                                </PerformanceStats>
                                <SelectedChampions>
                                    <h3>Preferred champions</h3>
                                    {
                                        twoMostUsedChampions.map(champion => {
                                            return (
                                                <ChampionInfo>
                                                    <img src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${champion.championName === 'FiddleSticks' ? 'Fiddlesticks' : champion.championName}.png`} alt={champion.championName} />
                                                    <p>{champion.usedPorcentage}</p>
                                                </ChampionInfo>
                                            )
                                        })
                                    }
                                </SelectedChampions>
                                <SelectedRoles>
                                    <h3>Preferred roles</h3>
                                    {
                                        usedRoles.map(role => {
                                            return (
                                                <RoleInfo key={role.role}>
                                                    <img src={require(`../../assets/Role_${role.role}.png`)} alt={role.role} />
                                                    <p key={role.role}>{role.porcentage ? `${role.porcentage}%` : '0%'}</p>
                                                </RoleInfo>
                                            );
                                        })
                                    }
                                </SelectedRoles>
                            </>

                        ) : <LoadingComponent />
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

                        return (
                            <LeagueMatch gameDuration={gameDuration} gameEndTimestamp={gameEndTimestamp} queueId={queueId} gameResult={gameResult} userChampion={userChampion} userSummonerSpells={userSummonerSpells}
                                userKills={userKills} userDeaths={userDeaths} userAssists={userAssists} userMinionsKilled={userMinionsKilled} userChampionLevel={userChampionLevel} userVisionScore={userVisionScore}
                                userItems={userItems} blueTeam={blueTeam} redTeam={redTeam}
                            />
                        );
                    })
                ) : <LoadingComponent/>
            }
        </Container>
    );
};

export default LeagueMatches;