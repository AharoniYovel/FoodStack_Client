import React from 'react'
import { GiSelfLove } from 'react-icons/gi'
import { Link } from 'react-router-dom'

export default function Strip() {


    return (
        <div className='container-fluid strip'>
            <div className='container text-light'>
                <div className="row">

                    <div className='col-md-12 text-center'>
                        <h1 className='mt-5'>Welcome to FOOD STACK<GiSelfLove style={{ color: 'rgba(255, 0, 115, 0.989)' }} className='display-1' /></h1>
                    </div>

                    <div className='col-md-6 text-center'>asdasd</div>

                    <div className='regDon col-md-6 text-center'>
                        <p>want to reg?</p>
                        <Link to='/registrationDon'>click here</Link>
                    </div>


                </div>
            </div>
        </div>
    )
}
