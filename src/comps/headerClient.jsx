import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TOKEN_NAME } from '../services/apiService';
import "./header_footer.css";
import { toast } from "react-toastify";
import { GiSelfLove } from 'react-icons/gi'


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
        <header className='container-fluid'>

            <Link className='float-start m-2 logoSite' to='/'>FOOD STACK<GiSelfLove style={{ color: 'rgba(255, 0, 115, 0.989)' }} className='display-6' /></Link>
        
            <nav className='container'>

                <div className="row justify-content-between align-items-center">

                    <ul className='nav p-2 col-auto mx-auto'>


                        <li><Link to='/loginEmployees'>Login Employees</Link></li>
                        <li><Link to='/registration'>Registration Volunteers</Link></li>
                        <li><Link to='/registrationDon'>Registration Donates</Link></li>

                    </ul>

                    {localStorage[TOKEN_NAME] ?
                        <div className='col-auto'>
                            <button onClick={onLogOut} className='badge bg-danger'>Log out</button>
                        </div>
                        :

                        <div className='col-auto'>
                            <Link className='badge fs-5 logOutBtn' to='/login'>Log in</Link>
                        </div>
                    }

                </div>
            </nav>
        </header>
    )
}
