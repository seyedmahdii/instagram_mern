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
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeHolder="Email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeHolder="Password"
                    onChange={handleChange}
                />
                <button type="submit" className="">
                    Log in
                </button>
            </form>
        </div>
    );
}

export default Register;
