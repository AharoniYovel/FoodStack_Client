import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { ClientContext } from '../context/context';
import { API_URL, doApiMethod, POINTS } from '../services/apiService';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { FaRegCheckSquare } from 'react-icons/fa';
import axios from 'axios';
import { infConect } from '../config/secret';




export default function DonatePoint() {

    const { donateID } = useContext(ClientContext);
    const nav = useNavigate();


    let { register, getValues, handleSubmit, formState: { errors } } = useForm();

    const onSubPoint = async (_bodyData) => {
        doApiPoint(_bodyData);
    }



    const doApiPoint = async (_bodyData) => {
        console.log('_bodyData', _bodyData)

        let geCode = await geCodingAdress(_bodyData.location);
        _bodyData.location = geCode;
        console.log('_bodyData', _bodyData)


        try {
            let url = API_URL + POINTS + "/addPoint";
            let resp = await doApiMethod(url, "post", _bodyData);
            console.log('resp', resp)
            nav("/");
            toast.success("Thank you for your register, you are now in pending status")
        }

        catch (err) {
            console.log(err.response);
            toast.warning(`wrong deatails`);
        }
    }

    const geCodingAdress = async (_adress) => {
        let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${_adress}&key=${infConect.googleMapsApiKey}`;
        let resp = await axios.get(url);
        let data = resp.data.results[0].geometry.location;

        return data;
    }





    return (
        <div className='container col-md-5 mt-5'>
            <h2 className='text-center'>Registration Donates</h2>

            <form onSubmit={handleSubmit(onSubPoint)} className='p-3 border'>

                <input hidden {...register("donateId", { value: donateID })} />

                <label>City:</label>
                <input {...register("city", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.city && <small className='d-block text-danger'>* Enter city</small>}

                <label>Adress (full addres in english,include city):</label>
                <input {...register("location", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.location && <small className='d-block text-danger'>* Enter correct address</small>}

                <label>Floor number:</label>
                <input {...register("floor", { required: true, minLength: 1 })} type="number" className='form-control' />
                {errors.floor && <small className='d-block text-danger'>* Enter floor number</small>}


                <br />
                <button className='btn btn-success mt-4'>Sign Up<FaRegCheckSquare className='ms-2 fs-4' /></button><small className='float-end display-6'>2/2</small>


            </form>
        </div>)
}

