import React, {Component} from 'react';
import classes from './Filters.module.scss';
import Input from '../../components/UI/Input/Input'
import Button from 'react-bootstrap/Button'
import Dropd from './Dropd/Dropd'

import Dropdown from 'react-bootstrap/Dropdown'

import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Col } from 'react-bootstrap';


class Filters extends Component {
    state = {
        filterForm: {
            minPrice: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Minimalna cijena'
                },
                value: '',
                validation: {
                    required: false,
                    number : true
                },
                valid: true,
                touched: false
            },
            maxPrice: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Maksimalna cijena'
                },
                value: '',
                validation: {
                    required: false,
                    number : true
                },
                valid: true,
                touched: false
            }
        },
        formIsValid: true
    }

    displayVisible = (event) =>{
        event.preventDefault();
        let min = this.state.filterForm.minPrice.value;
        let max = this.state.filterForm.maxPrice.value;
        this.props.updatePriceFilter(min, max);
    }

    checkValidity(value, rules) {
        let isValid = true;
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        if (rules.number) {
            isValid = !isNaN(value);
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        
        const updatedOrderForm = {
            ...this.state.filterForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        if(formIsValid){}

        this.setState({filterForm: updatedOrderForm, formIsValid: formIsValid});
    }

    sortSelectHandler = (event, key) =>{
        this.props.sort(event);
    }

    categorySelectHandler = (event, key) =>{
        this.props.category(event);
    }

    render = () => {
        const formElementsArray = [];
        let dropdownElements = ['AZ','ZA','LoHi','HiLo'];
        dropdownElements = dropdownElements.map(type =>
            <Dropdown.Item 
                key={type}
                eventKey={type}
                onSelect={(event) => this.sortSelectHandler(event, type.eventKey)}>{type}
            </Dropdown.Item>
        )

        let categories = [
            'SVE',
            'hrana',
            'meso',
            'mliječni proizvoid',
            'piće',
            'povrće',
            'voće',
            'žitarice'
        ];
        categories = categories.map(type =>
            <Dropdown.Item 
                key={type}
                eventKey={type}
                onSelect={(event) => this.categorySelectHandler(event, type.eventKey)}>{type}
            </Dropdown.Item>
        )

        
        

        for (let key in this.state.filterForm) {
            formElementsArray.push({
                id: key,
                config: this.state.filterForm[key]
            });
        }
        let priceFilter = (
            <div>
                <Row>
                {formElementsArray.map(formElement => (
                    <Col sm={12} md={4}>
                        <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)} />  
                    </Col> 
                ))}     
                <Col>
                    <Button 
                        onClick={this.displayVisible}
                        variant="primary" 
                        disabled={!this.state.formIsValid}
                        style={{margin:'10px'}}>FILTRIRAJ
                    </Button>

                </Col>
                </Row>
            </div>
        );

        return (
            <Container className={classes.Filters}>
                <h4>Filtriranje i sortiranje</h4>
                {priceFilter}

                <Row>   
                    <Col>
                        <Dropd  
                            selectionHandler={(event) => this.sortSelectHandler(event)}
                            elements={dropdownElements}
                            title='Sortiraj'>
                        </Dropd>
                    </Col>
                    <Col>
                        <Dropd  
                            selectionHandler={(event) => this.categorySelectHandler(event)}
                            elements={categories}
                            title='Kategorije'>
                        </Dropd>
                    </Col>
                
                </Row>    
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
     return {
        updatePriceFilter : (min, max) => dispatch(actions.setFilterPrice(min, max)),
        sort : (type) => dispatch(actions.setSortType(type)),
        category : (type) => dispatch(actions.setCategory(type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Filters);