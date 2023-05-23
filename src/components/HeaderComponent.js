import React, {Component} from "react";
import { Navbar, NavbarBrand, Nav,NavbarToggler,Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Form } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor (props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <>
                <Navbar dark expand= "md">
                <div className='container'>
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/" >
                        <img src="/assets/images/rohijnani.png" height="30" width="41" alt="Ristorant Con Fusion" />
                    </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        {/* <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span> Home
                            </NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info fa-lg"></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/resume">
                                <span className="fa fa-list fa-lg"></span> Resume 
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/Projects">
                                <span className="fa fa-address-card fa-lg"></span> Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-address-card fa-lg"></span> Contact
                            </NavLink>
                        </NavItem>
                        
                    </Nav>
                </Collapse>   
                </div>
                </Navbar>
           </>
        )
    }
}
export default Header;