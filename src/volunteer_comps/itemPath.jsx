import React from 'react'
import { Link, useParams } from 'react-router-dom';
import HouseIcon from '@mui/icons-material/House';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { API_URL, doApiMethod, PATHS, VOLUNTEERS } from '../services/apiService';
import { toast } from 'react-toastify';


export default function ItemPath({ item }) {

    const params = useParams();



    const doApiAddPath = async (_idOfPath) => {
        try {
            let url = API_URL + VOLUNTEERS + "/addPathToVol";
            let resp = await doApiMethod(url, "PUT", { _idOfPath });
            console.log(resp.data);


        }

        catch (err) {
            console.log(err.response);
            toast.error("User or Password wrong");
        }
    }


    return (
        <div className='col-md-3 p-2'>
            <div className='p-2 border shadow h-100'>
                <Fab onClick={() => { window.confirm("are you sure?") && doApiAddPath(item._id) }} className='float-end' color="secondary" size="medium" aria-label="add">
                    <AddIcon />
                </Fab>

                <h3>ID of Path: <span className='text-warning'> {item.path_id}</span></h3>
                <h4><HouseIcon className='fs-2' /> Family's:  {item.arr_points_id.length}</h4>
                <h4><LocationCityIcon className='fs-2' /> Citys: {item.arr_citys.map((element, i) => {
                    return (<span key={i}>{element},</span>)
                })}</h4>
                {/* <div>Price: {item.create_at}</div> */}
                <Link to={"/volunteer/addNewPathToVol/" + item._id} className='btn btn-info'>More info</Link>

            </div>
        </div>
    )
}
