import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import AjoutStationnements from './component/AjoutStationnements';
import ChercherParking from './component/ChercherParking';
import ConsulterDepenses from './component/ConsulterDepenses';
import ServiceNombre from './component/ServiceNombre';
import ShowPage from './component/ShowPage';
import Register from './login forms/Register';
import Login from './login forms/Login';
import { Link } from 'react-router-dom'
const LandingPage = () => {
    const id = useParams()
    const navigation = [
        { name: 'Ajout Stationnements', href: '/ajoutStationnements', current: true },
        { name: 'Chercher Parking', href: '/chercherParking', current: false },
        { name: 'ConsulterDepenses', href: '/consulterDepenses', current: false },
        { name: 'ServiceNombre', href: '/serviceNombre', current: false },
        { name: 'login', href: '/login', current: true },
    ]
    return (
        <>
        <div>
                <header>
                    <h2 class="logo"> Logo</h2>
                    <nav class="navigation">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <button class="btnLogin-popup">Account</button>
                    </nav>
                </header>
        </div> 
                <div className='mt-36 '>
                <Routes>
                    <Route path='/ajoutStationnements' element={<AjoutStationnements />}></Route>
                    <Route path='/chercherParking' element={<ChercherParking />}></Route>
                    <Route path='/consulterDepenses' element={<ConsulterDepenses />}></Route>
                    <Route path='/serviceNombre' element={<ServiceNombre />} />
                    <Route path='/show/:id' element={<ShowPage />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
                </div>
                
        </>
    );
};

export default LandingPage;