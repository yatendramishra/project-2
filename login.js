import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ⬅️ Import useNavigate
import './login.css';

const Login = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // ⬅️ Initialize

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Name is required';
        if (!form.email) {
            errs.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            errs.email = 'Email is invalid';
        }
        if (!form.password) {
            errs.password = 'Password is required';
        } else if (form.password.length < 6) {
            errs.password = 'Password must be at least 6 characters';
        }
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Login Successful');
            navigate('/'); // ⬅️ Navigate to Home
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>

                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
