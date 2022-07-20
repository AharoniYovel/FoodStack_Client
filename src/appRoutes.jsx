import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VolunteersList from './admin_comps/volunteersList';
import HeaderClient from './comps/headerClient';
import Home from './comps/home';
import Login from './comps/login';
import ContextAndStates from './data_comps/contextAndStates';


export default function AppRoutes() {
    return (
        <BrowserRouter>

            <HeaderClient />

            <Routes>
                
                    <Route index element={<Home />} />
                    <Route path='/login' element={<Login />} />

                    {/* admin */}
                    <Route path='/admin/volList' element={<VolunteersList />} />
               
            </Routes>
        </BrowserRouter>
    )
}
