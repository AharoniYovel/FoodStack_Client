import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';
import { API_URL, doApiMethod, EMPLOYEES } from '../services/apiService';

export default function AddEmp() {

    // const { } = useContext(ClientContext);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(timeOut, 1000);
    }, [])

    const timeOut = () => {
        setLoading(true);
    }

    let { register, getValues, handleSubmit, formState: { errors } } = useForm();

    const nav = useNavigate();

    const onSubReg = (_bodyData) => {
        doApiAddEmp(_bodyData);
        console.log(_bodyData);
    }

    const doApiAddEmp = async (_bodyData) => {

        try {
            let url = API_URL + EMPLOYEES + "/addAdmin";
            let resp = await doApiMethod(url, "post", _bodyData);
            nav("/superAdmin/empsList");
            toast.success(`New employee has add!`);

        }

        catch (err) {
            // The way to collect err in axios
            console.log(err.response);
            toast.warning(`wrong deatails, ${err.response.data}`);
        }
    }


    return (
        <div className='container-fluid backRound'>
            <div className='container col-md-5'>
                <h2 className='text-center p-3'>Add employee</h2>

                {loading ?

                    <form onSubmit={handleSubmit(onSubReg)} className='p-3 border border-dark rounded-5'>

                        <label>Email:</label>
                        <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="email" className='form-control' />
                        {errors.email && <small className='d-block text-danger'>* Enter valid email</small>}

                        <label>Password:</label>
                        <input {...register("password", { required: true, minLength: 3 })} type="text" className='form-control' />
                        {errors.password && <small className='d-block text-danger'>* Enter valid password, min 3 chars</small>}

                        <label>Nick Name:</label>
                        <input {...register("nickName", { required: true, minLength: 2 })} type="name" className='form-control' />
                        {errors.nickName && <small className='d-block text-danger'>* Enter nick Name, min 2 chars</small>}

                        <label>Phone:</label>
                        <input {...register("phone", { required: true, minLength: 9, maxLength: 10 })} type="tel" className='form-control' />
                        {errors.phone && <small className='d-block text-danger'>* Enter valid phone, min 9 chars, max 10</small>}

                        <button className='btn btn-info mt-4'>Add Employee</button>

                        <button className='btn btn-dark mt-4 ms-5' onClick={() => {
                            window.confirm("are you sure?") && nav(-1);
                        }} type="button">Back</button>

                        <br />
                    </form>
                    :
                    <SpinerLoader />
                }
                <br />
            </div>
        </div>
    )
}
