import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ClientContext } from '../context/context';
import { TOKEN_NAME } from '../services/apiService';
import "./header_footer.css"

export default function HeaderClient() {

    const nav = useNavigate();

    const { logOutBtn, setLogOutBtn } = useContext(ClientContext);

    useEffect(() => {
        if (localStorage.getItem(TOKEN_NAME)) {
            setLogOutBtn(true);
        }
        else { setLogOutBtn(false); }
    }, [logOutBtn])


    const onLogOut = () => {
        setLogOutBtn(false);
        localStorage.removeItem(TOKEN_NAME);
        nav("/login")
        alert("log out see you soon!")
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

                    </ul>

                    {logOutBtn ?
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
