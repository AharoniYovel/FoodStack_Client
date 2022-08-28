import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Trafic from '../../adminSuper_comps/trafic';
import SpinerLoader from '../../helpers/spinerLoader/spinerLoader';
import NewPathLink from './newPathLink';

export default function EmpArea() {

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
                        <div className='row row-cols-2'>

                            <div className='col'>
                                <Trafic />
                            </div>

                            <div className="col">
                                <NewPathLink />
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
