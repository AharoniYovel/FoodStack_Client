import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CustomizedListForDon from '../helpers/cardMetirial/CustomizedListForDon';
import { API_URL, doApiGet, PATHS } from '../services/apiService';

export default function PointInPathInfoForVol() {

    const params = useParams();


    const [path, setPath] = useState([]);

    let infoAr = [];
    let pointsAr = [];

    const doApigetPathInfo = async () => {
        let apiUrl = API_URL + PATHS + "/pathInfo/" + params.idPath;
        let resp = await doApiGet(apiUrl);
        setPath(resp.data);
        infoAr.push(path);
        pointsAr.push(infoAr[0].arr_points_id);
        // console.log(pointsAr);
        // console.log(pointsAr[0][0]);
        // console.log(pointsAr[0][1]);
    }

    useEffect(() => {
        doApigetPathInfo();
    }, [infoAr])




    return (
        <div className='container'>
            <h1 className='text-center'>Familys List in Path number: {path.path_id}</h1>

            <div className="row g-4 row-cols-md-3 row-cols-1 p-5">



            </div>
        </div>

    )
}



// {infoAr[0].arr_points_id.map((item, i) => {
//     console.log(item);
//     return (
//         <div key={i} className='col'>
//             <CustomizedListForDon itemProp={item} />
//             {/* <CustomizedListForDon itemProp={item} pointProp={pointAr[i]} /> */}
//         </div>
//     )


// })}
