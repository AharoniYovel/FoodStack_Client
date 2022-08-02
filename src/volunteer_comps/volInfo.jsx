import React, { useContext, useEffect } from 'react'
import { ClientContext } from '../context/context';

export default function VolInfo() {

    const { volInfo, doApiVolInfo } = useContext(ClientContext);

    useEffect(() => {
        doApiVolInfo();
    }, [volInfo])


    return (
        <div className='container col-md-4 border border-danger p-2'>
            <ul>
                <h2>name: {volInfo.fullName}</h2>
                <li>short id : {volInfo.short_id}</li>
                <li>role: {volInfo.role}</li>
                <li>email: {volInfo.email}</li>
                <li>city: {volInfo.city}</li>
                <li>phone: {volInfo.phone}</li>
                <li>radius: {volInfo.radius}</li>
                <li>rangePeople: {volInfo.rangePeople}</li>
                <li>anonymous? : {volInfo.anonymous ? "Yes" : "No"} </li>
            </ul>
        </div>

    )
}
