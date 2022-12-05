import React, { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../context/context';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';
import ItemPath from './itemPath';

export default function AddPathsToVol() {

    const [loading, setLoading] = useState(false);

    const { pathsForVol, doApiGetPathForVol } = useContext(ClientContext);

    useEffect(() => {
        doApiGetPathForVol();
        setTimeout(timeOut, 1500);
    }, [pathsForVol])


    const timeOut = () => {
        setLoading(true);
    }

    return (
        <div className='container-fluid'>
            <div className='container'>
                <h2 className='display-4 my-4 text-center py-4'>Available  paths</h2>
                <div className="row">

                    {!loading ?
                        <SpinerLoader />
                        :

                        pathsForVol.length === 0 ?
                            <h2 className='display-4 my-4 text-center py-4 fw-bolder text-danger'>There is no a available paths in the system 😥</h2>
                            :
                            pathsForVol.map((item) => {
                                return (
                                    <ItemPath key={item._id} item={item} />
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}
