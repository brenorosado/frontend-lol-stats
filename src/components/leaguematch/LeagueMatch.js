import React, { useState } from "react";
import { MatchContainer, GameInfoButton, TeamsContainer, Team, Player, GameInfo, GameResult, SummonerInfo,
    UserChampionImage, SpellsImage, SummonerPerformance, SummonerItems, GameDataStatsContainer } from './styles';
import { useNavigate } from 'react-router-dom';
import { findQueueType } from "../../helpers/LolQueueTypeHandler";
import { findSpellImageLink } from "../../helpers/LoLSummonerSpellsHandler";
import { formatTime, calculateGameEndDate } from "../../helpers/DateHandler";
import { BiChevronDown } from 'react-icons/bi';

const LeagueMatch = ({gameDuration, gameEndTimestamp, queueId, gameResult, userChampion, userSummonerSpells, userKills, userDeaths, userAssists,
    userMinionsKilled, userChampionLevel, userVisionScore, userItems, blueTeam, redTeam}) => {

    const [showInfo, setShowInfo] = useState(false);
    const navigate = useNavigate();
    return (
        <>
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
                    <p>Level: {userChampionLevel}</p>
                    <p>Vision score: {userVisionScore}</p>
                </SummonerPerformance>
                <SummonerItems>
                    {
                        userItems.map(item => {
                            if (item !== 0) return <img src={`http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${item}.png`} alt={item} key={item} />
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
                                        <p onClick={(e) => navigate(`/lol/${summonerName}`)}>{summonerName}</p>
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
                                        <p onClick={(e) => navigate(`/lol/${summonerName}`)}>{summonerName}</p>
                                    </Player>
                                );
                            })
                        }
                    </Team>
                </TeamsContainer>
                <GameInfoButton onClick={(e) => {
                    setShowInfo(!showInfo);
                    console.log(showInfo);
                }}><BiChevronDown /></GameInfoButton>
            </MatchContainer>
            {
                showInfo ? (
                    <GameDataStatsContainer>
                        <h1>Coca cola e agua</h1>
                    </GameDataStatsContainer>
                ) : null
            }
        </>
    );
};

export default LeagueMatch;