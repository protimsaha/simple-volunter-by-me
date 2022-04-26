import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/')
    }
    return (
        <form onSubmit={handleSubmit} className='w-50 mx-auto login-box my-5'>
            <h2 className='text-center my-4'>Register </h2>
            <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email' />

            </div>
            <div className="mb-3">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Confirm Password' />
            </div>
            <div className='d-flex'>
                <p>Already have an account? </p>
                <Link className='link mx-2' to='/login' role={'button'}> Please Login</Link>
            </div>
            <div className='reg-btn'>
                <input className='text-cente w-75 ' type="submit" value="Register" />
            </div>
        </form>
    );
};

export default Register;