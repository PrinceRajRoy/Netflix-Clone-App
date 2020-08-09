const API_KEY = process.env.REACT_APP_tmdbAPIKey;

/* EXAMPLE API */
/* https://api.themoviedb.org/3/movie/550?api_key=c1a3c986c82c4b63abb9642b94ca8290 */

const requests = {
    getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    getHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    getRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    getGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`
};

export default requests;