import React, { useContext, useEffect } from 'react'
import { toast } from 'react-toastify';
import { ClientContext } from '../context/context'
import { TOKEN_NAME } from '../services/apiService';

export default function LogOut() {

    const { setVolunteer } = useContext(ClientContext);

    useEffect(() => {
        setVolunteer({ name: "", role: "" });
        let name = localStorage["Name"];
        localStorage.removeItem(TOKEN_NAME);
        localStorage.removeItem("Name");
        toast.dark(`Log out, see you soon ${name}!`);
        window.location.href = "/";

    }, [])


    return (
        <React.Fragment></React.Fragment>
    )
}
