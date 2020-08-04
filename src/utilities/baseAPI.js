import axios from 'axios';

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const baseAPI = axios.create({
    baseURL: 'http://api.themoviedb.org/3'
});

export {
    baseAPI,
    BASE_IMAGE_URL
};