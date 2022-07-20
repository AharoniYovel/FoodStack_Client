import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { API_URL, doApiMethod } from '../services/apiService';

export default function Registration() {

    let { register, getValues, handleSubmit, formState: { errors } } = useForm();

    const [anomusBtn, setAnomusBtn] = useState(false);

    const onSubReg = (_bodyData) => {
        console.log(_bodyData);
        doApiReg(_bodyData);
    }

    const doApiReg = async (_bodyData) => {
        try {
            let url = API_URL + "/volunteers/reg";
            let resp = await doApiMethod(url, "post", _bodyData);
            console.log(resp.data);
        }

        catch (err) {
            // The way to collect err in axios
            console.log(err.response);
            alert("User or Password wrong");
        }
    }

    return (
        <div className='container'>
            <h2>Registration</h2>

            <form onSubmit={handleSubmit(onSubReg)} className='col-md-6 p-3 border'>

                <label>Full Name:</label>
                <input {...register("fullName", { required: true, minLength: 2 })} type="name" className='form-control' />
                {errors.fullName && <small className='d-block text-danger'>* Enter full name, min 2 chars</small>}

                <label>Email:</label>
                <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="email" className='form-control' />
                {errors.email && <small className='d-block text-danger'>* Enter valid email</small>}

                <label>Enter email again:</label>
                <input {...register("email2", { required: true, validate: (val => { return val == getValues("email") }) })} type="email" className='form-control' />
                {errors.email2 && <small className='d-block text-danger'>* emails not match</small>}

                <label>Password:</label>
                <input {...register("password", { required: true, minLength: 3 })} type="text" className='form-control' />
                {errors.password && <small className='d-block text-danger'>* Enter valid password, min 3 chars</small>}

                <label>City:</label>
                <input {...register("city", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.city && <small className='d-block text-danger'>* Enter city</small>}

                <label>radius:</label>
                <input {...register("radius", { required: true, minLength: 1 })} type="number" className='form-control' />
                {errors.radius && <small className='d-block text-danger'>* Enter radius</small>}

                <label>range of people:</label>
                <input {...register("rangePeople", { required: true, minLength: 1 })} type="number" className='form-control' />
                {errors.rangePeople && <small className='d-block text-danger'>* Enter radius</small>}

                <label>Phone:</label>
                <input {...register("phone", { required: true, minLength: 2 })} type="tel" className='form-control' />
                {errors.phone && <small className='d-block text-danger'>* Enter valid phone, min 9 chars</small>}


                <p>anonymous?</p>
                <p {...register("anonymous", { required: true })} className='btn btn-success' onClick={() => setAnomusBtn(true)}>yes</p>
                <p {...register("anonymous", { required: false })} className='btn btn-danger' onClick={() => setAnomusBtn(false)}>no</p>

                <br />
                <button className='btn btn-danger mt-4'>Sign up</button>

            </form>
        </div>
    )
}
