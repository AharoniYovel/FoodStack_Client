import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';
import { API_URL, doApiGet, doApiMethod, VOLUNTEERS } from '../services/apiService';

export default function EditVol() {

    const [volunteer, setVolunteer] = useState({});

    const [loading, setLoading] = useState(false);

    const [anomusBtn, setAnomusBtn] = useState(true);

    // ! state that prevent to show btn to block multi req...
    const [fade, setFade] = useState(false);

    let { register, handleSubmit, formState: { errors } } = useForm();


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
        let url = API_URL + VOLUNTEERS + "/volunteerInfoByEmp/" + params.id;
        try {
            let resp = await doApiGet(url);
            setVolunteer(resp.data);
        }

        catch (err) {
            console.log(err.response);
            toast.warning("There's error try again");
        }

    }

    const onSub = (_dataBody) => {
        console.log(_dataBody);
        doApiEdit(_dataBody);
    }

    const doApiEdit = async (_dataBody) => {
        setFade(true);

        _dataBody.anonymous = anomusBtn;
        let url = API_URL + VOLUNTEERS + "/volEdit/" + volunteer._id;
        try {
            let resp = await doApiMethod(url, "PUT", _dataBody);
            if (resp.data.modifiedCount == 1) {
                toast.success("Volunteer updated");
                nav(-1);
            }

        }

        catch (err) {
            if (err.response.data.code == 11000) {
                toast.warning("email already in system");
            }
            console.log(err.response);
            toast.warning("There's error try again");
        }
        setFade(false);
    }


    const onDelClick = async (_idDel) => {
        let url = API_URL + VOLUNTEERS + "/delVol/" + _idDel;
        try {
            let resp = await doApiMethod(url, "delete");
            if (resp.data.deletedCount == 1) {
                toast.success("Volunteer deleted")
                nav(-1);
            }
        }

        catch (err) {
            console.log(err);
            toast.warning("there problem to delete, try refresh the page");
        }
    }

    return (
        <div className='container-fluid'>
            <div className='container col-md-5'>
                <h1 className='text-center p-3'>Edit "{volunteer.fullName}"</h1>


                {volunteer._id && loading ?
                    <form onSubmit={handleSubmit(onSub)} className='p-3 border border-dark rounded-5'>

                        <button onClick={() => { window.confirm("Are you sure?") && onDelClick(volunteer._id) }} type='button' className='float-end badge bg-danger'>Delete</button>

                        <br />

                        <label>Email</label>
                        <input defaultValue={volunteer.email} {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="text" className='form-control' />
                        {errors.email && <small className='d-flex text-danger'>* Enter valid email</small>}

                        <label>City:</label>
                        <input defaultValue={volunteer.city} {...register("city", { required: true, minLength: 2 })} type="text" className='form-control' />
                        {errors.city && <small className='d-block text-danger'>* Enter city</small>}

                        <label>Phone:</label>
                        <input defaultValue={volunteer.phone} {...register("phone", { required: true, minLength: 9 })} type="text" className='form-control' />
                        {errors.phone && <small className='d-flex text-danger'>* Enter valid phone</small>}

                        <label>Radius:</label>
                        <input defaultValue={volunteer.radius} {...register("radius", { required: true, minLength: 1 })} type="number" className='form-control' />
                        {errors.radius && <small className='d-block text-danger'>* Enter radius</small>}

                        <label>Range of people:</label>
                        <input defaultValue={volunteer.rangePeople} {...register("rangePeople", { required: true, minLength: 1 })} type="number" className='form-control' />
                        {errors.rangePeople && <small className='d-block text-danger'>* Enter number above 0</small>}

                        <br />

                        <div className='border p-1 rounded'>
                            <p>Anonymous? :  {volunteer.anonymous ? "Yes" : "No"}</p>
                            <div className="form-check">
                                <input {...register("anonymous", { required: true })} onClick={() => setAnomusBtn(true)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" >
                                    Yes
                                </label>
                            </div>
                            <div className="form-check">
                                <input {...register("anonymous", { required: false })} onClick={() => setAnomusBtn(false)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" >
                                    No
                                </label>
                            </div>
                        </div>


                        {/* //! (fade)prevent from user or admin to send multi request to server & to shut it down */}
                        {!fade && <button onClick={() => { window.confirm("Are you sure?") }} className='btn btn-warning mt-3'>Edit volunteer</button>}
                        <button className='btn btn-dark mt-3 ms-5' onClick={() => {
                            window.confirm("are you sure?") && nav(-1);
                        }} type="button">Back</button>
                    </form>
                    :
                    <SpinerLoader />

                }
            </div>
        </div >
    )
}
