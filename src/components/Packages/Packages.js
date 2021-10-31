import React from 'react';
import './Packages.css'
import useAuth from '../../hooks/useAuth';
import Package from '../Package/Package';



const Packages = () => {
    const { packages } = useAuth();


    return (
        <div>
            <h2 className="section-heading">Our Services</h2>

            <div className="pakages-griding">
                {packages.map((pack, index) => <Package index={index} key={pack._id} pack={pack}></Package>)}

            </div>

        </div>
    );
};

export default Packages;