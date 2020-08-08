import React, { Component } from 'react';
import logo from '../../svg/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Button';

import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right'
import { generateMedia } from 'styled-media-query';
import { AuthContext } from '../../contexts/AuthContext';
import app from '../../utilities/firebase';
import logout from '../../utilities/logout';

class Header extends Component {

    static contextType = AuthContext;

    render() {
        return (
            <HeaderComponent className="Header">
                <div className="header-top">
                    <Link to='/'>
                        <Logo src={logo} alt="logo" />
                    </Link>
                    <NavLink className="signIn-btn"
                        to={this.context.loggedUser ? '/' : 'login'}
                        onClick={() => logout(app, this.context)}>
                            {this.context.loggedUser ? 'Sign Out' : 'Sign In'}
                    </NavLink>
                </div>
                <div className="header-content">
                    <MainTitle>See what's next.</MainTitle>
                    <MainSubtitle>WATCH ANYWHERE. CANCEL ANYTIME.</MainSubtitle>
                    <Link to={this.context.loggedUser ? '/browse' : '/plan'}>
                        <Button className='try-it-now' primary>
                            {this.context.loggedUser ? 'Browse' : 'Try it Now'}
                            <Icon size={37} icon={ic_keyboard_arrow_right}/>
                        </Button>
                    </Link>
                </div>
            </HeaderComponent>
        )
    }
}

export default Header;

// Media Query
const customBreakpoint = generateMedia({
    xl: '1350px',
    lg: '1150px',
    md: '960px',
    sm: '740px',
    xs: '600px'
});

// Logo
const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${customBreakpoint.lessThan('md')`
        left: 20%;
    `}
    ${customBreakpoint.lessThan('xs')`
        height: 1.8rem;
        left: 80px;
    `}
`;

// Styled Header Component
const HeaderComponent = styled.div`

    .signIn-btn {
        position: absolute;
        right: 0;
        margin: 1.125rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        font-size: 1rem;
        border-radius: 0.1875rem;
        background: var(--main-red);
        cursor: pointer;
        font-weight: 400;
        line-height: normal;
        translate: transform(-50%, -50%);
        transition: background 0.2s ease-in;
        &:hover {
            background: var(--main-hover-red);
        }
        ${customBreakpoint.lessThan('md')`
            margin-top: 1.25rem;
            right: 5%;
        `}
        ${customBreakpoint.lessThan('xs')`
            right: 20px;
        `}
    }

    .header-top {
        position: relative;
        height: 10rem;
        z-index: 1;
    }

    .header-content {
        width: 65%;
        position: relative;
        margin: 4.5rem auto 0;
        display: flex;
        /* justify-content: center; */
        /* align-content: center; */
        align-items: center;
        flex-direction: column;
        z-index: 1;
        text-align: center;
        ${customBreakpoint.lessThan('sm')`
            display: grid;
            grid-template-rows: repeat(1, 3fr);
            margin-top: 8rem;
        `}
    }

    svg {
        vertical-align: bottom;
        margin-left: 1.5rem;
        ${customBreakpoint.lessThan('sm')`
            display: none !important;
        `}
    }

    .try-it-now {
        margin: 0;
        ${customBreakpoint.lessThan('xl')`
            font-size: 1.5rem;
        `}
        ${customBreakpoint.lessThan('md')`
            font-size: 1.3rem;
        `}
        ${customBreakpoint.lessThan('xs')`
            font-size: 0.8rem;
            padding: 1rem;
        `}
    }

`;

const MainTitle = styled.h1`
    margin: 0 0 1.2rem;
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.1em;
    ${customBreakpoint.lessThan('md')`
        font-size: 2.6rem;
    `}
    ${customBreakpoint.lessThan('xs')`
        font-size: 1.6rem;
    `}
`;

const MainSubtitle = styled.h2`
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 1.25em;
    margin: 0 0 1.875rem;
    text-transform: uppercase;
    ${customBreakpoint.lessThan('md')`
        font-size: 1.4rem;
    `}
    ${customBreakpoint.lessThan('xs')`
        font-size: 1rem;
    `}
`;