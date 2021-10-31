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
                            <p>We are a team of traveler, explorer and entrepreneur who work together
                                <br />
                                to ensure a great tour  that you receive the best treatment to your soul because we bellive only travels can heal you the inside.</p>
                            <Tada>
                                <NavLink to="/packages"><button className="see-packages-btn">See Our Travel Packages</button></NavLink>
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
            <div className="offer-section d-flex align-items-center text-white my-5">

                <div className="container">
                    <div className="row ">

                        <div className="solo col-md-6">
                            <div className="offer-text-one">
                                <h3>Friends & Family Packages</h3>
                                <p>Starting from Taka. 50,000</p>

                                <img className="offer-img" src="https://i.ibb.co/QMVXsgb/download.jpg" alt="" />
                            </div>
                        </div>

                        <div className="family col-md-6">

                            <div className="offer-text-two">

                                <h3>Solo Package</h3>
                                <p>Starting from Taka. 50,000</p>
                                <img className="offer-img" src="https://i.ibb.co/qRGVfqT/pexels-photo-2577274.jpg" alt="" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>



            <div className="text-center container my-5">
                <div>
                    <h1 className="section-heading">experienced reliable travel agency from <br /> Dhaka,Bangladesh</h1>

                    <h6>Everyone loves to travel.What makes your travel experience memorable is impeccable planning
                        - from choosing the destination to booking your flites tickets,accommodation,itinery and more.At Reza Tour and Travels,we have carved name as among the most trustworthy travel agent from dhaka,bangladesh through our hands-on involement in evything to make your vacation an experience that lasts a lifetime </h6>
                </div>
            </div>



        </div>
    );
};

export default Home;