import './App.css';
import React, { useState } from 'react';

const Login = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleLogin = (e) => {
        console.log(e.target.value, e.target.name);
         const { name, value } = e.target;
        e.preventDefault();
        setForm({
            ...form,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="login-form p-4">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                                name='username'
                                onChange={handleLogin}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                name='email'
                                onChange={handleLogin}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name='password'
                                placeholder="Enter your password"
                                onChange={handleLogin}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Login
                        </button>
                    </form>
                    <div className="mt-4">
                        <p>Or connect with social media:</p>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-primary mx-2">Facebook</button>
                            <button className="btn btn-outline-danger mx-2">Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Login;
