import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    // const { orders } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null)

    useEffect(() => {
        fetch('https://eerie-monster-14864.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [isDeleted])






    const { allContext } = useAuth();
    const { user } = allContext;

    const myOrders = orders?.filter(order => order.bookedBy === user.displayName);



    const handleDelete = (id) => {
        // console.log(id);

        fetch(`https://eerie-monster-14864.herokuapp.com/deleteOrder/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => res.json())
            .then((data) => {

                if (data.deletedCount) {

                    setIsDeleted(true)

                }
                else {

                    setIsDeleted(false)
                }



            })


    }

    return (
        <div>
            <h2 className="section-heading">my orders & booking</h2>

            <h5 className="sub-heading">My Total order : {myOrders.length}</h5>


            <div className="container">

                <Table className="table table-bordered border-secondary ">
                    <thead>
                        <tr>

                            <th>Package Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Cancel/Modify</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            myOrders.map(order =>
                                <tr key={order?._id}>
                                    <td>{order?.Package}</td>
                                    <td>{order?.price} TK</td>
                                    <td>{order?.status === "pending" ? <p className="text-danger">Pending</p> : <p className="text-primary">Approved</p>}</td>
                                    <td><button onClick={() => handleDelete(order?._id)} className="btn btn-danger">DELETE</button></td>
                                </tr>)
                        }

                    </tbody>
                </Table>

            </div>
        </div >
    );
};

export default MyOrders;