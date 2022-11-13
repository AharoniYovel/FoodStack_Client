import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ClientContext } from '../context/context';
import PathItemForList from './pathItemForList';

export default function PathsListOfVol() {

    const { pathList, doApiGetPathsList } = useContext(ClientContext);

    const [pathsListOfVol, setPathsListOfVol] = useState([]);


    const params = useParams();

    useEffect(() => {
        doApiGetPathsList();
        filterPathsList();
    }, [pathList])


    const filterPathsList = async () => {
        let volPathsList = pathList.filter(path => path.volunteerID._id === params.volId);
        setPathsListOfVol(volPathsList);
    }

    return (
        <div className='container-fluid'>
            <div className='container'>
                <h2 className='display-4 my-4 text-center py-4'>Paths list</h2>
                <div className="row">
                    {pathsListOfVol.length === 0 ?

                        <h2 className='display-4 my-4 text-center py-4 fw-bolder text-danger'>VOLUNTEER has no paths :(</h2>
                        :
                        pathsListOfVol.map((item, i) => {
                            return (
                                < PathItemForList key={i} item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
