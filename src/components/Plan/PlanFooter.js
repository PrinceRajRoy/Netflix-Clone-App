import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld';
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown';
import { generateMedia } from 'styled-media-query';

class PlanFooter extends Component {
    state = {
        showLang: false
    };

    toggleLang = () => this.setState({showLang: !this.state.showLang});

    render() {
        return (
            <PlanFooterContainer>
                <div className='inner-container'>
                    <span>Questions? Call <Link to='tel:000-800-040-1843'>000-800-040-1843</Link></span>
                    <div className='footer-content'>
                        <ul>
                            <li><Link to='/plan'>FAQ</Link></li>
                            <li><Link to='/plan'>Cookie Preferences</Link></li>
                        </ul>
                        <ul>
                            <li><Link to='/plan'>Help Center</Link></li>
                            <li><Link to='/plan'>Corporate Information</Link></li>
                        </ul>
                        <ul>
                            <li><Link to='/plan'>Terms Of Use</Link></li>
                        </ul>
                        <ul>
                            <li><Link to='/plan'>Privacy</Link></li>
                        </ul>
                    </div>
                    {this.state.showLang && (
                    <div className='lang-toggle'>
                        <ul>
                            <li>English</li>
                        </ul>
                        <ul>
                            <li>Hindi</li>
                        </ul>
                    </div>
                    )}
                    <div className="language-btn" onClick={this.toggleLang}>
                        <Icon icon={iosWorld} size={20}></Icon>
                        <span style={{paddingTop: '1px', paddingLeft: '10px'}}>English</span>
                        <Icon icon={arrowSortedDown} className='bottomArrow'></Icon>
                    </div>
                </div>
            </PlanFooterContainer>
        )
    }
}

export default PlanFooter;

const customBreakpoint = generateMedia({
    md: '960px',
    sm: '740px',
    xs: '600px'
});

const PlanFooterContainer = styled.div`
    color: #757575;
    background: #f3f3f3;
    border-top: 1px solid #e5e5e5;
    padding-top: 30px;
    padding-bottom: 1px;

    .inner-container {
        width: 90%;
        margin: auto;
    }

    a {
        color: #757575;
        &:hover {
            text-decoration: underline;
        }
    }

    .footer-content {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 75%;
        margin-top: 1rem;
        ${customBreakpoint.lessThan('md')`
            width: 100%;
        `}
        ${customBreakpoint.lessThan('xs')`
            grid-template-columns: repeat(2, 1fr);
        `}
    }

    ul {
        list-style: none;
        font-size: 13px;
        line-height: 2.5;
    }
    
    .lang-toggle {
        position: absolute;
        margin-top: -3rem;
    }

    .lang-toggle ul {
        background: #fff;
        width: 13rem;
        border: 1px solid #333;
        text-align: center;
        margin: 0;
    }

    .language-btn {
        position: relative;
        margin-bottom: 2rem;
        margin-top: 1rem;
        border: 0.9px solid #a6a6a6;
        border-radius: 1px;
        background: #fff;
        padding: 0.8rem;
        width: 13rem;
        grid-gap: 0.4rem;
    }
    
    /* .language-btn:active {
        border: 2px solid #333;
    } */

    .bottomArrow {
        position: absolute;
        right: 5px;
    }
    
    .language-btn svg {
        fill: var(--main-dark);
    }
`;