// import { Alert } from 'bootstrap';
import React, { useRef, useState, } from 'react';
import { Alert } from "react-bootstrap"
import { Link, } from 'react-router-dom'


const ForgotPassword = () => {
    const emailRef = useRef();
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage("")
            setError("")
            setLoading(true)

            // API INTREGATION TO HANDLE THIS FORGOT PASSWORD AUTH 

            setMessage("Check your inbox for further instructions")
        } catch {
            setError('Failed to reset Password')
        }
        setLoading(false)
    }

    return (
        <div className='auth'>
            <div className="auth-wrapper">
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant='success'>{message}</Alert>}
                <form onSubmit={handleSubmit}>
                    <h3>Forgot Password</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input ref={emailRef} type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <button disabled={loading} type="submit" className="btn btn-primary btn-block">Reset Password</button>
                    < p className="forgot-password text-right" >
                        <Link to="/" > Login</Link >
                    </p >
                    <p className="forgot-password text-right">
                        need an account <Link to='/'>sign up?</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}


export default ForgotPassword


