import React from 'react';
import { Button, Container, DropdownButton, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Header.css'
import logo from '../../../images/logo.png'

const Header = () => {

    const { user, logOut } = useFirebase();
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" id="navbar" style={{ textAlign: 'center' }}>
                <Container>
                    <Link to="/" className="navbar-brand text-white"><img width="70px" src={logo} alt="" /></Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">



                            <Link to="/home" className=" nav-link">Home</Link>
                            <Link to="/packages" className=" nav-link">Packages</Link>
                            <Link to="/manageOrders" className=" nav-link">Manage Orders</Link>
                            <Link to="/about" className=" nav-link">About</Link>






                        </Nav>



                        <Nav>

                            {user?.displayName ? <img className="header-img mx-auto " src={user?.photoURL} alt="" /> : ""}


                            {user?.displayName ?




                                <DropdownButton className="mx-1 my-1" id="dropdown-basic-button" title={user?.displayName}>





                                    <Link className="text-center" to="/myOrders">
                                        <button className="text-white ms-2 dp-item">My Orders</button>
                                    </Link>

                                    <Button onClick={logOut} className="btn-danger ms-2 text-white mt-1 logout-btn  ">Logout</Button>






                                </DropdownButton>

                                :

                                <Link to="/login" className="nav-link"> <i className="fas fa-sign-in-alt"></i> Log In</Link>}
                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;