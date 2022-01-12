import React from "react";
import { useParams } from "react-router-dom";

const Summoner = () => {
    const { summonerNickName } = useParams();

    return (
        <h1>{summonerNickName}</h1>
    );
};

export default Summoner;