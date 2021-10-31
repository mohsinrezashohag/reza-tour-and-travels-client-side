import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = (props) => {


    const { _id, name, img, description } = props.pack;



    return (
        <div className="m-4 single-package">


            <img className="img-fluid package-image" src={img} alt="" />

            <div className="package-text">
                <h2>{name}</h2>
                <p>{description}</p>

            </div>

            <div>
                <Link to={`/packages/${_id}`}> <button className="m-4 see-book-btn"> SEE & BOOK <i className="fas fa-arrow-alt-circle-right"></i></button></Link>
                {/* <button onClick={() => handleBuyNow(index)} className="m-4">Book Now</button> */}
            </div>

        </div >
    );
};

export default Package;