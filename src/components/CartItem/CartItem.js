import React from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './CartItem.module.scss'


const cartItem = (props) =>{
  return (
    <Card className={classes.Card}>
        <Row>
            <Col>
                <Card.Img 
                    variant="top"
                    float={true}
                    thumbnail={true} 
                    src={props.path} />    
            </Col> 
            <Col>
                <Card.Body>
                    <Card.Title size='sm'>{props.name}</Card.Title>
                    <Card.Text>
                    {/* {props.description} */}
                    </Card.Text>
                </Card.Body>
            </Col>
            <Col>
                <Button onClick={props.added} variant="primary">{props.price}</Button>
                <Button variant="secondary">{props.quantity}</Button>
            </Col>
        </Row>
        
    </Card>
  );
};

export default (cartItem);