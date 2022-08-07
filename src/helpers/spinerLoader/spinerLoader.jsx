import React from 'react'
import "./spinerLoader1.css";

export default function SpinerLoader() {

    return (
        <div className='spinner mx-auto m-5'>
            Loading
            <div className='spinner-sector spinner-sector-red'></div>
            <div className='spinner-sector spinner-sector-blue'></div>
            <div className='spinner-sector spinner-sector-green'></div>
            <div className='spinner-sector spinner-sector-purple'></div>
        </div>
    )
}
