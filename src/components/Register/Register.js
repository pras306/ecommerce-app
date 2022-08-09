import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import './Register.css';
import { auth } from '../../api/firebase';
import { signIn } from '../../features/User/UserSlice';

const Register = () => {
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

    const handleRegister = () => {
        if(!validateForm()) {
            setTimeout(() => {
                emailRef.current.style.animation = '';
                emailRef.current.placeholder = 'Enter your email';
                passwordRef.current.placeholder = 'Enter your password';
                passwordRef.current.style.animation = "";
            },1000);
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            let user = {
                username: result.user.displayName,
                email: result.user.email,
                userId: result.user.uid
            };

            dispatch(signIn(user));
            navigate('/');
        })
        .catch(error => {
            alert(error.message);
        });
    };

    return (
        <div className='app__register'>
            <div className="app__register-title">
                <h3>Register</h3>
            </div>
            <div className="app__register-input">
                <label htmlFor='email'>Email ID</label>
                <input name='email' type={'email'} placeholder='Enter your email ID' value={email} onChange={(e) => setEmail(e.target.value)} ref={emailRef} />
            </div>
            <div className="app__register-input">
                <label htmlFor='password'>Password</label>
                <input name='password' type={'password'} placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} ref={passwordRef} />
            </div>
            <div className="app__register-btns">
                <button onClick={handleRegister}>Register</button>
            </div>
            <div className="app__register-footer">
                <span>Already a user? </span>
                <Link to={'/login'}>Sign In</Link>
            </div>
        </div>
    );
};

export default Register;