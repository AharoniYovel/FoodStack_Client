import React from 'react'
import { Link } from 'react-router-dom';

export default function HeaderAdmin() {
    return (
        <header className='container-fluid bg-info'>
            <h1>Admin</h1>
            <nav className='container'>
                <ul className='nav p-2'>

                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/employee/volList'>Volunteers list</Link></li>
                    <li><Link to='/employee/donList'>Donates list</Link></li>

                </ul>
            </nav>
        </header>
    )
}
