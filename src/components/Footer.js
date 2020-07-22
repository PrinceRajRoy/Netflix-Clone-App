import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld';
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown';
import { generateMedia } from 'styled-media-query';

class Footer extends Component {
    state = {
        showLang: false
    };

    toggleLang = () => this.setState({showLang: !this.state.showLang});
    
    render() {
        return (
            <FooterContainer>
                <span style={{marginLeft: '15%', fontSize: '1.125rem'}}>Questions? Call <Link>1-877-742-1335</Link></span>
                <div className='footer-content'>
                    <ul>
                        <li><Link>FAQ</Link></li>
                        <li><Link>Investor Relations</Link></li>
                        <li><Link>Ways to Watch</Link></li>
                        <li><Link>Corporate Information</Link></li>
                        <li><Link>Netflix Originals</Link></li>
                    </ul>
                    <ul>
                        <li><Link>Help Center</Link></li>
                        <li><Link>Jobs</Link></li>
                        <li><Link>Terms of Use</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                    <ul>
                        <li><Link>Account</Link></li>
                        <li><Link>Redeem Gift Card</Link></li>
                        <li><Link>Speed Test</Link></li>
                        <li><Link>Privacy</Link></li>
                    </ul>
                    <ul>
                        <li><Link>Media Center</Link></li>
                        <li><Link>Buy Gift Card</Link></li>
                        <li><Link>Cookie Preferences</Link></li>
                        <li><Link>Legal Notices</Link></li>
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
                <span style={{marginLeft: '15%', fontSize: '0.9rem'}}>Netflix India</span>
            </FooterContainer>
        )
    }
}

export default Footer;

// Media Query
const customBreakpoint = generateMedia({
    md: '960px'
});

const FooterContainer = styled.div`
    background: var(--main-deep-dark);
    padding-top: 10rem;
    padding-bottom: 1rem;
    color: var(--main-grey);
        ${customBreakpoint.lessThan('md')`
            padding-left: 10%;
        `}

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
        font-size: 0.9rem;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        ${customBreakpoint.lessThan('md')`
            grid-template-columns: repeat(2, 1fr);
        `}
    }
    
    a {
        color: var(--main-grey);
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
        margin-top: -4.125rem;
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