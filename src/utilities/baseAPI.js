import axios from 'axios';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const baseAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export {
    baseAPI,
    BASE_IMAGE_URL
};