import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL, doApiGet, doApiMethod, EMPLOYEES } from '../services/apiService';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';


export default function EditEmp() {

    const [employee, setEmployee] = useState({});
    const [loading, setLoading] = useState(false);


    const params = useParams();

    const nav = useNavigate();

    useEffect(() => {
        doApiInit();
        setTimeout(timeOut, 1000);
    }, [])

    const timeOut = () => {
        setLoading(true);
    }

    // * to collect data to inputs
    const doApiInit = async () => {
        let url = API_URL + EMPLOYEES + "/empInfo/" + params.id;
        try {
            let resp = await doApiGet(url);
            setEmployee(resp.data);
        }

        catch (err) {
            console.log(err.response);
            toast.warning("There's error try again");
        }

    }

    let { register, handleSubmit, formState: { errors } } = useForm();

    const onSub = (_dataBody) => {
        console.log(_dataBody);
        doApiEdit(_dataBody);
    }

    const doApiEdit = async (_dataBody) => {
        let url = API_URL + EMPLOYEES + "/editEmp/" + employee._id;
        try {
            let resp = await doApiMethod(url, "PUT", _dataBody);
            if (resp.data.modifiedCount == 1) {
                toast.success("Employee updated");
                nav("/superAdmin/empsList");
            }

        }

        catch (err) {
            if (err.response.data.code == 11000) {
                toast.warning("email already in system");
            }
            console.log(err.response);
            toast.warning("There's error try again");
        }
    }

    return (
        <div className='container col-md-5'>
            <h1 className='text-center p-3'>Edit {employee.nickName}</h1>
            {employee.nickName && loading ?
                <form onSubmit={handleSubmit(onSub)} className='p-3 border border-dark rounded-5'>

                    <label>NickName:</label>
                    <input defaultValue={employee.nickName} {...register("nickName", { required: true, minLength: 2 })} type="text" className='form-control' />
                    {errors.nickName && <small className='d-flex text-danger'>* Enter valid nickName</small>}

                    <label>Email</label>
                    <input defaultValue={employee.email} {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="text" className='form-control' />
                    {errors.email && <small className='d-flex text-danger'>* Enter valid email</small>}

                    <label>Phone:</label>
                    <input defaultValue={employee.phone} {...register("phone", { required: true, minLength: 9 })} type="text" className='form-control' />
                    {errors.phone && <small className='d-flex text-danger'>* Enter valid phone</small>}



                    <button onClick={() => { window.confirm("Are you sure?") }} className='btn btn-warning mt-3'>Edit User</button>
                    <button className='btn btn-danger mt-3 ms-5' onClick={() => {
                        window.confirm("are you sure?") && nav(-1);
                    }} type="button">Back</button>
                </form>
                :
                <SpinerLoader />

            }

        </div >
    )
}
