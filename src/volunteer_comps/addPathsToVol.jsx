import React, { useContext, useEffect } from 'react'
import { ClientContext } from '../context/context';
import ItemPath from './itemPath';

export default function AddPathsToVol() {

    const { pathsForVol, doApiGetPathForVol } = useContext(ClientContext);

    useEffect(() => {
        doApiGetPathForVol();
    }, [pathsForVol])






    return (
        <div className='container-fluid'>
            <div className='container'>
                <h2 className='display-4 my-4 text-center py-4'>Available  paths</h2>
                <div className="row">

                    {pathsForVol.map((item, i) => {
                        return (
                            <ItemPath key={item._id} item={item} />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
