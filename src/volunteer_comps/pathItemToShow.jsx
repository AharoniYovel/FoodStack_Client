import React from 'react'
import HouseIcon from '@mui/icons-material/House';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { Link } from 'react-router-dom';




export default function PathItemToShow({ item }) {

    return (
        <div className='col-md-3 p-2'>
            <div className='p-2 border border-dark shadow h-100 rounded-3'>

                <h3>ID of Path: <span className='text-warning'> {item.path_id}</span></h3>
                <h4><HouseIcon className='fs-2' /> Family's:  {item.arr_points_id.length}</h4>
                <h4><LocationCityIcon className='fs-2' /> Citys: {item.arr_citys.map((element, i) => {
                    return (<span key={i}>{element},</span>)
                })}</h4>
                <Link to={"/volunteer/allPaths/pathInfo/" + item._id} className='btn btn-warning float-end m-2'>More info</Link>

            </div>
        </div>
    )
}
