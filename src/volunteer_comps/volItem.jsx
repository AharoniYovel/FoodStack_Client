import React from 'react'

export default function VolItem({ item }) {


    return (
        <div className='col p-3'>
            <ul className='border border-success'>
                <h2>name: {item.fullName}</h2>
                <li>short id : {item.short_id}</li>
                <li>role: {item.role}</li>
                <li>email: {item.email}</li>
                <li>city: {item.city}</li>
                <li>phone: {item.phone}</li>
                <li>radius: {item.radius}</li>
                <li>rangePeople: {item.rangePeople}</li>
                <li>anonymous? : {item.anonymous ? "Yes" : "No"} </li>
            </ul>
        </div>
    )
}
