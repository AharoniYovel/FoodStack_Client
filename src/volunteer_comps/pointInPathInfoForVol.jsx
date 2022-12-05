import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CustomizedListForDon from '../helpers/cardMetirial/CustomizedListForDon';
import { API_URL, doApiGet, PATHS } from '../services/apiService';
import { FaWaze } from 'react-icons/fa'
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';


export default function PointInPathInfoForVol() {

    const params = useParams();

    const [loading, setLoading] = useState(false);

    const [path, setPath] = useState([]);

    useEffect(() => {
        doApigetPathInfo();
    }, [])

    const doApigetPathInfo = async () => {
        setLoading(true);
        let apiUrl = API_URL + PATHS + "/pathInfo/" + params.idPath;
        let resp = await doApiGet(apiUrl);
        setPath(resp.data);
        setLoading(false);
    }

    return (
        <div className='container'>
            {loading ?
                <SpinerLoader />
                :
                <div className='mt-4'>
                    <div className="text-center">
                        <a className='btn btn-info mx-auto fw-bolder' target='_black' href={`https://www.waze.com/ul?ll=32.018229%2C34.84453&navigate=yes&zoom=17`}>Navigate Hemed
                            <FaWaze className='text-white fs-1 ms-2' />
                        </a>
                    </div>


                    <div className="row g-4 row-cols-md-3 row-cols-1 p-5">
                        {path.map((item, i) => {
                            return (
                                <div key={i} className='col'>
                                    <CustomizedListForDon itemProp={item.donateId} pointProp={item} />
                                </div>
                            )
                        })}
                    </div>

                    <div className="text-center mb-3">
                        <a className='btn btn-info mx-auto fw-bolder' target='_black' href={`https://waze.com/ul?favorite=home&navigate=yes`}>Navigate Home
                            <FaWaze className='text-white fs-1 ms-2' />
                        </a>
                    </div>
                </div>
            }
        </div>
    )
}




