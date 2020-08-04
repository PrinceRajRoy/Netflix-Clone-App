import React, { useState, useEffect, useContext } from 'react';
import { baseAPI, BASE_IMAGE_URL } from '../../utilities/baseAPI';
import styled from 'styled-components';
import { BrowseContext } from '../../contexts/BrowseContext';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import Icon from 'react-icons-kit';
import {play3} from 'react-icons-kit/icomoon/play3';
import {thumbsUp} from 'react-icons-kit/typicons/thumbsUp';
import {thumbsDown} from 'react-icons-kit/typicons/thumbsDown';
import {arrow_down} from 'react-icons-kit/ikons/arrow_down';
import {plus} from 'react-icons-kit/entypo/plus';

function Row({ title, endpoint, netflixOriginals }) {

    const [content, setContent] = useState([]);
    const [trailerId, setTrailerId] = useState('');
    const { genres } = useContext(BrowseContext);

    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    };

    useEffect(() => {

        async function getData() {
            const request = await baseAPI.get(endpoint);
            setContent(request.data.results);
        }
        getData();

    }, [endpoint]);

    const showTrailer = (el) => {
        if(trailerId) {
            setTrailerId('');
        } else {
            movieTrailer(el?.name || el.title || el.original_name || '')
            .then(url => {
                const params = new URLSearchParams(new URL(url).search);
                setTrailerId(params.get('v'));
            }).catch(err => console.log(err));
        }
    }

    return (
        <RowContainer netflixOriginals={netflixOriginals}>
            {/* Title */}
            <h3>{title}</h3>
            {/* Poster Parent For Allowing Poster To Grow On Y-Axis on Hover as overflow-x: scroll
                doesn't allow overflow-y: visible (makes it auto) which is the case with class posters */}
            {/* <div className='posters-parent'> */}
                <div className='posters'>
                    {/* Poster Row */}
                    {content.map(el => (
                        <div 
                            key={el.id} 
                            className='poster-div'
                            onClick={() => showTrailer(el)}>
                            <img
                                src={BASE_IMAGE_URL + (netflixOriginals ? el.poster_path : el.backdrop_path)}
                                className='poster'
                                alt={el.name} />
                            {
                                !netflixOriginals && 
                                <div className="hover-items">
                                    <div className='hover-item-1'>
                                        <Icon icon={play3} className='circular-border red' size={13} />
                                    </div>
                                    <div className='hover-item-2'>
                                        {el?.title || el?.name || el?.original_name}
                                    </div>
                                    <div className='hover-item-3'>
                                        <span style={{color: 'rgb(17, 185, 98)', fontWeight: '800'}}>{el?.vote_average}</span>
                                        {(el?.adult === false) &&
                                            <span 
                                                style={{border: '1px solid rgba(255, 255, 255, 0.9)', padding: '1px 2px'}}>
                                                    TV-MA
                                            </span>
                                        }
                                    </div>
                                    <div className='hover-item-4'>
                                        {el?.genre_ids.map(id => (
                                            <span key={id}>{genres[id]}</span>
                                        ))}
                                    </div>
                                    <div className='hover-item-5'>
                                        <Icon icon={thumbsUp} className='circular-border' size={13} />
                                        <Icon icon={thumbsDown} className='circular-border' size={13} />
                                        <Icon icon={plus} className='circular-border' size={13} />
                                    </div>
                                    <Icon icon={arrow_down} className='bottomArrow'/>
                                </div>
                            }
                        </div>
                    ))}
                </div>
                {trailerId && <YouTube videoId={trailerId} opts={opts} />}
            {/* </div> */}
            {/* Content Posters */}

        </RowContainer>
    )
}

export default Row;

const RowContainer = styled.div`
    
    padding-left: 20px;
    margin-top: 20px;

    * {
        box-sizing: unset;
    }

    /* .posters-parent {
        overflow-x: scroll;
    } */

    .posters {
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        padding: 10px 0px 10px;
        &:hover .poster-div {
            transform: translateX(-15%);
        }
        &:hover .poster-div:hover {
            transform: scale(1.3);
            .hover-items {
                display: block;
                transition: display 2s ease-in;
            }
        }
        &:hover .poster-div:hover ~ .poster-div {
            transform: translateX(15%);
        }
    }

    .posters::-webkit-scrollbar {
        display: none;
    }

    .poster-div {
        position: relative;
        max-height: ${props => props.netflixOriginals ? '250px' : '100px'};
        margin-right: 8px;
        cursor: pointer;
        transition: transform 450ms;
        > *:not(img) {
            z-index: 2;
        }
        &:hover::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: inset 0px -200px 40px -179px rgba(0,0,0,0.75);
            z-index: 1;
        }
    }

    .hover-items {
        position: absolute;
        bottom: 0%;
        width: 95%;
        color: rgba(255, 255, 255, 0.9);
        padding-left: 4px;
        padding-right: 2px;
        display: none;
        > div {
            margin-top: 2px;
        }
    }

    .hover-item-2 {
        font-size: 0.7rem;
        color: var(--text-color);
    }

    .hover-item-3, .hover-item-4 {
        font-size: 0.5rem;
        > * {
            margin-right: 5px;
        }
    }

    .hover-item-5 {
        position: absolute;
        right: 0;
        bottom: 10%;
        display: flex;
        flex-direction: column;
        > * {
            margin-top: 5px;
        }
    }

    .circular-border > svg {
        border: 1px solid var(--text-color);
        border-radius: 50%;
        padding: 2px;
        background: rgba(0, 0, 0, 0.7);
    }

    .red > svg {
        fill: var(--main-red);
        padding-left: 3px;
    }

    .bottomArrow {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        svg {
            fill: var(--text-color);
        }
    }

    .poster {
        object-fit: contain;
        position: relative;
        /* width: 100%; */
        height: ${props => props.netflixOriginals ? '250px' : '100px'};
    }
`;