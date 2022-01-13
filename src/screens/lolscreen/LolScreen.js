import React, { useEffect, useState } from "react";
import Menu from "../../components/menu";
import { useParams } from "react-router-dom";
import doGetRequest from "../../helpers/Api";
import SummonerHeader from "../../components/summonerHeader/SummonerHeader";

const LolScreen = ({ game, setGame, summonerNickname, setSummonerNickname }) => {
    console.log('Lol screen renderizou!');
    const { summoner } = useParams();

    const [summonerData, setSummonerData] = useState(null);
    const [leagueData, setLeagueData] = useState(null);

    useEffect(async () => {
        const lolData = await doGetRequest(`/lol/${summoner}`);

        setSummonerData(lolData.data.summonerData);
        setLeagueData(lolData.data.lolData);
    }, [summoner]);

    return (
        <>
            <Menu game={game} setGame={setGame} summonerNickname={summonerNickname} setSummonerNickname={setSummonerNickname} />
            {
                leagueData ? <SummonerHeader data={summonerData}/> : null
            }
            <h1>Nick: {summoner}</h1>
            {/* <h1>Data: {JSON.stringify(summonerData)}</h1> */}
        </>
    );
};

export default LolScreen;