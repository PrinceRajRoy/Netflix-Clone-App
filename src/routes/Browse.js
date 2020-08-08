import React, { Component } from 'react'
import Row from '../components/browse/Row'
import requests from '../utilities/request';
import LandingPoster from '../components/browse/LandingPoster';
import Nav from '../components/browse/Nav';
import { baseAPI } from '../utilities/baseAPI';
import { BrowseContext } from '../contexts/BrowseContext';

class Browse extends Component {

    static contextType = BrowseContext;

    componentDidMount() {
        window.scroll(0, 0);
        const getGenres = async () => {
            const result = await baseAPI.get(requests.getGenres);
            this.context.addGenres(result.data.genres);
        }
        getGenres();
    }
    
    render() {
        return (
            <div>
                <Nav />
                <LandingPoster />
                <Row title='NETFLIX ORIGINALS' endpoint={requests.getNetflixOriginals} netflixOriginals/>
                <Row title='Trending Picks For You' endpoint={requests.getTrending} />
                <Row title='Top Rated Movies' endpoint={requests.getTopRatedMovies}/>
                <Row title='Top Action Movies' endpoint={requests.getActionMovies}/>
                <Row title='Top Comedy Movies' endpoint={requests.getComedyMovies}/>
                <Row title='Top Horror Movies' endpoint={requests.getHorrorMovies}/>
                <Row title='Top Romance Movies' endpoint={requests.getRomanceMovies}/>
                <Row title='Top Documentry Series' endpoint={requests.getDocumentaries}/>
            </div>
        )
    }
}

export default Browse;