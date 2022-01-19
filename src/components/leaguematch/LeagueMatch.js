import React, { useState } from "react";
import {
    MatchContainer, GameInfoButton, TeamsContainer, Team, Player, GameInfo, GameResult, SummonerInfo,
    UserChampionImage, SpellsImage, SummonerPerformance, SummonerItems, GameDataStatsContainer, ChampionAndSpellsElement,
    TableItemsLine 
} from './styles';
import { useNavigate } from 'react-router-dom';
import { findQueueType } from "../../helpers/LolQueueTypeHandler";
import { findSpellImageLink } from "../../helpers/LoLSummonerSpellsHandler";
import { formatTime, calculateGameEndDate } from "../../helpers/DateHandler";
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Spinner } from 'react-bootstrap';

const LeagueMatch = ({ gameDuration, gameEndTimestamp, queueId, gameResult, userChampion, userSummonerSpells, userKills, userDeaths, userAssists,
    userMinionsKilled, userChampionLevel, userVisionScore, userItems, blueTeam, redTeam }) => {

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
                <GameInfoButton onClick={(e) => setShowInfo(!showInfo)}>{showInfo ? <BiChevronUp /> : <BiChevronDown />}</GameInfoButton>
            </MatchContainer>
            {
                showInfo ? (
                    <GameDataStatsContainer>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Blue Team</th>
                                    <th>Level</th>
                                    <th>KDA</th>
                                    <th>Damage</th>
                                    <th>CS</th>
                                    <th>Vision Score</th>
                                    <th>Gold</th>
                                    <th>Items</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    blueTeam.map(player => {
                                        const { assists, champLevel, championName, deaths, goldEarned, items, kills, spells,
                                            summonerName, totalDamageDealtToChampions, totalMinionsKilled, visionScore } = player;

                                        return (
                                            <tr key={player.summonerName}>
                                                <td>
                                                    <ChampionAndSpellsElement>
                                                        <div className="tableChampionImage"><img src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${championName === 'FiddleSticks' ? 'Fiddlesticks' : championName}.png`} alt={championName} /></div>
                                                        <div className="tableSpellImage">
                                                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/${findSpellImageLink(spells[0])}`} alt={findSpellImageLink(spells[0])} />
                                                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/${findSpellImageLink(spells[1])}`} alt={findSpellImageLink(spells[1])} />
                                                        </div>
                                                    </ChampionAndSpellsElement>
                                                </td>
                                                <td>{summonerName}</td>
                                                <td>{champLevel}</td>
                                                <td>{kills} / {deaths} / {assists}</td>
                                                <td>{totalDamageDealtToChampions}</td>
                                                <td>{totalMinionsKilled}</td>
                                                <td>{visionScore}</td>
                                                <td>{goldEarned}</td>
                                                <td>
                                                    <TableItemsLine>
                                                        {
                                                            items.map(item => {
                                                                if (item !== 0) return <img src={`http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${item}.png`} alt={item} key={item} />
                                                                return <div></div>
                                                            })
                                                        }
                                                    </TableItemsLine>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Red Team</th>
                                    <th>Level</th>
                                    <th>KDA</th>
                                    <th>Damage</th>
                                    <th>CS</th>
                                    <th>Vision Score</th>
                                    <th>Gold</th>
                                    <th>Items</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    redTeam.map(player => {
                                        const { assists, champLevel, championName, deaths, goldEarned, items, kills, spells,
                                            summonerName, totalDamageDealtToChampions, totalMinionsKilled, visionScore } = player;

                                        return (
                                            <tr key={player.summonerName}>
                                                <td>
                                                    <ChampionAndSpellsElement>
                                                        <div className="tableChampionImage"><img src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${championName === 'FiddleSticks' ? 'Fiddlesticks' : championName}.png`} alt={championName} /></div>
                                                        <div className="tableSpellImage">
                                                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/${findSpellImageLink(spells[0])}`} alt={findSpellImageLink(spells[0])} />
                                                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/${findSpellImageLink(spells[1])}`} alt={findSpellImageLink(spells[1])} />
                                                        </div>
                                                    </ChampionAndSpellsElement>
                                                </td>
                                                <td>{summonerName}</td>
                                                <td>{champLevel}</td>
                                                <td>{kills} / {deaths} / {assists}</td>
                                                <td>{totalDamageDealtToChampions}</td>
                                                <td>{totalMinionsKilled}</td>
                                                <td>{visionScore}</td>
                                                <td>{goldEarned}</td>
                                                <td>
                                                    <TableItemsLine>
                                                        {
                                                            items.map(item => {
                                                                if (item !== 0) return <img src={`http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${item}.png`} alt={item} key={item} />
                                                                return <div></div>
                                                            })
                                                        }
                                                    </TableItemsLine>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </GameDataStatsContainer>
                ) : <Spinner animation="border" variant="light" />
            }
        </>
    );
};

export default LeagueMatch;