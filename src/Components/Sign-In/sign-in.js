import React from 'react'

import CustomButton from '../Custom-Button/custom-button'
import FormInput from '../Form-Input/form-input'
import './sign-in.styles.scss'


import { signInWithGoogle, auth } from '../../Firebase/firebase.utils'

class SignIn extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event =>
    {
        event.preventDefault();

        const { email, password } = this.state

        try
        {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
            
        } catch (error)
        {
            console.error(error)
        }

    }

    handleChange = (event) =>
    {
        const { value, name } = event.target;

        this.setState({ [name]: value })
        
    }

    render()
    {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />

                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit' >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn;