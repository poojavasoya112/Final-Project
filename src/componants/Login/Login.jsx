import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { Facebook, Github, Google, Twitter } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { SignInWithGoogleFirebase, SignInwithemailFirebase } from '../../Services/Actions/User.action';

function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    const { error } = useSelector((state) => state.UserReducer);
    const { users } = useSelector((state) => state.UserReducer);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user, [name]: value
        })
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user.email !== '' && user.password !== '') {
            dispatch(SignInwithemailFirebase(user.email, user.password))
        } else {
            navigate('/')
        }
    }

    if (users !== null) {
        navigate('/dashboard')
    }else{
        return (
            <>
                <div className="form-wrapper position-fixed top-0 vw-100 vh-100 d-flex align-items-center">
                    <div className="container">
                        <Form className='w-50 mx-auto border shadow-sm p-3 rounded bg-light' onSubmit={(e) => { handleSubmit(e) }}>
                            <h3 className='text-center'>Log in..</h3>
                            <Form.Group className="mb-3 mt-4 " controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' value={user.email} onChange={(e) => { handleChange(e) }} required/>
                                
                                    {
                                        error == "auth/user-not-found" ? <span className='text-danger error'>user not found..</span> : ''
                                    }
                                
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' value={user.password} onChange={(e) => { handleChange(e) }} required/>
                                {
                                    error == "auth/wrong-password" ? <span className='text-danger error'>wrong password..</span> : ''
                                }
                            </Form.Group>
                            <Button className='btn bg-primary mx-auto d-inline-block' type="submit">
                                Submit
                            </Button>
                            <div className="signin-other text-center">
                                <h5 className='my-4 title'>Sign In with</h5>
                                <div>
                                    <Button className='mx-1 rounded-1 bg-success border-0 btn-icon' ><Google /></Button>
                                    <Button variant='primary' className='mx-1 rounded-1 border-0 btn-icon'><Facebook /></Button>
                                    <Button className='mx-1 rounded-1 bg-info border-0 btn-icon'><Twitter /></Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;