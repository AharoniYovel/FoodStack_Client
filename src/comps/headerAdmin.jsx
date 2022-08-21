import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { TOKEN_NAME } from '../services/apiService';
import { toast } from "react-toastify";
import { GiSelfLove } from 'react-icons/gi'



export default function HeaderAdmin() {

    const nav = useNavigate();

    const onLogOut = () => {
        let nickName = localStorage["NickName"]
        localStorage.removeItem(TOKEN_NAME);
        localStorage.removeItem("NickName");
        nav("/loginEmployees");
        toast.dark(`Log out, see you soon ${nickName}!`)
    }

    return (
        <header>
            <div className='container-fluid bg-info'>
                <nav className='container'>
                    <div className="row justify-content-between align-items-center">
                        <Link className='float-start m-2 logoSite col-md-2 col-6' to='/'>FOOD STACK<GiSelfLove style={{ color: 'rgba(255, 0, 115, 0.989)' }} className='display-6' /></Link>

                        <ul className='nav p-2 col-auto'>

                            <li><Link to='/employee/volList'>Volunteers list</Link></li>
                            <li><Link to='/employee/donList'>Donates list</Link></li>
                            {localStorage["NickName"] === "superAdmin" ? <li><Link to='/superAdmin/empsList'>Emps list</Link></li> : null}

                        </ul>

                        {localStorage[TOKEN_NAME] &&
                            <div className='col-auto col-md-2 col-5'>
                                <button onClick={onLogOut} className='badge bg-danger'>Log out</button>
                            </div>
                        }

                    </div>

                </nav>
            </div>
        </header >
    )
}
