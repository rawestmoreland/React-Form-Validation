import React from 'react'
import './LoginForm.css'
import LoginFormErrors from './LoginFormErrors'

const LoginForm = props => {

    return (
        <div className="signup-form-wrapper">
            <div className="signup-title">
                Create Account
            </div>
            <form onSubmit={props.handleSubmit} className="signup-form" noValidate>
                <div className="row">
                    <label>email</label>
                    <input onChange={props.handleChange} type="email" value={props.data.email} name="email" noValidate />
                    <label className="signup-form-error">{props.data.errors.emailError}</label>
                </div>
                <div className="row">
                    <label>password</label>
                    <input onChange={props.handleChange} type="password" value={props.data.password} name="password" noValidate />
                    <label className="signup-form-error">{props.data.errors.passwordError}</label>
                </div>
                <div className="row">
                    <label>re-enter password</label>
                    <input onChange={props.handleChange} type="password" value={props.data.repeatPass} name="repeatPass" noValidate />
                    <label className="signup-form-error">{props.data.errors.passMatchError}</label>
                </div>
                <small>Already have an account?</small>
                <button disabled={!props.data.valid} type="submit">Create</button>
            </form>
        </div>
    )
}

export default LoginForm