import logo from "../../assets/logo.png";
import Menu from "../../components/menu";
import { Container } from "./styles";

const Home = ({ summonerNickname, setSummonerNickname }) => {

    return (
        <>
            <Container>
                <h1>LOL STATS</h1>
                <img src={logo} alt="TFT"></img>
                <h2>Type your <strong>summoner</strong> nickname!</h2>
                <Menu summonerNickname={summonerNickname} setSummonerNickname={setSummonerNickname}/>
            </Container>
        </>
    );
};

export default Home;