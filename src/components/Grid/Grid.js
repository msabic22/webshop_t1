import { chunk } from 'lodash';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const grid = (props) =>{
    
    const cols = props.columns;
    const rows = chunk(props.children, cols)
    let rowCounter = 1;

    const grid = rows.map((cols) => (
      <Row key={rowCounter++}>
        {cols.map((col) => (
          <Col lg={3} sm={6} xs={12} key={col.key}>
            {col}
          </Col>
        ))}
      </Row>
    ));

    return (
        <Container fluid={true}>
            {grid}
        </Container>
    );
};

export default (grid);