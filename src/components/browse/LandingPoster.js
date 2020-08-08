import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { baseAPI, BASE_IMAGE_URL } from '../../utilities/baseAPI';
import requests from '../../utilities/request';
import { generateMedia } from 'styled-media-query';

function LandingPoster() {

    const [content, setContent] = useState({});

    useEffect(() => {

        async function getData() {
            const request = await baseAPI.get(requests.getActionMovies);
            setContent(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        }
        getData();

    }, []);

    const minimizeDesc = (desc, n) => desc?.length > n ? desc.substr(0, n-1) + '...' : desc;
    
    return (
        <LandingPosterContainer poster={ content?.backdrop_path || content?.poster_path }>
            <div className="landing-contents">
                <h1 className='landing-title'>
                    {content?.title || content?.name || content?.original_name}
                </h1>
                <div className="landing-btns">
                    <button className="landing-btn">Play</button>
                    <button className="landing-btn">My List</button>
                </div>
                <h1 className="landing-desc">
                    {minimizeDesc(content?.overview, 150)}
                </h1>
            </div>
            <div className="landing-bottom"></div>
        </LandingPosterContainer>
    )
}

export default LandingPoster;

const customBreakpoint = generateMedia({
    xl: '1350px',
    lg: '1150px',
    md: '960px',
    sm: '740px',
    xs: '600px'
});

const LandingPosterContainer = styled.header`
    background: url(${props => props.poster ? BASE_IMAGE_URL + props.poster : ''});
    background-size: cover;
    object-fit: contain;
    height: 448px;
    background-position: center center;

    * {
        box-sizing: initial;
    }

    .landing-title {
        font-size: 3rem;
        font-weight: 800;
        padding-bottom: 0.3rem;
        ${customBreakpoint.lessThan('lg')`
            font-size: 2.5rem;
        `}
        ${customBreakpoint.lessThan('md')`
            font-size: 2rem;
        `}
        ${customBreakpoint.lessThan('sm')`
            font-size: 1.5rem;
        `}
    }
    
    .landing-contents {
        margin-left: 30px;
        padding-top: 140px;
        height: 190px;
        ${customBreakpoint.lessThan('md')`
            padding-top: 150px;
            width: 90%;
            margin: 0 auto;
        `}
    }

    .landing-desc {
        line-height: 1.3;
        padding-top: 1rem;
        font-size: 0.8rem;
        max-width: 360px;
        height: 80px;
    }

    .landing-btn {
        color: var(--main-text);
        cursor: pointer;
        border: none;
        outline: none;
        font-weight: 700;
        border-radius: 0.2vw;
        padding: 0.5rem 2rem;
        margin-right: 1rem;
        background-color: rgba(0, 0, 0, 0.5);
        &:hover {
            color: var(--main-dark);
            background-color: var(--text-color);
            transition: all 0.2s;
        }
    }

    .landing-bottom {
        height: 7.4rem;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(37, 37, 37, 0.61),
            var(--main-dark)
        );
    }
`;
