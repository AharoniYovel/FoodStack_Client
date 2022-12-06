import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ClientContext } from '../context/context';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';
import PathItemForList from './pathItemForList';

export default function PathsListOfVol() {

    const { pathList, doApiGetPathsList } = useContext(ClientContext);

    const [filterAr, setFilterAr] = useState([]);

    const [pathsListOfVol, setPathsListOfVol] = useState([]);

    const [loading, setLoading] = useState(false);

    const params = useParams();

    useEffect(() => {
        doApiGetPathsList();
        filterPathsWithNoVol();
    }, [pathList])

    const timeOut = () => {
        setLoading(true);
    }

    const filterPathsWithNoVol = async () => {
        let filter = pathList.filter(path => path.volunteerID !== null);
        setFilterAr(filter);
        await filterPathsList();
    }

    const filterPathsList = async () => {
        let volPathsList = filterAr.filter(path => path.volunteerID._id === params.volId);
        setPathsListOfVol(volPathsList);
        setTimeout(timeOut, 1500);
    }

    return (
        <div className='container-fluid'>
            <div className='container'>
                <h2 className='display-4 my-4 text-center py-4'>Paths list</h2>
                <div className="row">


                    {!loading ?

                        <SpinerLoader />
                        :

                        pathsListOfVol.length === 0 ?

                            <h2 className='display-4 my-4 text-center py-4 fw-bolder text-danger'>VOLUNTEER has no paths 😥</h2>
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
