import React from 'react'
import { Link } from 'react-router-dom'
import "./header_footer.css"

export default function HeaderClient(props) {
    return (
        <header className='container-fluid bg-warning'>
            <nav className='container'>
                <ul className='nav p-2'>

                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/loginEmployees'>Login Employees</Link></li>
                    <li><Link to='/registration'>Registration Volunteers</Link></li>
                    <li><Link to='/registrationDon'>Registration Donates</Link></li>

                </ul>
            </nav>
        </header>
    )
}
