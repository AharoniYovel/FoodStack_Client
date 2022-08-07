import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { TOKEN_NAME } from '../services/apiService';
import { toast } from "react-toastify";


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
        <header className='container-fluid bg-info'>
            <h1>Admin</h1>
            <nav className='container'>
                <div className="row justify-content-between align-items-center">

                    <ul className='nav p-2 col-auto'>

                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/employee/volList'>Volunteers list</Link></li>
                        <li><Link to='/employee/donList'>Donates list</Link></li>

                    </ul>

                    {localStorage[TOKEN_NAME] &&
                        <div div className='col-auto'>
                            <button onClick={onLogOut} className='badge bg-danger'>Log out</button>
                        </div>
                    }

                    <React.Fragment></React.Fragment>

                </div>

            </nav>
        </header >
    )
}
