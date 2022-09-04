import React, { useContext, useEffect } from 'react'
import { ClientContext } from '../context/context';

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
                    Employees
                    <span className="badge bg-danger rounded-pill">{empCount}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center fs-5">
                    Volunteers
                    <span className="badge bg-warning rounded-pill">{volCount}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center fs-5">
                    Donates
                    <span className="badge bg-success rounded-pill">{donCount}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center fs-5">
                    Points Waiting for grouping
                    <span className="badge bg-secondary rounded-pill">{pointCount}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center fs-5">
                    Path active
                    <span className="badge bg-success rounded-pill">{pathCount}</span>
                </li>
            </ul>

        </React.Fragment>
    )
}