import React, { useState } from "react";
import "../Auth.css";
import logo from "../../../images/logo.png";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { login } from "../../../actions/auth";

function Register() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const history = useHistory();
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const { errorMessage } = useSelector((state) => state.auth);

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(login(formData, history));
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="login">
            <div className="container auth-container">
                <div className="box">
                    <header className="auth__header">
                        <img src={logo} className="auth__logo" alt="Logo" />
                    </header>
                    <form className="form" onSubmit={handleSubmit}>
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
                                type={isPasswordShown ? `text` : "password"}
                                name="password"
                                id="password"
                                className="form__input"
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="password" className="form__label">
                                Password
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
                            Log in
                        </button>
                    </form>

                    <div className="auth__error">
                        <span className="error">{errorMessage}</span>
                    </div>

                    <footer className="auth__footer">
                        <a href="#" className="footer-link">
                            Forgot password?
                        </a>
                    </footer>
                </div>

                <div className="box">
                    <span className="subtext">
                        Don't have an account?&nbsp;
                        <a href="/register" className="color-primary sublink">
                            Sign up
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Register;
