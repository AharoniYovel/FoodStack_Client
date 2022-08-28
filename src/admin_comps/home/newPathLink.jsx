import { Link } from 'react-router-dom'
import React from 'react'

export default function NewPathLink() {
    return (
        <div className='NewPathLink'>
            <Link className='text-decoration-none' to='/employee/addPathArea'>
                <h1>Add New Path</h1>
            </Link>
        </div>
    )
}
