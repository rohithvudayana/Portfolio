import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem,Button, Label, Col, Row} from 'reactstrap';
import { Control, LocalForm, Errors, controls } from 'react-redux-form' ;
import { Link } from 'react-router-dom';

const required = (val) => val && val.lenght;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) =>(val) => (val) && (val.length >= len); 
const isNumber = (val) => !isNaN(Number(val)) ;
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        console.log("current State is: " + JSON.stringify(values));
        alert("current State is: " + JSON.stringify(values)) ;
        
    }

    render() { 

        return(
            <div className="container">

                    <div className='row'>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to= '/Aboutus'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact me</BreadcrumbItem>
                        </Breadcrumb>
                        <div className='col-12'>
                            <h3>Contact me</h3>
                            <hr />
                        </div>
                    </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>My Address</h5>
                            <address>
                            Srikakulam<br />
                            Andhra pradesh<br />
                            
                            <i className="fa fa-phone"></i>: 6309425077<br />
                            {/* <i className="fa fa-fax"></i>: +852 8765 4321<br /> */}
                            <i className="fa fa-envelope"></i>: <a href="rohithvudayana46@gmail.com">rohithvudayana46@gmail.com</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        {/* <h5>Map of our Location</h5> */}
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+91 6309425077"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-success" href="mailto : rohithvudayana46@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3>Send me your Feedback.</h3>
                    </div>
                    <div className='col-12 col-md-9'>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlfor="firstname" md={2} >First Name</Label>
                                <Col md={10} >
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className='form-control'
                                        validators={{
                                            required, minLenght: minLength(3), maxLength: maxLength(15) 
                                        }}
                                         />
                                    <Errors
                                        className='text-danger'
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'must be greater than 2 characters', 
                                            maxLength: 'must be 15 characters or less'
                                        }} 
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label for="lastname" md={2} >Last Name</Label>
                                <Col md={10} >
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className='form-control'
                                        validators={{
                                            required, minLenght: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className='text-danger'
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'must be greater than 2 characters', 
                                            maxLength: 'must be 15 characters or less'
                                        }} 
                                    />   
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label for="telnum" md={2} >Contact Tel.</Label>
                                <Col md={10} >
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel.Number"
                                        className='form-control'
                                        validators={{
                                            required, minLenght: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                          />
                                    <Errors
                                        className='text-danger'
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'must be greater than 2 numbers', 
                                            maxLength: 'must be 15 numbers or less',
                                            isNumber: 'must be a number'
                                        }} 
                                    />     
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label for="email" md={2} >Email</Label>
                                <Col md={10} >
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className='form.control'
                                        validators={{
                                            required, validEmail
                                        }}
                                        />
                                     <Errors
                                        className='text-danger'
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            validEmail: 'Invalid email address'
                                            
                                        }} 
                                    />        
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className='form-check'>
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className='form-check-input'
                                                /> { ' '} 
                                                
                                                <strong>May we contact you ?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                        className='form-control'
                                        >
                                        <option>Tel.</option>    
                                        <option>Email</option>
                                        
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="message" md={2} >Your Feedback</Label>
                                <Col md={10} >
                                    <Control.textarea model=".message" id="message" name="message"lastname
                                        rows = "12"
                                        className='form-control'
                                       />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary" >
                                        send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Contact;