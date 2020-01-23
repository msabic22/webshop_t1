import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import { connect } from 'react-redux';
import cart from '../../store/selectors/cart';

import * as actions from '../../store/actions/index';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    searchHandler = (keyword) => {
        this.props.updateKeyword(keyword)
    }
    

    render () {
        return (
            <Auxiliary>
                <Toolbar 
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                    counter={this.props.counter} 
                    searchHandler={this.searchHandler}
                    token={this.props.token}
                    logout={this.props.onLogoutHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} 
                    searchHandler={this.searchHandler}
                    token={this.props.token}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}


const mapStateToProps = state => {
    return {
        counter : cart(state.cart),
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateKeyword : (keyword) => dispatch(actions.setSearchKeyword(keyword)),
        onLogoutHandler : () => dispatch(actions.logout())
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout)