import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Login.css";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const history = useHistory();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    function handleChange(e) {
        const { name, value } = e.target;
        console.log(name, value);
        setUser({
            ...user,
            [name]: value
        });
    }

    function login() {
        const { email, password } = user;
        if (email && password) {
            axios.post("http://localhost:9002/login", user)
            .then ( res => console.log(res));
        } else {
            alert('Invalid posted');
        }
    }

    return (
        <div className="Login">
           
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={user.email} name="email" onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={user.password} name="password" onChange={handleChange}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" onClick={login}>
                    Login
                </Button>
                <div>OR</div>
                <Button block size="lg" type="submit" onClick={() => history.push('/register')}>
                    Register
                </Button>
            
        </div>
    );
}