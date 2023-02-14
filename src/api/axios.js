import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "2367030dbb643b4e6b79c2a401b1be99",
        language: "ko-KR"
    }
});




export default instance;