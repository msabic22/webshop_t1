import React from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const shopItem = (props) =>{
  return (
    <Card>
      <Card.Img variant="top" src={props.path}/>
      <Card.Body>
        <Card.Title size='sm'>{props.name}</Card.Title>
        <Card.Text>
          {/* {props.description} */}
        </Card.Text>
        <Button onClick={props.added} variant="primary">{props.price}</Button>
      </Card.Body>
    </Card>
  );
};

export default (shopItem);
