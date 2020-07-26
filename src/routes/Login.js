import React, { Component } from 'react'
import styled from 'styled-components';
import LoginForm from '../components/login/LoginForm';
import LoginFooter from '../components/login/LoginFooter';
import { Link } from 'react-router-dom';
import { generateMedia } from 'styled-media-query';

class Login extends Component {

    componentDidMount() {
        window.scroll(0, 0);
    }
    
    render() {
        return (
            <LoginContainer className='login-container'>
                <div className='header-top'>
                    <Link to='/'>
                        <Logo src={require('../svg/logo.svg')} className='logo' alt='logo'/>
                    </Link>
                </div>
                <LoginForm />
                <LoginFooter />
            </LoginContainer>
        )
    }
}

export default Login;

// Media Query
const customBreakpoint = generateMedia({
    sm: '740px'
});

const Logo = styled.img`
    width: 11rem;
    position: absolute;
    top: 25%;
    left: 11%;
    transform: translate(-50%, -50%);
    margin-left: 0;
    ${customBreakpoint.lessThan('sm')`
        top: 45%;
        left: 23%;
    `}
`;

const LoginContainer = styled.div`
    .header-top {
        z-index: 1;
        position: relative;
        height: 10rem;
    }
`;