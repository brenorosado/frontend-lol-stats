import React, { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Content, HeaderContent, SummonerIcon, SummonerRank, SummonerInfo, WinsLabel, LossesLabel, FooterContent, CircleDiv } from './styles';
import api from "../../services/api";


const Summoner = ({ match, history }) => {

    const [summoner, setSummoner] = useState(Object);
    const [loading, setLoading] = useState(0);

    const validateRank = (rank) => {
        const fromatedRank = rank[0].toUpperCase() - rank.substring[1];

        return <SummonerRank src={`../../assets/Emblem_${fromatedRank}.png`} alt={fromatedRank} />;
    };

    useEffect(() => {
        const loadData = async () => {
            setLoading(1);

            const res = await api
                .get(`/summoner/${match.params.id}`)
                .catch((e) => alert("Houve um erro ao buscar summoner"));

            if (res && res.data) setSummoner(res.data);

            setLoading(0);
        };

        loadData();
    }, []);

    return (
        <Container>
            {
                loading ?
                    <div><Spinner animation="border" variant="light" /></div>
                    :
                    <Content>
                        <HeaderContent>
                            <SummonerIcon src={summoner.iconUrl} alt="icon" />
                            <SummonerInfo>
                                <h2><strong>{match.params.id}</strong> #BR1</h2>
                                <h3>Level {summoner.summonerLevel} - {summoner.tier} {summoner.rank}</h3>
                            </SummonerInfo>
                            {validateRank(summoner.tier)}
                        </HeaderContent>
                        <FooterContent>
                            <div>
                                <WinsLabel>
                                    <strong>WINS: </strong>
                                    <label>{summoner.wins}</label>
                                </WinsLabel>
                                <LossesLabel>
                                    <strong>LOSSES: </strong>
                                    <label>{summoner.losses}</label>
                                </LossesLabel>
                            </div>
                            <CircleDiv>
                                <label>
                                    <strong>{summoner.winRate}%</strong>
                                </label>
                                <label>WIN RATE</label>
                            </CircleDiv>
                        </FooterContent>
                    </Content>
            }
        </Container>
    );
};

export default Summoner;