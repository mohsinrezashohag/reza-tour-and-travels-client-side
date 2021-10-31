import React from 'react';
import { Button, Container, DropdownButton, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Header.css'
import logo from '../../../images/logo.png'

const Header = () => {

    const { user, logOut } = useFirebase();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light" id="navbar">
                <Container>
                    <Link to="/home" className="navbar-brand"><img width="100px" src={logo} alt="" /></Link>

                    {/* <Navbar.Brand href="#home">REZA TOUR & TRAVELS</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">



                            <Link to="/packages" className=" nav-link">Packages</Link>
                            <Link to="/purchase" className=" nav-link">Purchase</Link>
                            <Link to="/about" className=" nav-link">About</Link>






                        </Nav>



                        <Nav>

                            <img className="header-img" src={user.photoURL} alt="" />

                            {user?.displayName ?




                                <DropdownButton id="dropdown-basic-button" title={user?.displayName}>





                                    <Link className="text-center" to="/myOrders">
                                        <button className="text-white ms-2 dp-item">My Orders</button>
                                    </Link>

                                    <Button onClick={logOut} className="btn-danger ms-2 text-white mt-1 logout-btn  ">Logout</Button>






                                </DropdownButton>





                                // <NavDropdown className="nav-drop" title={user.displayName} id="collasible-nav-dropdown">


                                //     <Link to="/myOrders">
                                //         <button className=" bg-secondary text-white">My Orders</button>
                                //     </Link>


                                //     <Link to="/addPackage">
                                //         <button className=" bg-secondary text-white">Add Another Package</button>
                                //     </Link>

                                //     <Button onClick={logOut} className="btn-danger ">Logout</Button>


                                // </NavDropdown>
                                // <div className="d-flex justify-content-center align-items-center" >  <img className="header-img" src={user.photoURL} alt="" /><p>{user.displayName}</p>    <Button onClick={logOut} className="btn-danger ">Logout</Button> </div>

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