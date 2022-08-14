import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ClientContext } from '../context/context';
import { API_URL, doApiMethod, EMPLOYEES } from '../services/apiService';

export default function AddEmp() {

    // const { } = useContext(ClientContext);


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

                    <button className='btn btn-info mt-4'>Add admin</button>


                </form>
                <br />

            </div>
        </div>
    )
}
