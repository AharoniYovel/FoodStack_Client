import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';
import { API_URL, doApiGet, doApiMethod, DONATES, PATHS, POINTS } from '../services/apiService';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function EditDon() {

    const [donated, setDonated] = useState({});
    const [loading, setLoading] = useState(false);
    const [anomusBtn, setAnomusBtn] = useState(true);
    const [pathIdValid, setPathIdValid] = useState({});


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
        let url = API_URL + DONATES + "/donInfo/" + params.id;
        try {
            let resp = await doApiGet(url);
            setDonated(resp.data);
            await doApiPathIdValid(resp.data._id);
        }

        catch (err) {
            console.log(err.response);
            toast.warning("There's error try again");
        }

    }

    // * check if there a path that the donated is releated to. Or null or valid pathID
    const doApiPathIdValid = async (_idOfDonated) => {
        let url = API_URL + POINTS + '/pathIdValid/' + _idOfDonated;
        try {
            let resp = await doApiGet(url);
            setPathIdValid(resp.data);
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
        let url = API_URL + DONATES + "/editDon/" + donated._id;
        try {
            let resp = await doApiMethod(url, "PUT", _dataBody);
            if (resp.data.modifiedCount == 1) {
                toast.success("Donated updated");
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
        let url = API_URL + DONATES + "/delDon/" + _idDel;
        try {
            let resp = await doApiMethod(url, "delete");
            if (resp.data.deletedCount == 1) {
                toast.success("Donated deleted")
                await delPoint(_idDel);
                if (pathIdValid.pathId !== null) {
                    await delPointFromPath();
                }

                nav(-1);
            }
        }

        catch (err) {
            console.log(err);
            toast.warning("there problem to delete, try refresh the page");
        }
    }

    const delPoint = async (_idDelOfDon) => {
        try {
            let url = API_URL + POINTS + "/delPoint/" + _idDelOfDon;
            let resp = await doApiMethod(url, "delete");
            if (resp.data.deletedCount == 1) {
                toast.success("Point deleted")
            }
        }

        catch (err) {
            console.log(err);
            toast.warning("there problem to delete point, try refresh the page");
        }
    }

    const delPointFromPath = async () => {

        try {
            let url = API_URL + PATHS + '/delOneDonated/' + pathIdValid.pathId + '/' + pathIdValid._id;
            let resp = await doApiMethod(url, "PUT");
            console.log('resp.data', resp.data);
            console.log("point from pathModel.arr_points_id deleted and his city");
        }

        catch (err) {
            console.log(err);
            toast.warning("there problem to delete point from pathModel, check server");
        }

    }


    return (
        <div className='container col-md-5'>
            <h1 className='text-center p-3'>Edit "{donated.fullName}"</h1>

            {donated._id && loading ?
                <form onSubmit={handleSubmit(onSub)} className='p-3 border border-dark rounded-5'>


                    <Button type='button' onClick={() => { window.confirm("Are you sure?") && onDelClick(donated._id) }} className='float-end badge' variant="outlined" startIcon={<DeleteIcon className='text-danger' />}>
                        Delete
                    </Button>

                    <br />


                    <label>Phone:</label>
                    <input defaultValue={donated.phone} {...register("phone", { required: true, minLength: 9 })} type="text" className='form-control' />
                    {errors.phone && <small className='d-flex text-danger'>* Enter valid phone</small>}

                    <label>Range of people:</label>
                    <input defaultValue={donated.rangePeople} {...register("rangePeople", { required: true, minLength: 1 })} type="number" className='form-control' />
                    {errors.rangePeople && <small className='d-block text-danger'>* Enter number above 0</small>}

                    <label>Status:</label>
                    <select defaultValue={donated.status} {...register("status")} className='form-select'>
                        <option value="pending">Pending</option>
                        <option value="allow">Allow</option>
                    </select>

                    <br />

                    <div className='border p-1 rounded'>
                        <p>Anonymous? :  {donated.anonymous ? "Yes" : "No"}</p>
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
                    {!fade && <button onClick={() => { window.confirm("Are you sure?") }} className='btn btn-warning mt-3'>Edit donated</button>}
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
