import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ClientContext } from '../context/context';
import CustomizedListForEmp from '../helpers/cardMetirial/CustomizedListForEmp';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';

export default function EmpsList() {

    const { empListAr, doApiListEmp } = useContext(ClientContext);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        doApiListEmp();
        setTimeout(timeOut, 1500);
    }, [empListAr])

    const timeOut = () => {
        setLoading(true);
    }

    return (
        <div className='container'> <br />
            <h1 className='text-center'>Employee List</h1>

            <Link to='/superAdmin/empsList/addEmp' className='btn btn-success'>Add new employee</Link>
            <div className="row g-4 row-cols-md-3 row-cols-1 p-5">

                {loading ?

                    empListAr.map((item, i) => {

                        return (
                            <div key={i} className='col'>
                                <CustomizedListForEmp itemProp={item} />
                            </div>
                        )
                    })
                    :
                    <SpinerLoader />
                }

            </div>

        </div>
    )
}
