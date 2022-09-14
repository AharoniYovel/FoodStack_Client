import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthComp from '../comps/authComp';
import VolInfo from './volInfo'

export default function VolArea() {

    const nav = useNavigate();


    return (
        <div className='container-fluid'>
            <AuthComp />
            <div className='container'>
                <div className="row row-cols-2">

                    <div className='col'>
                        <VolInfo />
                    </div>

                    <div className='col'>
                        <Link className='NewPathLink text-white text-decoration-none fs-1' to='/volunteer/addNewPathToVol'>Add new path</Link>
                    </div>


                </div>
            </div>
        </div>
    )
}
