import React, { useEffect, useState } from "react";
import ReactRoutes from "./routes";
import GlobalStyle from "./styles/global";

const App = () => {
  const [summonerNickname, setSummonerNickname] = useState('');
  const [game, setGame] = useState('lol');

  return (
    <>
      <ReactRoutes game={game} setGame={setGame} summonerNickname={summonerNickname} setSummonerNickname={setSummonerNickname} />
      <GlobalStyle/>
    </>
  );
}

export default App;
