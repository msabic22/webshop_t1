import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './Login/Login'
import Register from './Register/Register'

import * as actions from '../../store/actions/index';

class Auth extends Component {
    state = {
        isLogin : false
    }

    registrationHandler = (registrationData) => {
        console.log(registrationData.email)
        console.log(registrationData.password)
        console.log(registrationData.name)
        console.log(registrationData.lastName)
        console.log(registrationData.address)
        console.log(registrationData.state)
        console.log(registrationData.city)
        console.log(registrationData.zipCode)
        this.props.onAuth(registrationData.email, registrationData.password, this.state.isLogin)
    }

    loginHandler = (loginData) => {
        console.log(loginData.email)
        console.log(loginData.password)
    }

    changeAuthModeHandler = () => {                              
        this.setState(prevState => {
            return {
                isLogin : !prevState.isLogin
            };
        })
    }

    render() {        
        //TODO: Validacija forme

        //TODO: press enter to submit
        //TODO: register -> login transition animation

        let visibleForm = this.state.isLogin 
            ? <Login 
                submitHandler={this.loginHandler}
                switchHandler={this.changeAuthModeHandler}/>
            : <Register 
                submitHandler={this.registrationHandler}
                switchHandler={this.changeAuthModeHandler}/>
             

        return (
            <div>
                {visibleForm}
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        loading:state.auth.loading,
        token:state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isLogin) => dispatch(actions.auth(email, password, !isLogin))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);