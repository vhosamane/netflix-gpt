import React, { useRef, useState } from 'react'
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { checkLoginValidation } from '../../utils/Validation/LoginValidation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { POSTER } from '../../utils/constants';

const Login = () => {
    const nav = useNavigate();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const email = useRef();
    const password = useRef();

    const togglrSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        const errorMessage = checkLoginValidation(email.current.value, password.current.value);
        setErrorMessage(errorMessage);
        if (errorMessage) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                setIsSignInForm(true);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + ' - ' + errorMessage);
            });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                nav('/browse');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + ' - ' + errorMessage);
            });
        }
    }

    return (
        <>
            <div>
                <img src={POSTER} 
                alt='logo' />
            </div>
            <div className='form-container'>
                <h1>{ isSignInForm ? 'Sign In' : 'Sign Up' }</h1>
                <form onSubmit={(e) => e.preventDefault()}>

                    {
                        !isSignInForm &&
                        <FloatingLabel controlId='floatingFullName' label='Full Name' className='mb-5'>
                            <Form.Control type='text' size="lg" placeholder="Full Name" />
                        </FloatingLabel>
                    }

                    <FloatingLabel controlId='floatingEmail' label='Enter Email' className='mb-5'>
                        <Form.Control ref={email} type='text' size="lg" placeholder="Enter Email" />
                    </FloatingLabel>

                    <FloatingLabel controlId='floatingPassword' label='Enter Password' className='mb-5'>
                        <Form.Control ref={password} type='password' size="lg" placeholder="Enter Password" />
                    </FloatingLabel>
                    { errorMessage && <p>{errorMessage}</p>}
                    <Button className='btn btn-red' onClick={handleButtonClick} type="submit">{ isSignInForm ? 'Sign In' : 'Sign Up' }</Button>

                    <p onClick={togglrSignInForm} className='mt-4'>
                        { isSignInForm ? 'New to Netflix? Sign up now.' : 'Alreday registered ? Sign In' }
                    </p>
                </form>
            </div>
        </>
    )
}

export default Login;
