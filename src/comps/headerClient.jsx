import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TOKEN_NAME } from '../services/apiService';
import "./header_footer.css";
import { toast } from "react-toastify";


export default function HeaderClient() {

    const nav = useNavigate();

    const onLogOut = () => {
        let name = localStorage["Name"];
        localStorage.removeItem(TOKEN_NAME);
        localStorage.removeItem("Name");
        nav("/login")
        toast.dark(`Log out, see you soon ${name}!`)
    }

    return (
        <header className='container-fluid bg-warning'>
            <nav className='container'>
                <div className="row justify-content-between align-items-center">

                    <ul className='nav p-2 col-auto'>

                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/loginEmployees'>Login Employees</Link></li>
                        <li><Link to='/registration'>Registration Volunteers</Link></li>
                        <li><Link to='/registrationDon'>Registration Donates</Link></li>
                        <li><Link to='/donatePoint'>point donate</Link></li>

                    </ul>

                    {localStorage[TOKEN_NAME] ?
                        <div className='col-auto'>
                            <button onClick={onLogOut} className='badge bg-danger'>Log out</button>
                        </div>
                        :

                        <div className='col-auto'>
                            <Link className='btn badge bg-success' to='/login'>Log in</Link>
                        </div>
                    }

                </div>
            </nav>
        </header>
    )
}
