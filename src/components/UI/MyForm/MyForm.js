import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import Spinner from '../Spinner/Spinner'




const form = (props) =>{
    const elements = [];
    for (let key in props.elementsInfo) {
        elements.push({
            id: key,
            config: props.elementsInfo[key]
        });
    }

    let formElements = (
        elements.map(formElement => (
            <Form.Group 
                key={formElement.id}
                as={Col} 
                controlId={formElement.id}>
                    <Form.Label>{formElement.config.elementConfig.title}</Form.Label>
                    <Form.Control
                        value={formElement.config.value}
                        type={formElement.config.elementType} 
                        placeholder={formElement.config.elementConfig.placeholder}
                        onChange={(e) => props.changed(e, props.formType)}/>
            </Form.Group>        
            ))
    )


    let submitButton = <Button  
                onClick={props.submitButton.action}
                variant="primary" 
                disabled={props.disabled}>{props.submitButton.title}
            </Button>
            
    let secondaryButton = <Button  
                onClick={props.secondaryButton.action}
                variant="link" >{props.secondaryButton.title}
             </Button>
    
    
    if(props.disabled) formElements = <Spinner></Spinner>        

    return (
        <Form className={props.className}>
            {formElements}
            <Row>
                {submitButton}
                {secondaryButton}
            </Row>
        </Form>
    );
};

export default (form);