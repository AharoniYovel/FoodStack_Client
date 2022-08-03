import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { ClientContext } from '../context/context';
import { API_URL, doApiMethod, POINTS } from '../services/apiService';



export default function DonatePoint() {

    const { donateID } = useContext(ClientContext);


    let { register, getValues, handleSubmit, formState: { errors } } = useForm();

    const onSubPoint = async (_bodyData) => {
        doApiPoint(_bodyData);
    }

    const doApiPoint = async (_bodyData) => {

        try {
            let url = API_URL + POINTS + "/addPoint";
            let resp = await doApiMethod(url, "post", _bodyData);
            console.log(resp.data);
        }

        catch (err) {
            console.log(err.response);
            alert("wrong deatails");
        }
    }





    return (
        <div className='container'>
            <h2>Registration Donates</h2>

            <form onSubmit={handleSubmit(onSubPoint)} className='col-md-6 p-3 border'>

                <input hidden {...register("donateId", { value: donateID })} />


                <label>City:</label>
                <input {...register("city", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.city && <small className='d-block text-danger'>* Enter city</small>}

                <label>Adress:</label>
                <input {...register("adress", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.adress && <small className='d-block text-danger'>* Enter city</small>}

                <label>House number:</label>
                <input {...register("houseNum", { required: true, minLength: 1 })} type="number" className='form-control' />
                {errors.houseNum && <small className='d-block text-danger'>* Enter House number</small>}

                <label>Floor number:</label>
                <input {...register("floor", { required: true, minLength: 1 })} type="number" className='form-control' />
                {errors.floor && <small className='d-block text-danger'>* Enter floor number</small>}


                <br />
                <button className='btn btn-success mt-4'>Sign up</button>


            </form>
        </div>)
}

