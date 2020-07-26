import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld';
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown';
import { generateMedia } from 'styled-media-query';

class LoginFooter extends Component {
    state = {
        showLang: false
    };

    toggleLang = () => this.setState({showLang: !this.state.showLang});
    
    render() {
        return (
            <FooterContainer>
                <span style={{marginLeft: '15%'}}>Questions? Call <Link to={'tel:000-800-040-1843'}>000-800-040-1843</Link></span>
                <div className='footer-content'>
                    <ul>
                        <li><Link to='/'>Gift Card Terms</Link></li>
                    </ul>
                    <ul>
                        <li><Link to='/'>Terms Of Use</Link></li>
                    </ul>
                    <ul>
                        <li><Link to='/'>Privacy Statement</Link></li>
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
                    <span style={{paddingTop: '1px'}}>English</span>
                    <Icon icon={arrowSortedDown}></Icon>
                </div>
            </FooterContainer>
        )
    }
}

export default LoginFooter;

// Media Query
const customBreakpoint = generateMedia({
    md: '960px'
});

const FooterContainer = styled.div`
    background: rgba(0, 0, 0, 0.75);
    padding-top: 3rem;
    padding-bottom: 2rem;
    margin-top: 6rem;
    font-size: 0.9rem;
    color: #757575;
    z-index: 1;
    position: relative;

    ul {
        list-style-type: none;
        line-height: 2.5;
        /* ${customBreakpoint.lessThan('md')`
            margin-left: 30%;
        `} */
    }

    .footer-content {
        width: 70%;
        margin: 1rem auto 0;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        ${customBreakpoint.lessThan('md')`
            grid-template-columns: repeat(2, 1fr);
        `}
    }
    
    a {
        color: #757575;
        &:hover {
            text-decoration: underline;
        }
    }

    .language-btn {
        background: transparent;
        border: 0.9px solid #333;
        padding: 1rem;
        width: 8rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0.4rem;
        margin: 1rem 0 2rem 15%;
        cursor: pointer;
    }
    
    .lang-toggle {
        margin-left: 15%;
        position: absolute;
        margin-top: -3.7rem;
    }

    .lang-toggle ul {
        background: var(--main-deep-dark);
        width: 8rem;
        border: 1px solid #333;
        text-align: center;
        margin: 0;
        &:hover {
            background: #0085ff;
            color: #fff;
        }
    }
`;