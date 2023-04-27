import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Facebook, Github, Google, Twitter } from 'react-bootstrap-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpwithemailFirebase } from '../../Services/Actions/User.action';

function SignUp() {

    const [user, setUser] = useState({
        email: '',
        name: '',
        password: '',
        cpassword: ''
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
            dispatch(SignUpwithemailFirebase(user.email, user.password))
        } else {
            navigate('/signup')
        }

        setUser({
            email: '',
            name: '',
            password: '',
            cpassword: ''
        })
    }

    if (users !== null) {
        navigate('/dashboard')
    } else {
        return (
            <div className="form-wrapper position-fixed top-0 vw-100 vh-100 d-flex align-items-center">
                <div className="container">
                    <Form className='w-50 mx-auto  p-3 rounded bg-light' onSubmit={(e) => { handleSubmit(e) }}>
                        <h5 className='text-primary text-center'>Create New Account</h5>
                        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' value={user.email} onChange={(e) => { handleChange(e) }} required />
                            {
                                error == "auth/email-already-in-use" ? <span className='error text-danger'>Email already exists</span> : ''
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' value={user.password} onChange={(e) => { handleChange(e) }} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" name='name' value={user.name} onChange={(e) => { handleChange(e) }} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name='cpassword' value={user.cpassword} onChange={(e) => { handleChange(e) }} required />
                            {
                                user.password !== user.cpassword ? <span className='error text-danger'>password must same..</span> : ''
                            }
                        </Form.Group>

                        <Button type="submit" className='btn bg-primary w-100 btn btn-success rounded-1 mt-2'>
                            Submit
                        </Button>
                    </Form>
                    <div className="signin-other text-center">
                        <h5 className='my-4 title'>Sign In with</h5>
                        <div>
                                    <Button className='mx-1 rounded-1 bg-success border-0 btn-icon' ><Google /></Button>
                                    <Button variant='primary' className='mx-1 rounded-1 border-0 btn-icon'><Facebook /></Button>
                                    <Button className='mx-1 rounded-1 bg-info border-0 btn-icon'><Twitter /></Button>
                                </div>
                    </div>
                    <p className='text-dark mt-4 mb-0 text-center'>Already have an account ? <NavLink to='/'>log in</NavLink></p>
                </div>
            </div>
        )
    }
}

export default SignUp
