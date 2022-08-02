import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TOKEN_NAME } from '../services/apiService';
import "./header_footer.css"

export default function HeaderClient() {

    const nav = useNavigate();

    const onLogOut = () => {
        localStorage.removeItem(TOKEN_NAME);
        nav("/login");
        alert("log out see you soon!")
    }

    return (
        <header className='container-fluid bg-warning'>
            <nav className='container'>
                <div className="row justify-content-between align-items-center">

                    <ul className='nav p-2 col-auto'>

                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/loginEmployees'>Login Employees</Link></li>
                        <li><Link to='/registration'>Registration Volunteers</Link></li>
                        <li><Link to='/registrationDon'>Registration Donates</Link></li>

                    </ul>

                    <div className='col-auto'>
                        <button onClick={onLogOut} className='badge bg-danger'>Log out</button>
                    </div>

                </div>
            </nav>
        </header>
    )
}
