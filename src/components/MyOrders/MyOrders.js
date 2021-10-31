import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {

    const { orders } = useAuth();


    const { allContext } = useAuth();
    const { user } = allContext;

    const myOrders = orders?.filter(order => order.bookedBy === user.displayName);
    console.log(myOrders);

    console.log(myOrders);


    const handleDelete = (id) => {
        console.log(id);

        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: 'delete',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {

                alert("deleted Successfully");
                window.location.reload();

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