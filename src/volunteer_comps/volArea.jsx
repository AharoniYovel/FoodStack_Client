import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import VolInfo from './volInfo'

export default function VolArea() {

    const nav = useNavigate();


    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className="row row-cols-2">

                    <div className='col'>
                        <VolInfo />
                    </div>

                    <div className='col NewPathLink'>

                        <Link className='text-white text-decoration-none fs-2' to='/volunteer/addNewPathToVol'>Add new path</Link>

                    </div>


                </div>
            </div>
        </div>
    )
}
