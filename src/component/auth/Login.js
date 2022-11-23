
import React, { useRef, useState, } from 'react';
import { Alert } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            // shawn@test-email.com shawnPass
            setError('')
            setLoading(true)
            const res = await axios.get(`https://hr.toplearnr.com/recruitment/Api/endpoint/?email=${emailRef.current.value}&password=${passwordRef.current.value}`)
            if (res.data.code == 200) {
                setError('')
                console.log(emailRef.current.value, passwordRef.current.value);
                navigate('/dashboard')
            } else {
                setError('Failed to Log In')
            }
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    return (
        <div className='auth'>
            <div className="auth-wrapper">
                {error && <Alert variant='danger'>{error}</Alert>}
                <form onSubmit={handleSubmit}>
                    <h3>Log In</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input ref={emailRef} type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input ref={passwordRef} type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <button disabled={loading} type="submit" className="btn btn-primary btn-block">Log In</button>
                    <p className="forgot-password text-right">
                        need an account <Link to='/'>sign up?</Link>
                    </p>
                    < p className="forgot-password text-right" >
                        Forgot <Link Link to="/forgot-password" > password ?</Link >
                    </p >
                </form>
            </div>
        </div>
    )
}


export default Login


