import React from 'react';
import './Home.css'
import Jump from 'react-reveal/Jump';
import Tada from 'react-reveal/Tada';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import Package from '../Package/Package';

const Home = () => {

    const { packages } = useAuth();
    return (
        <div className="home">


            {/* banner sectionL */}

            <div className="banner p-sm-5 ">
                <div className="row d-md-flex align-items-center ">
                    <div className="col-md-6 p-4 banner-text">
                        <Jump>
                            <h3 className="special-text">Bring Out The Wanderlust In You</h3>
                            <h1>Discover the world  <br /> <span className="special-text">with us</span> </h1>
                            <p>We are a team of dentists, hygienists and receptionists who work together
                                <br />
                                to ensure that you receive the best treatment that you require at a very time that suits you</p>
                            <Tada>
                                <NavLink to="/packages"><button className="cosult-btn">See Our Travel Packages</button></NavLink>
                            </Tada>
                        </Jump>
                    </div>
                    <div className="col-md-6">
                    </div>

                </div>
            </div>


            {/* packages section */}



            <div className="packages">
                <h2 className="section-heading">Our Services</h2>
                <div className="pakages-griding">
                    {packages.slice(0, 3).map((pack, index) => <Package index={index} key={pack._id} pack={pack}></Package>)}

                </div>

            </div>


            {/* offer  section */}
            <div className="offer-section d-flex align-items-center text-white">

                <div className="container">
                    <div className="row ">

                        <div className="solo col-md-6">
                            <div className="offer-text">
                                <h3>Solo Packages</h3>
                                <p>Starting from Taka. 10,000</p>

                                <img className="offer-img" src="https://i.ibb.co/QMVXsgb/download.jpg" alt="" />
                            </div>
                        </div>

                        <div className="family col-md-6">

                            <div className="offer-text">

                                <h3>Family & Friends packages</h3>
                                <p>Starting from Taka. 50,000</p>
                                <img className="offer-img" src="https://i.ibb.co/qRGVfqT/pexels-photo-2577274.jpg" alt="" />

                            </div>


                        </div>


                    </div>

                </div>

            </div>




        </div>
    );
};

export default Home;