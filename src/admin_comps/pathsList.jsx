import React, { useContext, useEffect } from 'react'
import { ClientContext } from '../context/context';
import PathItemForList from './pathItemForList';

export default function PathsList() {

    const { pathList, doApiGetPathsList } = useContext(ClientContext);

    useEffect(() => {
        doApiGetPathsList();
    }, [pathList])

    return (
        <div className='container-fluid'>
            <div className='container'>
                <h2 className='display-4 my-4 text-center py-4'>Paths list</h2>
                <div className="row">

                    {pathList.map((item, i) => {
                        return (
                            <PathItemForList key={i} item={item} />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}