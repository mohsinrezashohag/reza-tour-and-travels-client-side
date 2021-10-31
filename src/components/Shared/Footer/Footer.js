import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'
import './Footer.css'

const Footer = () => {
    const { allContext } = useAuth();
    const { user, logOut } = allContext;


    return (
        <div className="footer">

            <div className="container-fluid text-center text-md-left container">
                <div className="row">


                    <div className="col-md-6 pe-sm-5 mt-3 text-white ">
                        <div className="footer-left p-4">
                            <img className='logo' src={logo} alt="" />

                            <h5 style={{ textAlign: 'left' }} className="sub-heading mt-2">BOOST BRAINPOWER WITH MUSIC. FROM ANYWHERE.</h5>

                            <p className="footer-p">Music Land is the world’s leading provider of music-based education for children from birth through age seven. <br /> We use the power and joy of </p>
                        </div>




                    </div>


                    <div className="col-md-3  mb-3">
                        <h5 style={{ textAlign: 'left' }} className="sub-heading mt-5 text-white">Your Needed Links</h5>


                        <div className="footer-links">


                            <Link to="/home" className=" nav-link">Home</Link>
                            <Link to="/packages" className=" nav-link">Packages</Link>
                            <Link to="/purchase" className=" nav-link">Purchase</Link>
                            <Link to="/manageOrders" className=" nav-link">Manage Orders</Link>
                            <Link to="/about" className=" nav-link">About</Link>



                        </div>
                    </div>


                    <div className="col-md-3  mb-3">
                        <h5 style={{ textAlign: 'left' }} className="sub-heading mt-5 text-white">Follow Us</h5>


                        <div className="footer-links">



                            <a class="btn btn-primary" style={{ backgroundColor: '#55acee' }} href="#!" role="button"
                            ><i class="fab fa-facebook-f"></i><span class="badge bg-danger ms-2">8</span></a
                            >

                            <button
                                type="button"
                                className="btn btn-primary position-relative mx-4"
                                data-mdb-ripple-unbound="true"
                                style={{ backgroundColor: '#55acee' }}
                            >
                                <i class="fab fa-instagram"></i>
                                <span
                                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                >+99 <span class="visually-hidden">unread messages</span></span
                                >
                            </button>





                        </div>

                        <div className="text-white" style={{ textAlign: 'left' }}>
                            <h5 style={{ textAlign: 'left' }} className="sub-heading mt-5 text-white">Contact Details</h5>
                            <p>   Email : rezatravels@gmail.com</p>
                            <p> Location : Islampur-College Mor,JamalPur</p>

                        </div>



                    </div>





                    {/* 


                    <div className="col-md-3  mb-3">
                        <h5 style={{ textAlign: 'left' }} className="sub-heading mt-5 text-white">Follow Us SocialMedia</h5>

                        // <div class="follow-widget">
                        //     <h2>Follow Us</h2>
                        //     <p>Stay updated via social media</p>
                        //     <ul>
                        //         <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        //         <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        //         <li><a href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                        //         <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        //         <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        //         <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                        //     </ul>
                        // </div> */}



                    {/* <ul className="list-unstyled">
                        {user.displayName ?
                            <div className="d-flex ms-3">
                                <h6 className="special-text me-2 pt-2">{user.displayName}</h6>
                                <Button onClick={logOut} className="btn-danger ">Logout</Button>
                            </div>
                            :
                            <div>
                                <button className="regular-btn mb-4" type="submit"><i class="fas fa-sign-in-alt"></i> Login Now </button>

                                <h6 className="text-white">Login with Google</h6>

                            </div>
                        }
                    </ul> */}



                </div>
            </div>
        </div >
    );
};

export default Footer;