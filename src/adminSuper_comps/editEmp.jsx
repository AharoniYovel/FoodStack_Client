import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL, doApiGet, doApiMethod, EMPLOYEES } from '../services/apiService';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';



export default function EditEmp() {

    const [employee, setEmployee] = useState({});

    const params = useParams();

    const nav = useNavigate();

    useEffect(() => {
        doApiInit();
    }, [])

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
        let url = API_URL + EMPLOYEES + employee._id;
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
        <div className='container'>
            <h1>Edit Employee</h1>
            {employee.nickName ?
                <form onSubmit={handleSubmit(onSub)} className='col-md-6 p-3 shadow'>

                    <label>nickName:</label>
                    <input defaultValue={employee.nickName} {...register("nickName", { required: true, minLength: 2 })} type="text" className='form-control' />
                    {errors.nickName && <small className='d-flex text-danger'>* Enter valid nickName</small>}

                    <label>Email</label>
                    <input defaultValue={employee.email} {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="text" className='form-control' />
                    {errors.email && <small className='d-flex text-danger'>* Enter valid email</small>}

                    <label>phone:</label>
                    <input defaultValue={employee.phone} {...register("phone", { required: true, minLength: 9 })} type="text" className='form-control' />
                    {errors.phone && <small className='d-flex text-danger'>* Enter valid phone</small>}



                    <button onClick={() => { window.confirm("Are you sure?") }} className='btn btn-warning mt-3'>Edit User</button>
                    {/* <Link to="/admin/usersList" className='btn btn-danger ms-3 mt-3'>Back</Link> */}
                </form>
                : 
                <SpinerLoader />

            }

        </div >
    )
}
