import React from 'react'
import AddPath from '../../admin_comps/addPath'
import GoogleMapForEmp from './googleMapForEmp'

export default function MapForEmpArea() {
    return (
        <React.Fragment>
            <div className="d-flex">
                <div className='col-7'>
                    <GoogleMapForEmp />
                </div>

                <div className='col-5'>
                    <AddPath />
                </div>
            </div>
        </React.Fragment>
    )
}
