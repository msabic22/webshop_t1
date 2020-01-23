import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown'

const dropd = (props) =>{
    return (
        <Dropdown  style={props.style}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {props.title}
            </Dropdown.Toggle>

            <Dropdown.Menu >
                {props.elements}
            </Dropdown.Menu>
            </Dropdown>
    );
};

export default (dropd);