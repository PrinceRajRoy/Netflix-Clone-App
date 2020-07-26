import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../Button';
import { generateMedia } from 'styled-media-query';

export default function TabDoorPanel() {
    return (
        <TabContentContainer>
            <div className="container">
                <div className="tab-content">
                    <div>
                        <span>If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime.</span><br/>
                        <Button style={{marginTop: '2rem'}}>try it now</Button>
                    </div>
                    <img src={require('../../../../images/tab-1-pic.png')} alt={"Tab Door Panel"} />
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

    img {
        width: 31.875rem;
    }

    .para-text {
        margin-bottom: 2rem;
    }

    .container {
        margin: 0 10%;
    }

    .tab-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        align-items: center;
        font-size: 2rem;
        padding: 2.5rem;
        ${customBreakpoint.lessThan('xl')`
            grid-template-columns: 1fr;
            text-align: center;
            padding-left: 0;
            padding-right: 0;
            img { 
                margin: auto;
            }
        `}
    }
`;
