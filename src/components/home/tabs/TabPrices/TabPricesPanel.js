import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../Button';
import {cross} from 'react-icons-kit/icomoon/cross';
import {checkmark} from 'react-icons-kit/icomoon/checkmark';
import Icon from 'react-icons-kit';
import { generateMedia } from 'styled-media-query';

export default function TabPricesPanel() {
    return (
        <TabContentContainer>
            <div className='container'>
                <div className='tab-content'>
                    <span>Choose one plan and watch everything on Netflix</span>
                    <Button className='try-btn'>try it now</Button>
                </div>
                <div className='tab-bottom-content'>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly Price</td>
                                <td>₹499</td>
                                <td>₹649</td>
                                <td>₹799</td>
                            </tr>
                            <tr>
                                <td>HD Available</td>
                                <td><Icon icon={cross} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Ultra HD Available</td>
                                <td><Icon icon={cross} size={10}/></td>
                                <td><Icon icon={cross} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Screens you can watch on at the same time</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Watch on your laptop, TV, phone and tablet</td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Unlimited movies and TV shows</td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Cancel anytime</td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                        </tbody>
                    </table>
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
        padding-bottom: 1%;
    }

    .tab-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        padding: 3rem 0 0;
        ${customBreakpoint.lessThan('md')`
            grid-template-columns: 1fr;
            text-align: center;
            row-gap: 1.5rem;
        `}
    }

    span {
        grid-column: 3 / 9;
        font-size: 1.5rem;
        ${customBreakpoint.lessThan('md')`
            grid-column: 1 / -1;
        `}
    }

    .try-btn {
        grid-column: 9 / 12;
        margin-left: 3rem;
        margin-right: 5.1rem;
        ${customBreakpoint.lessThan('md')`
            grid-column: 1 / -1;
            margin: 0 30%;
        `}
    }

    .tab-bottom-content {
        margin: 2rem auto;
    }

    table {
        width: 100%;
        margin-top: 2rem;
        border-collapse: collapse;
    }

    table thead th {
        text-transform: uppercase;
        padding: 0.8rem;
    }

    table tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }

    table tbody tr td {
        color: var(--main-grey);
        padding: 0.8rem 1.2rem;
        text-align: center;
    }

    table tbody tr td:first-child {
        text-align: left;
    }

    table tbody tr:nth-child(2n) {
        background: #222;
    }
`;