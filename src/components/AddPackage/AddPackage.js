import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './AddPackage.css'
const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        console.log(data)

        fetch('https://eerie-monster-14864.herokuapp.com/addNewPackage', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(results => {

                console.log(results);
                alert("your package added done ✅✅");
                history.push('/packages');
                reset();
            })
    };
    return (
        <div>
            <h2 className="section-heading">add a new package</h2>

            <div className="package-add text-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Package Name :" {...register("name")} />
                    <br />
                    <input placeholder="Price :" type="number" {...register("price")} />
                    <br />
                    <input placeholder="Details :" {...register("description")} />
                    <br />
                    <br />
                    <input placeholder="Image URL :" {...register("img")} />
                    <br />
                    <input className="add-pack-btn" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddPackage;