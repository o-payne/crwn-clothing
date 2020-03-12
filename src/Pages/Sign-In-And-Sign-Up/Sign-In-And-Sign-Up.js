import React from 'react'

import './Sign-In-And-Sign-Up.styles.scss'
import SignIn from '../../Components/Sign-In/sign-in'
import SignUp from '../../Components/Sign-Up/sign-up'

const SignInAndSignUpPage = () =>
(
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage;