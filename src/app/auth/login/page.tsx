"use client"
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        // <div>
        //     <h2>Login</h2>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label htmlFor="email">Email:</label>
        //             <input
        //                 type="email"
        //                 id="email"
        //                 value={email}
        //                 onChange={(e) => setEmail(e.target.value)}
        //                 required
        //             />
        //         </div>
        //         <div>
        //             <label htmlFor="password">Password:</label>
        //             <input
        //                 type="password"
        //                 id="password"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //                 required
        //             />
        //         </div>
        //         <button type="submit">Login</button>
        //     </form>
        // </div>
        <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="login-form-container">
                            <div className="mb-4">
                                <a className="logo d-inline-block" href="index.html">
                                    <img alt="#" src="../assets/images/logo/1.png" width="250"/>
                                </a>
                            </div>
                            <div className="form_container">

                                <form className="app-form rounded-control">
                                    <div className="mb-3 text-center">
                                        <h3 className="text-primary-dark">Login to your Account</h3>
                                        <p className="f-s-12 text-secondary">Get started with our app, just create an
                                            account and enjoy the experience.</p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input className="form-control" type="email"/>
                                        <div className="form-text text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input className="form-control" type="password"/>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input className="form-check-input" id="formCheck1" type="checkbox"/>
                                        <label className="form-check-label" htmlFor="formCheck1">remember me</label>
                                    </div>
                                    <div>
                                        <a className="btn btn-light-primary w-100" href="index.html"
                                           role="button">Submit</a>
                                    </div>
                                    <div className="app-divider-v justify-content-center">
                                        <p>OR</p>
                                    </div>
                                    <div className="mb-3">
                                        <div className="text-center">
                                            <button className="btn btn-light-primary icon-btn b-r-5 m-1" type="button"><i
                                                    className="ti ti-brand-facebook "></i></button>
                                            <button className="btn btn-light-danger icon-btn b-r-5 m-1" type="button"><i
                                                    className="ti ti-brand-google "></i></button>
                                            <button className="btn btn-light-dark icon-btn b-r-5 m-1" type="button"><i
                                                    className="ti ti-brand-github "></i></button>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <a className="text-secondary text-decoration-underline"
                                           href="terms_condition.html">Terms of use &amp;
                                            Conditions</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default LoginPage;