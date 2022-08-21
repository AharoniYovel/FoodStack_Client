import React, { useEffect, useState } from 'react'
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';
import './home/superArea.css';
import Trafic from './trafic';

export default function SuperArea() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(timeOut, 1000);
    }, [])

    const timeOut = () => {
        setLoading(true);
    }



    return (
        <React.Fragment>
            {loading ?

                <div className='container-fluid'>
                    <div className='container'>
                        <div className='row row-cols-4'>

                            <div className='col'>
                                <Trafic />
                            </div>

                            <div className="col">

                            </div>

                            <div className="col">

                            </div>

                            <div className="col">

                            </div>

                        </div>
                    </div>
                </div>

                :

                <SpinerLoader />

            }
        </React.Fragment >
    )
}
