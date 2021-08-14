import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { useHistory } from "react-router-dom";
import axios from 'axios';


export default function Register() {
    const history = useHistory();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        repassword: ""
    });
    function handleChange(e) {
        const { name, value } = e.target;
        console.log(name, value);
        setUser({
            ...user,
            [name]: value
        });
    }

    const register = () => {
        const {name, email, password, repassword} = user; // Destructuring
        if( name && email && password && (password === repassword)) {
            axios.post("http://localhost:9002/register", user)
            .then( res => console.log('return res'));
        } else {
            alert('Invalid posted');
        }
    }

    return (
        <div className="Login">
         
                <Form.Group size="lg" controlId="name">
                    <Form.Control autoFocus type="name" value={user.name} name="name" onChange={handleChange} placeholder="Name" />
                </Form.Group>
                <Form.Group size="lg" controlId="email">
                    <Form.Control autoFocus type="email" value={user.email} name="email" onChange={handleChange} placeholder="Email" />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Control type="password" value={user.password} name="password" onChange={handleChange} placeholder="Password" />
                </Form.Group>
                <Form.Group size="lg" controlId="repassword">
                    <Form.Control type="password" value={user.repassword} name="repassword" onChange={handleChange} placeholder="Re-Password" />
                </Form.Group>
                <Button block size="lg" type="submit" onClick={register} >
                    Register
                </Button>
                <div>OR</div>
                <Button
                    block
                    size="lg"
                    type="submit"
                    onClick={() => history.push("/login")}
                >
                    Login
                </Button>
           
        </div>
    );
}
