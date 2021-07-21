import React, { useState } from "react";
import logo from "../../../images/logo.png";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { register } from "../../../actions/auth";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });
    const dispatch = useDispatch();
    const history = useHistory();
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(register(formData, history));
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="register">
            <div className="container auth-container">
                <div className="box">
                    <header className="auth__header">
                        <img src={logo} className="auth__logo" alt="Logo" />
                    </header>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form__input"
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="name" className="form__label">
                                Name
                            </label>
                        </div>
                        <div className="form-control">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form__input"
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email" className="form__label">
                                Email
                            </label>
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="form__input"
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="username" className="form__label">
                                Username
                            </label>
                        </div>
                        <div className="form-control">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form__input"
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="password" className="form__label">
                                Password
                            </label>
                        </div>
                        <div className="form-control">
                            <input
                                type={isPasswordShown ? `text` : "password"}
                                name="confirmPassword"
                                id="confirmPassword"
                                className="form__input"
                                onChange={handleChange}
                                required
                            />
                            <label
                                htmlFor="confirmPassword"
                                className="form__label"
                            >
                                Confirm Password
                            </label>

                            <button
                                className="toggle-password"
                                onClick={() =>
                                    setIsPasswordShown(!isPasswordShown)
                                }
                                type="button"
                            >
                                {isPasswordShown ? `Hide` : `Show`}
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary btn--full-width"
                        >
                            Sign up
                        </button>
                    </form>

                    <footer className="auth__footer">
                        <span className="footer-text">
                            By signing up, you agree to our Terms , Data Policy
                            and Cookies Policy .
                        </span>
                    </footer>
                </div>

                <div className="box">
                    <span className="subtext">
                        Have an account?&nbsp;
                        <a href="/login" className="color-primary sublink">
                            Log in
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Register;
