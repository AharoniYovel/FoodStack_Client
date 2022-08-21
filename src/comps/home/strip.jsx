import React from 'react'
import { GiSelfLove } from 'react-icons/gi'
import MultiActionAreaCardForDon from './multiActionAreaCardForDon'
import MultiActionAreaCardForVol from './multiActionAreaCardForVol'

export default function Strip() {


    return (
        <div className='container-fluid strip'>
            <div className='container text-light'>

                <div className='col-md-12 text-center title'>
                    <h1 className='p-5'>Welcome to FOOD STACK<GiSelfLove style={{ color: 'rgba(255, 0, 115, 0.989)' }} className='display-1' /></h1>
                </div>

                <div className="row row-cols-md-2 row-cols-1 g-3">



                    <div className="col-md-6 d-flex justify-content-center h-auto">
                        <MultiActionAreaCardForDon />
                    </div>


                    <div className="col-md-6 d-flex justify-content-center h-auto">
                        <MultiActionAreaCardForVol />
                    </div>

                </div>
            </div>
        </div>
    )
}
