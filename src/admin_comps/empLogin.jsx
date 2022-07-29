import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiMethod, EMPLOYEES, TOKEN_NAME } from '../services/apiService';


export default function EmpLogin() {

    const nav = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSub = (_bodyData) => {
        console.log(_bodyData);
        doApiEmpLogin(_bodyData);
    }

    const doApiEmpLogin = async (_bodyData) => {
        try {
            let url = API_URL + EMPLOYEES + "/login";
            let resp = await doApiMethod(url, "post", _bodyData);
            console.log(resp.data);

            if (resp.data.token) {
                localStorage.setItem(TOKEN_NAME, resp.data.token);
                nav("/employee/volList");
            }
        }

        catch (err) {
            console.log(err.response);
            alert("User or Password wrong");
        }
    }


    return (
        <React.Fragment>
            <div className='container'>

                <h1>Login Employees</h1>
                <form onSubmit={handleSubmit(onSub)} className='col-md-6 p-3 shadow'>

                    <label>Email:</label>
                    <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} required type="email" className='form-control' />
                    {errors.email && <small className='d-flex text-danger'>* Enter valid mail</small>}

                    <label>Password:</label>
                    <input {...register("password", { required: true, minLength: 3 })} required type="password" className='form-control' />
                    {errors.password && <small className='d-flex text-danger'>* Enter valid password (min 3 chars)</small>}


                    <button className='btn btn-info mt-3'>Log in</button>

                </form>
            </div>
        </React.Fragment>
    )
}
