import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import './Login.css';
import { auth, provider } from '../../api/firebase';
import { signIn } from '../../features/User/UserSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;
        if(!email || !(/^[a-zA-Z0-9-._%+]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email))) {
            setEmail('');
            emailRef.current.placeholder = 'Invalid Email ID';
            emailRef.current.style.animation = "shaker 1s ease forwards";
            isValid =  false;
        }

        if(!password || password.length < 6) {
            setPassword('');
            passwordRef.current.placeholder = '6 characters Required';
            passwordRef.current.style.animation = "shaker 1s ease forwards";
            isValid =  false;
        }

        return isValid;
    };

    const handleLogin = () => {
        if(!validateForm()) {
            setTimeout(() => {
                emailRef.current.style.animation = '';
                emailRef.current.placeholder = 'Enter your email';
                passwordRef.current.placeholder = 'Enter your password';
                passwordRef.current.style.animation = "";
            },1000);
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            let user = {
                username: result.user.displayName,
                email: result.user.email,
                userId: result.user.uid
            };
            dispatch(signIn(user));
            navigate('/');
        })
        .catch(err => {
            alert(err.message);
        });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            let user = {
                username: result.user.displayName,
                email: result.user.email,
                userId: result.user.uid
            };
            dispatch(signIn(user));
            navigate('/');
        })
        .catch(err => {
            alert(err.message);
        });
    }

    return (
        <div className='app__login'>
            <div className="app__login-title">
                <h3>Login</h3>
            </div>
            <div className="app__login-input">
                <label htmlFor='email'>Email ID</label>
                <input 
                    name='email' 
                    type='email' 
                    placeholder='Enter your email id' 
                    ref={emailRef} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="app__login-input">
                <label htmlFor='password'>Password</label>
                <input 
                    name='password' 
                    type='password' 
                    placeholder='Enter your password' 
                    ref={passwordRef}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <div className="app__login-btns">
                <button onClick={handleLogin}>Login</button>
                <div className="app__login-btn" onClick={handleGoogleSignIn}>
                    <FcGoogle />
                    <span>Sign in with Google</span>
                </div>
            </div>
            <div className="app__login-footer">
                <span>New User? </span>
                <Link to='/register'>Register here</Link>
            </div>
        </div>
    );
};

export default Login;