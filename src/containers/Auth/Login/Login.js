import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import classes from './Login.module.scss'

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);

    const onSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    }

    return(
        <Form className={classes.Login} noValidate validated={validated} onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    type="email" 
                    placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    value={password}
                    onChange={event => setPassword(event.target.value)} 
                    type="password" 
                    placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Prijavi se!
            </Button>
            <Button variant="link" onClick={props.switchHandler}>
                Još nemaš račun? Registriraj se!
            </Button>
        </Form>
    );
}

export default (Login);
