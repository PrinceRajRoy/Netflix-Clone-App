import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import PlanFooter from'../components/Plan/PlanFooter';

class Plan extends Component {

    componentDidMount() {
        window.scroll(0, 0);
    }
    
    render() {
        return (
            <PlanContainer>
                <div className="header-top">
                    <Link to='/'>
                        <Logo src={require('../svg/logo.svg')} alt='logo' />
                    </Link>
                    <NavLink to='/login' className='sign-in-btn'>
                        Sign In
                    </NavLink>
                </div>
                <div className="body-content">
                    <img 
                        src={require('../images/Checkmark.png')} 
                        className='checkmark-icon'
                        alt='Checkmark Icon' />
                    <p style={{fontSize: '0.8125rem'}}>STEP <b>1</b> OF <b>3</b></p>
                    <h2>Choose Your Plan</h2>
                    <ul className='feature-list'>
                        <li className='feature-item'>No commitments, cancel anytime.</li>
                        <li className='feature-item'>Everything on Netflix for one low price.</li>
                        <li className='feature-item'>No ads and no extra fees. Ever.</li>
                    </ul>
                    <Button className='plans-btn'>see the plans</Button>
                </div>
                <PlanFooter />
            </PlanContainer>
        )
    }
}

export default Plan;

const PlanContainer = styled.div`
    
    background: #fff;
    min-height: 100vh;

    .header-top {
        height: 5.625rem;
        border-bottom: 1px solid #e6e6e6;
        position: relative;
    }

    .body-content {
        display: grid;
        justify-content: center;
        color: var(--main-dark);
        width: 65%;
        margin: 0 auto 11rem;
        text-align: center;
        align-content: center;
        z-index: 1;
    }

    .checkmark-icon {
        width: 3rem;
        margin: 8.25rem auto 1.5rem;
    }

    p, h2 {
        margin: unset;
    }

    .feature-list {
        text-align: left;
        list-style: none;
        margin: 0rem auto 3rem;
        padding-left: 1.5625rem;
        width: 95%;
        font-size: 17px;
        /* padding: auto; */
    }

    .feature-item {
        margin-top: 1.5rem;
        margin-left: 1.5rem;
        text-indent: -1.15rem;
        line-height: 1.2rem;
    }

    .feature-item::before {
        color: transparent;
        display: inline-block;
        position: relative;
        height: 0.3rem;
        width: 1rem;
        content: '';
        left: -0.9375rem;
        bottom: 0.1875rem;
        border-bottom: 2px solid #e50914;
        border-left: 2px solid #e50914;
        transform: rotate(-45deg);
    }

    .sign-in-btn {
        right: 0;
        position: absolute;
        cursor: pointer;
        font-size: 1.25rem;
        color: var(--main-dark);
        font-weight: 700;
        margin: 1.5625rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const Logo = styled.img`
    width: 10.5rem;
    height: 3.5rem;
    position: absolute;
    top: 49%;
    left: 8%;
    transform: translate(-50%, -50%);
`;