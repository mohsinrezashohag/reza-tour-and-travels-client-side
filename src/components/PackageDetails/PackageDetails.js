import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PackageDetails.css'

const PackageDetails = () => {

    // loading exact package
    const { id } = useParams()
    const { packages } = useAuth();
    const thisPackage = packages?.find(pack => pack._id === id);
    const { allContext } = useAuth();
    const { user } = allContext;
    const history = useHistory();


    // booking related works
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        fetch('https://eerie-monster-14864.herokuapp.com/addBooking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {

                alert("Booking Added ✅ Wait for confirmation !1")
                history.push('/myOrders')
                reset();

            })


    };



    return (
        <div>
            <h2 className="section-heading">see details and confirm your booking</h2>


            <div className="m-5">
                <div className="row">

                    <div className="col-md-7 package-part">
                        <img className="img-fluid details-image" src={thisPackage?.img} alt="" />
                        <div className="mt-4">
                            <h3>{thisPackage?.name}</h3>
                            <p>{thisPackage?.description}</p>
                        </div>
                    </div>







                    <div className="col-md-5 sm-text-center bok-box p-sm-3">

                        <h5>Booking Form</h5>

                        <div >

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={thisPackage?.name} placeholder="Package Name :  " {...register("Package")} readOnly />

                                <br />
                                <input defaultValue={thisPackage?.price} placeholder="Price :" type="number" {...register("price",)} readOnly />
                                <br />

                                <select style={{ visibility: 'hidden' }}
                                    defaultValue="pending"

                                    {...register("status")}>
                                    <option value="pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                </select>
                                <br />


                                <input defaultValue={user?.displayName} placeholder="Booked By :" {...register("bookedBy")} readOnly />
                                <input className="submit-btn" type="submit" />
                            </form>

                        </div>

                    </div>
























                </div>
            </div>
        </div>
    );
};

export default PackageDetails;