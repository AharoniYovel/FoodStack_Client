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
        nav("/login");
        toast.dark(`Log out, see you soon ${name}!`);
    }

    return (
        <header className='container-fluid'>


            <nav className='container'>

                <div className="row justify-content-between align-items-center">
                    <Link className='m-2 logoSite col-md-2 col-6' to='/'>FOOD STACK<GiSelfLove style={{ color: 'rgba(255, 0, 115, 0.989)' }} className='display-6' /></Link>

                    <ul className='nav p-2 col-md-7 mx-auto justify-content-center'>

                        {localStorage[TOKEN_NAME] ? <li><Link to='/volunteer'>Personal area</Link></li> : null}

                    </ul>

                    {localStorage[TOKEN_NAME] ?
                        <div className='col-md-2 col-5 ' >
                            <button onClick={onLogOut} className='badge bg-danger float-end'>Log out</button>
                        </div>
                        :

                        <div className='col-md-2 col-5 float-end'>
                            <Link className='badge fs-5 logOutBtn float-end' to='/login'>Login</Link>
                        </div>
                    }

                </div>
            </nav>
        </header>
    )
}
