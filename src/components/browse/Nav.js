import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { search } from 'react-icons-kit/fa/search';
import { bellO } from 'react-icons-kit/fa/bellO';
import app from '../../utilities/firebase';
import { generateMedia } from 'styled-media-query';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import logout from '../../utilities/logout';

function Nav() {

    const [navToggle, setNavToggle] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const context = useContext(AuthContext);

    useEffect(() => {
        const handler = window.addEventListener('scroll', () => {
            if(window.scrollY > 60) {
                setNavToggle(true);
            } else setNavToggle(false);
        });

        return () => {
            window.removeEventListener('scroll', handler);
        };
        
    }, []);

    const handleShowProfile = () => setShowProfile(!showProfile);

    return (
        <NavContainer className='nav' navToggle={navToggle} showProfile={showProfile}>
            <ul className='panels'>
                <Link to='/'>
                    <Logo src={require('../../svg/logo.svg')} alt="logo" />
                </Link>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>My List</li>
            </ul>
            <div className="icons">
                <Icon icon={search} size={24} />
                <Icon icon={bellO} size={24} />
                <img 
                    style={{ width: '60px' }}
                    src={'https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'}
                    onClick={() => handleShowProfile()}
                    alt={'Profile'} />
            </div>
            <ul className='profile'>
                <li style={{display: 'flex'}}>
                    <img
                        src={require('../../images/kids.jpg')}
                        className='profiles'
                        alt={'Kids'}/>
                    <span style={{margin: 'auto 10px'}}>Kids</span>
                </li>
                <li>Manage Profiles</li>
                <li>Account</li>
                <li>Help Center</li>
                <li onClick={() => logout(app, context)}>Sign out of Netflix</li>
            </ul>
        </NavContainer>
    )
}

export default Nav;

const customBreakpoint = generateMedia({
    sm: '740px',
    xs: '600px'
});

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    padding: 15px 20px;
    width: 100%;
    background: ${({ navToggle }) => navToggle && 'var(--main-dark)'};
    z-index: 1;
    transition: all 0.5s ease-in;
    ${customBreakpoint.lessThan('xs')`
        padding: 15px 10px;
    `}

    .panels {
        display: flex;
        align-items: center;
        list-style-type: none;
        font-size: 15px;
        > * {
            padding: 0 15px;
            cursor: pointer;
        }
        ${customBreakpoint.lessThan('sm')`
            > * {
                padding: 0;
            }
            > li {
                display: none;
            }
        `}
    }

    .icons {
        display: flex;
        align-items: center;
        /* margin-left: auto; */
        > * {
            padding: 0 15px;
            cursor: pointer;
        }
        ${customBreakpoint.lessThan('xs')`
            > * {
                padding: 0 10px;
            }
        `}
    }

    .profile::before {
        content: '';
        position: absolute;
        top: -5.5%;
        right: 11%;
        height: 0;
        width: 0;
        border-left: 12px solid transparent;
        border-bottom: 13px solid rgba(0, 0, 0, 0.8);
        border-right: 12px solid transparent;
    }

    .profile {
        position: absolute;
        list-style-type: none;
        display: ${props => props.showProfile ? 'block' : 'none'};
        width: 215px;
        right: 15px;
        top: 75px;
        background: rgba(0, 0, 0, 0.85);
        padding: 15px 0px;
        > li {
            padding: 10px 15px;
            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
        > li:nth-last-child(4) {
            border-bottom: 1px solid rgba(229, 229, 229, 0.3);
        }
        ${customBreakpoint.lessThan('xs')`
            right: 5px;
        `}
    }

    .profiles {
        height: 30px;
        width: 30px;
    }
`;

const Logo = styled.img`
    width: 5rem;
    object-fit: contain;
`;
