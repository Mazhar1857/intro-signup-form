import React, { useEffect, useState } from 'react';
import './signUp.css';
import errorIcon from '../assets/icon-error.svg'

function SignUp() {

    const [data, setData] = useState({
        'first-name': '',
        'last-name': '',
        'email-id': '',
        'password': ''
    })


    const [errors, setErrors] = useState({
        'first-name': true,
        'last-name': true,
        'email-id': true,
        'password': true
    });


    const handleInput = (e) => {
        const { name, value } = e.target;
        setData((preData) => {
            return { ...preData, [name]: value }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        let newError = {
            'first-name': true,
            'last-name': true,
            'email-id': true,
            'password': true
        }
        Object.entries(data).forEach(([key, value]) => {
            if (value.trim() === '') {
                newError[key] = false;
                isValid = false;
            }
            else if (key === 'email-id' && !emailValidation(value)) {
                errors[key] = false;
                isValid = false;
            }
        })
        setErrors(newError);
        if (isValid) {
            console.log('sign up successfully')
        }
    }

    const emailValidation = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    return (
        <div className='sign-up'>
            <div className='sign-up-description'>
                <h1>Learn to code by watching others</h1>
                <div>See how experianced developers slove problems in real-time watching scripted tutorials is great, but understanding how developers think is invaluable.</div>
            </div>
            <div className='sign-up-form'>
                <div>
                    <span>Try it free 7 days</span> then $20/mo. thereafter
                </div>
                <div>
                    <form onSubmit={onSubmit}>
                        <div className='input-field'>
                            <input type="text" name="first-name" id="first-name" value={data['first-name']} placeholder='First Name' onChange={handleInput} className={errors['first-name'] ? '' : 'input-outline'} />
                            <img src={errors['first-name'] ? '' : errorIcon} alt="" />
                            {!errors['first-name'] && <p> First name cannot be empty</p>}
                        </div>
                        <div className='input-field'>
                            <input type="text" name="last-name" id="last-name" value={data['last-name']} placeholder='Last Name' onChange={handleInput} className={errors['last-name'] ? '' : 'input-outline'} />
                            <img src={errors['last-name'] ? '' : errorIcon} alt="" />
                            {!errors['last-name'] && <p> Last Name cannot be empty</p>}
                        </div>
                        <div className='input-field'>
                            <input type="email" name="email-id" id="email" value={data["email-id"]} placeholder='Email Address' onChange={handleInput} className={errors['email-id'] ? '' : 'input-outline'} />
                            <img src={errors['email-id'] ? '' : errorIcon} alt="" />
                            {!errors['email-id'] && <p> Looks like this is not an email</p>}
                        </div>
                        <div className='input-field'>
                            <input type="password" name="password" id="password" value={data['password']} placeholder='Password' onChange={handleInput} className={errors['password'] ? '' : 'input-outline'} />
                            <img src={errors['password'] ? '' : errorIcon} alt="" />
                            {!errors['password'] && <p>Password cannot be empty</p>}
                        </div>
                        <button type='submit'>CLAIM YOUR FREE TRAIL</button>
                        <div>
                            By clicking the button, you are agreeing to our <span>Terms and Services</span>
                        </div>
                    </form>

                </div>
            </div >
        </div >
    )
}

export default SignUp
