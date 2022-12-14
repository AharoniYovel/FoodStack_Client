import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiMethod, TOKEN_NAME, VOLUNTEERS } from '../services/apiService';
import { toast } from "react-toastify";
import { FaRegCheckSquare } from 'react-icons/fa';
import { ClientContext } from '../context/context';



export default function Registration() {

    let { register, getValues, handleSubmit, formState: { errors } } = useForm();
    const nav = useNavigate();

    const { doApiVolInfo } = useContext(ClientContext);


    const [anomusBtn, setAnomusBtn] = useState(true);

    const onSubReg = (_bodyData) => {
        doApiReg(_bodyData);
    }

    const doApiReg = async (_bodyData) => {
        try {

            let loginObj = {
                email: _bodyData.email,
                password: _bodyData.password
            }
            
            _bodyData.anonymous = anomusBtn;
            delete _bodyData.email2;
            let url = API_URL + VOLUNTEERS + "/reg";


            let resp = await doApiMethod(url, "post", _bodyData);

            if (resp.data._id) {
                await loginAfterReg(loginObj);
                nav("/volunteer");
                toast.success("Thank you for help the world!");
            }
        }

        catch (err) {
            // The way to collect err in axios
            console.log(err.response);
            toast.error("User or Password wrong");
        }
    }


    const loginAfterReg = async (_loginObj) => {

        try {
            let url = API_URL + VOLUNTEERS + "/login";
            let resp = await doApiMethod(url, 'post', _loginObj);

            if (resp.data.token) {
                localStorage.setItem(TOKEN_NAME, resp.data.token);
                localStorage.setItem("Name", resp.data.volunteer.fullName);
                await doApiVolInfo();
            }
        }

        catch (err) {
            console.log(err.response);
            toast.warning("there problem to login first time, try refresh the page");
        }
    }

    return (
        <div className='container-fluid backRound'>
            <div className='container col-md-5'>
                <h2 className='text-center p-3'>Registration Volunteers</h2>

                <form onSubmit={handleSubmit(onSubReg)} className='p-3 border border-dark rounded-5'>

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
                    <input {...register("phone", { required: true, minLength: 9, maxLength: 10 })} type="tel" className='form-control' />
                    {errors.phone && <small className='d-block text-danger'>* Enter valid phone, min 9 chars,max 10</small>}
                    <br />

                    <p>anonymous?</p>
                    <div className="form-check">
                        <input  {...register("anonymous", { required: true })} onClick={() => setAnomusBtn(true)} className="form-check-input" type="radio" name="flexRadioDefault" required id="flexRadioDefault1" />
                        <label className="form-check-label" >
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input {...register("anonymous", { required: false })} onClick={() => setAnomusBtn(false)} className="form-check-input" type="radio" name="flexRadioDefault" required id="flexRadioDefault2" />
                        <label className="form-check-label" >
                            No
                        </label>
                    </div>

                    <br />
                    <button className='btn btn-success mt-4'>Sign Up<FaRegCheckSquare className='ms-2 fs-4' /></button>

                </form>
                <br />
            </div>
        </div>
    )
}
