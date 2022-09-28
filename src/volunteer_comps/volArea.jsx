import React from 'react'
import { Link } from 'react-router-dom';
import AuthComp from '../comps/authComp';
import VolInfo from './volInfo'

export default function VolArea() {

    return (
        <div className='container-fluid'>
            <AuthComp />
            <div className='container'>
                <div className="row row-cols-md-2 row-cols-1 g-5">

                    <div className='col'>
                        <Link className='NewPathLink text-white text-decoration-none fs-1' to='/volunteer/addNewPathToVol'>Add new path</Link>
                    </div>

                    <div className='col'>
                        <VolInfo />
                    </div>

                </div>
            </div>
        </div>
    )
}
