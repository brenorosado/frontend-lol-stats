import React, { useEffect, useState } from "react";
import ReactRoutes from "./routes";
import GlobalStyle from "./styles/global";

const App = () => {
  const [summonerNickname, setSummonerNickname] = useState('');

  return (
    <>
      <ReactRoutes summonerNickname={summonerNickname} setSummonerNickname={setSummonerNickname} />
      <GlobalStyle/>
    </>
  );
}

export default App;
