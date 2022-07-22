import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DonatesList from './admin_comps/donatesList';
import VolunteersList from './admin_comps/volunteersList';
import HeaderClient from './comps/headerClient';
import Home from './comps/home';
import Login from './comps/login';
import Registration from './volunteer_comps/registration';


export default function AppRoutes() {
    return (
        <BrowserRouter>

            <HeaderClient />

            <Routes>

                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Registration />} />

                {/* admin */}
                <Route path='/admin/volList' element={<VolunteersList />} />
                <Route path='/admin/donList' element={<DonatesList />} />

            </Routes>
        </BrowserRouter>
    )
}
