
import React, { useRef, useState, } from 'react';
import { Alert } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './login.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const Login = () => {
    const [isVisible, setIsVisible] = useState(false);
    const email = useRef();
    const password = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            // shawn@test-email.com shawnPass
            setError('')
            setLoading(true)
            const res = await axios.get(`https://hr.toplearnr.com/recruitment/Api/endpoint/?email=${email.current.value}&password=${password.current.value}`)
            if (res.data.code == 200) {
                setError('')
                console.log(email.current.value, password.current.value);
                navigate('/dashboard')
            } else {
                setError('Failed to Log In')
            }
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    const passwordVisibleHandler = () => {
        setIsVisible(p => !p)
    }

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <div className="loginLeftWrapper">
                        <h4 className="loginLogo">Toplearnr</h4>
                        <form className="loginBox" onSubmit={handleSubmit}>
                            {error && <Alert variant='danger'>{error}</Alert>}
                            <input type='email' required placeholder='Email Address' ref={email} className='loginInput inputText' />

                            <div className="loginPasswordVisibility">
                                <input type={!isVisible ? "password" : "text"} required placeholder='Password'
                                    ref={password} minLength="6" className='loginInput passwordInput inputText' />
                                {isVisible ? <VisibilityIcon className='visibilityIcon visibleOn' onClick={passwordVisibleHandler} /> : <VisibilityOffIcon className='visibilityIcon' onClick={passwordVisibleHandler} />}

                            </div>
                            <button disabled={loading} className="loginButton" >Log In</button>
                            <div className="loginExtraButtons">
                                <span className="loginForgot">forgot password?</span>
                                <Link to="/"><span className="loginForgot">forgot password?</span></Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="loginRight">

                    <img src='assets/login.svg' alt="" className="loginRightImg" />
                    <span className="loginDesc"> connect with friends and world around you on SocieX.</span>
                </div>

            </div>
        </div>
    )
}


export default Login



// <form onSubmit={handleSubmit}>
//                     <h3>Log In</h3>
//                     <div className="form-group">
//                         <label>Email address</label>
//                         <input ref={emailRef} type="email" className="form-control" placeholder="Enter email" />
//                     </div>

//                     <div className="form-group">
//                         <label>Password</label>
//                         <input ref={passwordRef} type="password" className="form-control" placeholder="Enter password" />
//                     </div>
//                     <button disabled={loading} type="submit" className="btn btn-primary btn-block">Log In</button>
//                     <p className="forgot-password text-right">
//                         need an account <Link to='/'>sign up?</Link>
//                     </p>
//                     < p className="forgot-password text-right" >
//                         Forgot <Link Link to="/forgot-password" > password ?</Link >
//                     </p >
//                 </form>