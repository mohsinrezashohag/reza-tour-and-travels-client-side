import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const ManageOrders = () => {
    const { orders } = useAuth();


    console.log(orders);


    return (
        <div>
            <div>
                <h2 className="section-heading">Manage All Orders As Admin</h2>
                <h4 className="sub-heading">Total Orders : {orders.length}</h4>
            </div>




            <div className="container">

                <Table className="table table-bordered border-secondary ">
                    <thead>
                        <tr>

                            <th>Package Name</th>
                            <th>Booked By</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Cancel/Modify</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            orders.map(order =>
                                <tr key={order?._id}>
                                    <td>{order?.Package}</td>
                                    <td>{order?.bookedBy}</td>
                                    <td>{order?.price} TK</td>
                                    <td>{order?.status === "pending" ? <p className="text-danger">Pending</p> : <p className="text-primary">Approved</p>}</td>
                                    <td>
                                        <button className="btn btn-danger"><i className="fas fa-trash-alt"></i> DELETE</button>
                                        <Link to={`/updateOrder/${order._id}`}>  <button className="btn btn-success"><i className="fas fa-edit"></i> Update</button> </Link>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </Table>

            </div>
        </div>





    );
};

export default ManageOrders;