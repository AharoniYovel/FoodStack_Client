import React, { useContext, useEffect } from 'react'
import { ClientContext } from '../context/context';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import EngineeringIcon from '@mui/icons-material/Engineering';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PlaceIcon from '@mui/icons-material/Place';
import ForkLeftIcon from '@mui/icons-material/ForkLeft';

export default function Trafic() {

    const { empCount, doApigetCountEmp, volCount, doApigetCountVol, donCount, doApigetCountDon, pointCount, doApiGetCountPoints, pathCount, doApiGetCountPaths } = useContext(ClientContext);

    useEffect(() => {
        doApigetCountVol();
        doApigetCountDon();
        doApigetCountEmp();
        doApiGetCountPoints();
        doApiGetCountPaths();
    }, [empCount, volCount, donCount, pointCount, pathCount])





    return (
        <React.Fragment>

            <h1 className='text-center traficTitle'>Trafic</h1>
            <ul className="list-group  mx-auto trafic">
                <li className="list-group-item d-flex justify-content-between align-items-center fs-5">
                    <span>{<EngineeringIcon className='fs-2' />} Employees </span>
                    <span className="badge bg-danger rounded-pill">{empCount}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center fs-5">
                    <span>{<DriveEtaIcon className='fs-2' />} Volunteers </span>
                    <span className="badge bg-warning rounded-pill">{volCount}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center fs-5">

                    <span>{<VolunteerActivismIcon className='fs-2' />} Donates</span>
                    <span className="badge bg-success rounded-pill">{donCount}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center fs-5">
                    <span>{<PlaceIcon className='fs-2' />} Points Waiting for grouping</span>
                    <span className="badge bg-secondary rounded-pill">{pointCount}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center fs-5">
                    <span>{<ForkLeftIcon className='fs-2' />} Path active</span>
                    <span className="badge bg-success rounded-pill">{pathCount}</span>
                </li>
            </ul>

        </React.Fragment>
    )
}