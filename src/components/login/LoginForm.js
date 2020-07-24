import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { generateMedia } from 'styled-media-query';

const emailExp = RegExp(/^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/);

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        emailError: '',
        passError: '',
        checkbox: true
    };

    updateEmail = e => {
        this.setState({
            email: e.target.value
        });
    }

    updatePassword = e => {
        this.setState({
            password: e.target.value
        });
    }

    handleErrors = () => {
        let errorMode = false;
        const errors = {
            emailError: '',
            passwordError: ''
        }

        if(!this.state.email) {
            errorMode = true;
            errors.emailError = 'Please enter a valid email';
        } else if(!this.state.email.match(emailExp)) {
            errors.emailError = (
                <span style={{color: 'red'}}>Your email address must be valid</span>
            )
        }

        if(this.state.password.length < 4) {
            errorMode = true;
            errors.passError = 'Your password must contain between 4 and 60 characters';
        }

        this.setState({
            ...errors
        });

        return errorMode;

    }

    handleSubmit = e => {
        e.preventDefault();
        const err = this.handleErrors();
        if(!err) {
            return;
        }
    }
    
    handleCheckbox = e => {
        this.setState({
            checkbox: e.target.checked
        });
    }

    render() {
        return (
            <FormContainer>
                <div className='login-form-container'>
                    <form>
                        <h1>Sign In</h1>
                        <div className="container">
                            <input
                                type="email" 
                                className={this.state.emailError ? 'input-error input-empty' : 'input-empty'}
                                onChange={this.updateEmail}
                                value={this.state.email}
                                required/>
                            <label>Email or Phone Number</label>
                            <span style={{color: '#db7302'}}>
                                {this.state.emailError}
                            </span>
                        </div>
                        <div className="container">
                            <input 
                                type="password" 
                                className={this.state.passError ? 'input-error input-empty' : 'input-empty'}
                                onChange={this.updatePassword}
                                value={this.state.password}
                                required/>
                            <label>Password</label>
                            <span style={{color: '#db7302'}}>
                                {this.state.passError}
                            </span>
                        </div>
                        <div className="container">
                            <Button type='submit' onClick={this.handleSubmit}>Sign In</Button>
                        </div>
                        <label className='checkbox-container'>
                            Remember Me
                            <input type='checkbox' defaultChecked={this.state.checkbox} onChange={this.handleCheckbox}/>
                            <span className='checkmark'></span>
                        </label>
                        <Link to="/" className='need-help'>
                            Need Help?
                        </Link>
                        <div className='bottom-form'>
                            <img src={require('../../images/fb-logo.png')} alt='FB Logo' />
                            <Link to='/' className='fb-text'>
                                Login with Facebook
                            </Link>
                            <br />
                            <br />
                            <span style={{color: '#999'}}>New to Netflix?</span>
                            <Link to='/' className='sign-up-text'>
                                Sign up now
                            </Link>
                        </div>
                    </form>
                </div>
            </FormContainer>
        )
    }
}

export default LoginForm;

// Media Query
const customBreakpoint = generateMedia({
    sm: '740px'
});

const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 1;
    ${customBreakpoint.lessThan('sm')`
        border-bottom: 0.9px solid #999;
    `}

    .login-form-container {
        background: rgba(0, 0, 0, 0.75);
        position: relative;
        width: 28.125rem;
        height: 41.25rem;
        padding: 4rem;
        ${customBreakpoint.lessThan('sm')`
            padding: 0.6rem;
            height: 35rem;
        `}
    }

    .container {
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 1.2rem;
    }

    .input-empty {
        color: var(--text-color);
        background: #333;
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        padding: 0.9rem 1.25rem 0;
    }

    form div label {
        position: absolute;
        top: 0.5rem;
        left: 1.25rem;
        pointer-events: none;
        color: #8a8a8a;
        font-size: 1rem;
        transition: font-size 150ms ease-out;
    }

    form div {
        position: relative;
    }
    
    input:focus ~ label {
        top: 0.4375rem;
        font-size: 0.7rem;
    }

    input:focus {
        outline: none;
    }

    .input-error {
        border-bottom: 1px solid #db7302
    }

    .checkbox-container {
        color: #828282;
        margin-left: 0.75rem;
        padding-left: 1.875rem;
        font-size: 0.9rem;
        cursor: pointer;
        position: relative;
    }
    
    .checkbox-container input {
        display: none;
    }

    .checkbox-container .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        width: 1.1rem;
        height: 1.1rem;
        background: #454545;
        border-radius: 0.1rem;
    }

    .checkbox-container input:checked + .checkmark:after {
        content: '';
        position: absolute;
        height: 0.25rem;
        width: 0.625rem;
        border-left: 2px solid #000;
        border-bottom: 2px solid #000;
        top: 25%;
        left: 13%;
        transform: rotate(-45deg);
    }

    .need-help {
        color: #828282;
        margin-left: 6.6rem;
        font-size: 0.9rem;
        text-decoration: none;
        ${customBreakpoint.lessThan('sm')`
            margin-left: 13rem;
        `}
    }

    .bottom-form img {
        width: 1.5625rem;
        margin: 0.625rem 0.625rem -0.4375rem 0;
    }

    .fb-text {
        color: #828282;
        font-size: 0.9rem;
    }

    .bottom-form {
        position: absolute;
        bottom: 0;
        margin-bottom: 4rem;
    }

    .sign-up-text {
        font-size: 1.1rem;
        color: #fff;
        margin-left: 0.25rem;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const Button = styled.button`
    color: var(--text-color);
    background: rgba(229, 9, 20);
    border: none;
    outline: none;
    padding: 0.8rem 1.3rem;
    border-radius: 0.125rem;
    font-size: 1rem;
    /* text-align: center; */
    /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45); */
    /* transition: opacity .2s ease-in; */
    cursor: pointer;
    /* text-decoration: none; */
    margin: 1rem 0;
`;