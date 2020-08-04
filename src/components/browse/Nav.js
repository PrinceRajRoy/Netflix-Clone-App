import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { search } from 'react-icons-kit/fa/search';
import { bellO } from 'react-icons-kit/fa/bellO';

function Nav() {

    const [navToggle, setNavToggle] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 60) {
                setNavToggle(true);
            } else setNavToggle(false);
        });

        return () => {
            window.removeEventListener('scroll');
        };
        
    }, [])
    return (
        <NavContainer className='nav' navToggle={navToggle}>
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
                    alt={'Profile'} />
            </div>
        </NavContainer>
    )
}

export default Nav;

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

    .panels {
        display: flex;
        align-items: center;
        list-style-type: none;
        font-size: 15px;
        > * {
            padding: 0 15px;
            cursor: pointer;
        }
    }

    .icons {
        display: flex;
        align-items: center;
        /* margin-left: auto; */
        > * {
            padding: 0 15px;
            cursor: pointer;
        }
    }
`;

const Logo = styled.img`
    width: 5rem;
    object-fit: contain;
`;
