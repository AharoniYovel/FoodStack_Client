import React from 'react';
import HouseIcon from '@mui/icons-material/House';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link } from 'react-router-dom';
import { API_URL, doApiMethod, VOLUNTEERS } from '../services/apiService';
import { toast } from 'react-toastify';
import CallAndDelPath from './callAndDelPath';


export default function PathItemForList({ item }) {


    const FamilysNum = item.arr_points_id.length;

    return (
        <div className='col-md-3 text-white'>
            <div style={{ background: FamilysNum === 0 ? 'red' : 'green' }} className='p-4 border shadow h-100 rounded-5'>


                <h3>Path ID: <span className='text-warning'> {item.path_id}</span></h3>

                <div className='row'>
                    <p className='badge bg-warning fs-6 col-8'>{item.volunteerID.fullName}'s path</p>
                    <div className='col-4'>
                        <a className='float-end ms-2' href={`mailto:${item.volunteerID.email}`}><AlternateEmailIcon className='text-white fs-3' /></a>
                        <a className='float-end' href={`tel:${item.volunteerID.phone}`}><PhoneForwardedIcon className='text-white fs-3' /></a>
                    </div>
                </div>

                <h4><HouseIcon className='fs-2' /> Family's: {FamilysNum === 0 ? <HighlightOffIcon className='fs-2' /> : FamilysNum} </h4>

                {FamilysNum !== 0 ?
                    <h4><LocationCityIcon className='fs-2' /> Citys: {item.arr_citys.map((element, i) => {
                        return (<span key={i}>{element}-</span>)
                    })}</h4>
                    :
                    null
                }

                {FamilysNum !== 0 ?
                    <Link to={'/employee/pathList/pathListOfVol/' + item._id + '/' + item.volunteerID.fullName} className='btn btn-secondary'>More info</Link>
                    :
                    <CallAndDelPath fullName={item.volunteerID.fullName} volunteer={item.volunteerID} idDel={item._id} />
                }

            </div>
        </div>
    )
}