import React from 'react'

export default function VolItem({ item }) {


    return (
        <div className='col-md-4 border border-danger p-2 text-center'>

            <h2>name: {item.fullName}</h2>
            <p>short id : {item.short_id}</p>
            <p>role: {item.role}</p>
            <p>email: {item.email}</p>
            <p>city: {item.city}</p>
            <p>phone: {item.phone}</p>
            <p>radius: {item.radius}</p>
            <p>rangePeople: {item.rangePeople}</p>
            <p>anonymous? : {item.anonymous ? "Yes" : "No"} </p>

        </div>
    )
}
