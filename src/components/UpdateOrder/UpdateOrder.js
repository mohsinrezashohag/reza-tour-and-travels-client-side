import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './UpdateOrder.css'

const UpdateOrder = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();
    const { orders } = useAuth();
    const { allContext } = useAuth();
    const { user } = allContext;


    const thisOrder = orders.find(order => order._id === id)

    console.log(thisOrder);

    const onSubmit = data => {

        fetch(`https://eerie-monster-14864.herokuapp.com/order/update/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {

                    alert("modified done ✅");
                    history.push('/manageOrders')
                }
            })




    };








    return (
        <div className="text-center m-5">

            <h2 className="section-heading">Update Order Page</h2>




            <form className="update-box" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={thisOrder.Package} placeholder="Package Name :  " {...register("Package")} />

                <br />
                <input defaultValue={thisOrder.price} placeholder="Price :" type="number" {...register("price",)} />
                <br />

                <input defaultValue={user?.displayName} placeholder="Booked By :" {...register("bookedBy")} readOnly />
                <br />
                <select className="selection-field"
                    defaultValue="pending"

                    {...register("status")}>
                    <option value="pending">Pending</option>
                    <option value="Approved">Approved</option>

                </select>
                <br />




                <br />

                <input className="submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default UpdateOrder;