import React, { useState } from "react";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeHolder="Full Name"
                    autoFocus
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeHolder="Email"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="username"
                    placeHolder="Username"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeHolder="Password"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeHolder="Confirm Password"
                    onChange={handleChange}
                />
                <button type="submit" className="">
                    Sign up
                </button>
            </form>
        </div>
    );
}

export default Register;
