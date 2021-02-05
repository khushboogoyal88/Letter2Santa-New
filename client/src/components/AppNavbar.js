import React, {Component} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container} from "reactstrap";
import { Link } from "react-router-dom";
import { render } from 'react-dom';

class AppNavbar extends Component{
    state={
        isOpen:false
    }
    
    toogle = ()=>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
    
    render(){
        return(
            <div>
            <Navbar color="danger" success expand="sm" className="mb-5">
            <Container>
            <NavbarBrand href="/">Letter2Santa</NavbarBrand>
            <NavbarToggler onClick={this.toogle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
            <Link to="/letters">Check Santa's List</Link>
            </NavItem>
            </Nav>
            </Collapse>
            </Container>
            </Navbar>
            </div>
            )
            
        }
    };
    
    export default AppNavbar;