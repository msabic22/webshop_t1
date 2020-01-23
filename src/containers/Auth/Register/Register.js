import React, { useState, useRef } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import classes from './Register.module.scss'


const FormExample = (props) => {
    const [validated, setValidated] = useState(false);
    const emailElement = useRef(null);
    const passwordElement = useRef(null);
    const nameElement = useRef(null);
    const lastNameElement = useRef(null);
    const addressElement = useRef(null);
    const stateElement = useRef(null);
    const cityElement = useRef(null);
    const zipCodeElement = useRef(null);

    const onSubmit = event => {

        event.preventDefault();
        
        let registrationData  = {
            email       : emailElement.current.value,
            password    : passwordElement.current.value,
            name        : nameElement.current.value,
            lastName    : lastNameElement.current.value,
            address     : addressElement.current.value,
            state       : stateElement.current.value,
            city        : cityElement.current.value,
            zipCode     : zipCodeElement.current.value
        }

        props.submitHandler(registrationData)
    };


    const checkValidity = (event) => {
        console.log(event.currentTarget)
        
    }

    return (
        <Form className={classes.Register} onSubmit={onSubmit} noValidate>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    ref={emailElement}
                    required
                    type="email"
                    onChange={event=> checkValidity(event)}
                    placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    ref={passwordElement}
                    required
                    type="password"
                    onChange={event=> checkValidity(event)}
                    placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    onChange={event=> checkValidity(event)}
                    placeholder="Password" />
            </Form.Group>            
                
            <Form.Group controlId="formBasicAdress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    ref={addressElement}
                    required
                    type="address"
                    onChange={event=> checkValidity(event)}
                    placeholder="Address" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} md={6} controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        ref={nameElement}
                        required
                        type="text"
                        onChange={event=> checkValidity(event)}
                        placeholder="First name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        ref={lastNameElement}
                        required
                        type="text"
                        onChange={event=> checkValidity(event)}
                        placeholder="Last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            
            <Form.Row>
            <Form.Group 
                as={Col} 
                md={5} 
                controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control 
                    ref={stateElement}
                    type="text" 
                    placeholder="State" 
                    onChange={event=> checkValidity(event)}
                    required />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group 
                as={Col}
                md={5}
                controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control 
                    ref={cityElement}
                    type="text" 
                    placeholder="City" 
                    onChange={event=> checkValidity(event)}
                    required />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group 
                as={Col} 
                md={2} 
                controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control 
                    ref={zipCodeElement}
                    type="text" 
                    placeholder="Zip" 
                    onChange={event=> checkValidity(event)}
                    required />
                <Form.Control.Feedback 
                type="invalid">
                    Please provide a valid zip.
            </Form.Control.Feedback>
            </Form.Group>

            </Form.Row>

            <Form.Group>
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                />
            </Form.Group>

            <Button variant='primary' type="submit">Registriraj se</Button>
            <Button variant='link' type="button" onClick={props.switchHandler}>Već imaš račun? Prijavi se!</Button>
        </Form>
    );
}

export default FormExample;

