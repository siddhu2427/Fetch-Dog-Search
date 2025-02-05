import React, { useState } from "react";
import { loginUser } from "../api/fetchService";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (await loginUser(name, email)) {
            navigate("/search");
        } else {
            alert("Login failed! Please check your credentials.");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
