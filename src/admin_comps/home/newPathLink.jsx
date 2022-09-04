import { Link } from 'react-router-dom'
import React from 'react'

export default function NewPathLink() {
    return (
        <React.Fragment>
            <Link className='text-decoration-none NewPathLink' to='/employee/addPathArea'>
                <h1>Add New Path</h1>
            </Link>
        </React.Fragment>
    )
}
