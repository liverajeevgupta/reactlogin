import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Login.css";
import { useHistory } from 'react-router-dom';

export default function Login() {
    const history = useHistory();

    return (
        <div className="Login">
            <Form>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email"
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"

                    />
                </Form.Group>
                <Button block size="lg" type="submit">
                    Login
                </Button>
                <div>OR</div>
                <Button block size="lg" type="submit" onClick={() => history.push('/register')}>
                    Register
                </Button>
            </Form>
        </div>
    );
}