/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css'

import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    });

    const handleChange = e => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = e => {
        e.preventDefault();
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className='m-auto'>
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={loginImg} alt="" />
                            </div>

                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>
                                <h2>Login</h2>

                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            required
                                            id="email" onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            required id="password" onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <button className="btn secondary__btn auth__btn" type="submit">Login </button>
                                </Form>
                                <p>Belum punya akun? <Link to='/register'>Daftar</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Login;