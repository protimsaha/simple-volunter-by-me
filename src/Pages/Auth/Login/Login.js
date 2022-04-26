import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='w-50 mx-auto my-5 login-box'>
            <h2 className='text-center my-4'>Please Login</h2>
            <div className='google-box'>
                <img className='g-img mx-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvLtL3h1BGECrFwVuENi82xhRiMweWKe6kLG-Sck2qTUyC_jX7vEcHC2MX8vCwrR-tlk&usqp=CAU" alt="" />
                <p className='fs-5 fw-bold mx-auto'>Continue with google</p>
            </div>
            <div className='d-flex w-100 mx-4 my-3'>
                <p>Don't have an account?</p>
                <Link className='link mx-2' to='/register' role={'button'}> Please register</Link>
            </div>
        </div>
    );
};

export default Login;