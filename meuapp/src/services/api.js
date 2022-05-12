import axios from 'axios';

//Base da URL:  https://api.themoviedb.org/3/
// URL da api : https://api.themoviedb.org/3/movie/now_playing?api_key=3471bbbed679838e32e19a8e035f18f4

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;