import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ClientContext } from '../context/context';
import { API_URL, doApiMethod, TOKEN_NAME, VOLUNTEERS } from '../services/apiService';
import { toast } from "react-toastify";
import './login.css'


export default function Login() {


    const { doApiVolInfo } = useContext(ClientContext);

    const nav = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSub = (_bodyData) => {
        console.log(_bodyData);
        doApiLogin(_bodyData);
    }

    const doApiLogin = async (_bodyData) => {
        try {
            let url = API_URL + VOLUNTEERS + "/login";
            let resp = await doApiMethod(url, "post", _bodyData);
            console.log(resp.data);

            if (resp.data.token) {
                localStorage.setItem(TOKEN_NAME, resp.data.token);
                localStorage.setItem("Name", resp.data.volunteer.fullName)
                await doApiVolInfo();
                nav("/volunteer");
                toast.success(`Welcome back ${resp.data.volunteer.fullName}`)
            }
        }

        catch (err) {
            console.log(err.response);
            toast.error("User or Password wrong");
        }
    }

    return (
        <React.Fragment>

            <div className='container-fluid full-screen-containerVol'>
                <div className='login-container'>

                    <h1 className='login-title'>Welcome</h1>
                    <Link className='text-decoration-none badge bg-secondary float-end fs-6' to='/loginEmployees'>Employee?</Link>
                    <form onSubmit={handleSubmit(onSub)} className='form'>

                        <div className="input-group">
                            <label>Email:</label>
                            <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="email" required />
                            {errors.email && <small className='text-danger'>* Enter valid mail</small>}
                        </div>

                        <div className="input-group">
                            <label>Password:</label>
                            <input {...register("password", { required: true, minLength: 3 })} type="password" required />
                            {errors.password && <small className='text-danger'>* Enter valid password (min 3 chars)</small>}
                        </div>

                        <button className='login-button'>Log in</button>

                    </form>
                </div>
            </div>
        </React.Fragment>

    )
}
