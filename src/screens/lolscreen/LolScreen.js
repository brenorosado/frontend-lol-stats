import React, { useEffect, useState } from "react";
import Menu from "../../components/menu";
import { useParams } from "react-router-dom";
import doGetRequest from "../../helpers/Api";
import SummonerHeader from "../../components/summonerHeader/SummonerHeader";
import LeagueRanks from "../../components/leagueranks/LeagueRanks";
import LeagueMatches from "../../components/leaguematches/LeagueMatches";
import LoadingComponent from "../../components/loadingcomponent";
import { ContentSection } from './styles';

const LolScreen = ({ game, setGame, summonerNickname, setSummonerNickname }) => {
    console.log('Lol screen renderizou!');
    const { summoner } = useParams();

    const [summonerInfo, setSummonerInfo] = useState(null);

    useEffect(async () => {
        setSummonerInfo(null);

        await doGetRequest(`/summoner/${summoner}`)
            .then(({data}) => setSummonerInfo(data));
    }, [summoner]);

    return (
        <>
            <Menu game={game} setGame={setGame} summonerNickname={summonerNickname} setSummonerNickname={setSummonerNickname} />
            {
                summonerInfo ? (
                    <>
                        <SummonerHeader data={summonerInfo} />
                        <ContentSection>
                            <LeagueRanks summonerId={summonerInfo.id} />
                            <LeagueMatches summonerPuuid={summonerInfo.puuid}/>
                        </ContentSection>
                    </>
                ) : <LoadingComponent/>
            }
        </>
    );
};

export default LolScreen;