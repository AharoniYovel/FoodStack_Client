import React, { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../context/context';

export default function Trafic() {

    const { empCount, doApigetCountEmp, volCount, doApigetCountVol, donCount, doApigetCountDon } = useContext(ClientContext);


    useEffect(() => {
        doApigetCountEmp();
        doApigetCountVol();
        doApigetCountDon();
    }, [empCount, volCount, donCount])



    return (
        <React.Fragment>

            <h1 className='text-center traficTitle'>Trafic</h1>
            <ul className="list-group col-2 mx-auto">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Employees
                    <span className="badge bg-danger rounded-pill">{empCount}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Volunteers
                    <span className="badge bg-warning rounded-pill">{volCount}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Donates
                    <span className="badge bg-success rounded-pill">{donCount}</span>
                </li>
            </ul>


        </React.Fragment>

    )
}
