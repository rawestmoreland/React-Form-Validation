import React from 'react'
import './LoginForm.css'
import LoginFormErrors from './LoginFormErrors'

const LoginForm = props => {
    return (
        <div className="signup-form-wrapper">
            <div>

            </div>
            <form onSubmit={props.handleSubmit} className="signup-form">
                <label>email</label>
                <input onChange={props.handleChange} type="email" value={props.data.email} name="email" />
                <label>password</label>
                <input onChange={props.handleChange} type="password" value={props.data.password} name="password" />
                <label>re-enter password</label>
                <input onChange={props.handleChange} type="password" value={props.data.repeatPass} name="repeatPass" />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default LoginForm