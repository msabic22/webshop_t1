import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

import Badge from 'react-bootstrap/Badge'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const counterBadgeStyle = {
    margin:'0px 5px'
}

const navigationItems = (props) => {
    let authNavigation = !props.token ? 'Sing in' : 'Log out';
    
    return(
        <ul className={classes.NavigationItems}>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" 
                    onChange={event => props.searchHandler(event.target.value)}/>
            </Form>
            <NavigationItem onClick={props.logout} link='/auth'exact>{authNavigation}</NavigationItem>
            <NavigationItem link="/shop" exact>Shop</NavigationItem>
            <NavigationItem link="/profile">Profile</NavigationItem>
            <NavigationItem link="/cart">
                Cart
                <Badge pill variant="primary" style={counterBadgeStyle}>
                    <strong>{props.counter}</strong>
                </Badge>
            </NavigationItem>
        </ul>
    )
}

export default navigationItems;

