import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderClient from './comps/headerClient';
import Home from './comps/home';
import About from './comps/about';
import Registration from './volunteer_comps/registration';


export default function AppRoutes() {
    return (
        <BrowserRouter>

            <HeaderClient />

            <Routes>

                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/registration' element={<Registration />} />

            </Routes>
        </BrowserRouter>
    )
}
