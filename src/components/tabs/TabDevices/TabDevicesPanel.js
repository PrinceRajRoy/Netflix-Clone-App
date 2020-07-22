import React from 'react'
import { Button } from '../../Button'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query';

export default function TabDevicesPanel() {
    return (
        <TabContentContainer>
            <div className="container">
                <div className="tab-content">
                    <span>Watch TV shows and movies anytime, anywhere ––personalized for you.</span>
                    <Button className="try-btn">try it now</Button>
                </div>
                <div className="tab-bottom-content">
                    <div>
                        <img src={require('../../../images/tab-tv.png')} alt={'Watch On Television'} style={{width: '18.75rem'}}/>
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div>
                        <img src={require('../../../images/tab-tablet.png')} alt={'Watch On Tablet'} style={{width: '18.75rem', paddingTop: '0.625rem'}}/>
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div>
                        <img src={require('../../../images/tab-macbook.png')} alt={'Watch On Mac'} style={{width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem'}}/>
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                </div>
            </div>
        </TabContentContainer>
    )
}

// Media Query
const customBreakpoint = generateMedia({
    xl: '1350px',
    md: '960px'
});

const TabContentContainer = styled.div`
    background: var(--main-deep-dark);

    .container {
        margin: 0 15%;
    }

    .tab-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
        ${customBreakpoint.lessThan('md')`
            grid-template-columns: 1fr;
            text-align: center;
            row-gap: 1.5rem;
        `}
    }

    span {
        grid-column: 2 / 9;
        font-size: 1.5rem;
        ${customBreakpoint.lessThan('md')`
            grid-column: 1 / -1;
        `}
    }

    .try-btn {
        grid-column: 10 / 12;
        margin: 0 1.25rem 1.25rem;
        ${customBreakpoint.lessThan('md')`
            grid-column: 1 / -1;
            margin: 0 30%;
        `}
    }

    .tab-bottom-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem;
        ${customBreakpoint.lessThan('md')`
            grid-template-columns: 1fr;
        `}
    }

    h3 {
        margin: 0.5rem 0;
    }

    p {
        color: var(--main-grey);
    }
`;