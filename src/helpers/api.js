import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:3001',
});

const doGetRequest = (path) => {
    return Api
        .get(path)
        .catch((e) => alert("Houve um erro ao buscar summoner"));
};

export default doGetRequest;