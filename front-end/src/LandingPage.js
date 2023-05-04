import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AjoutStationnements from './component/AjoutStationnements';
import ChercherParking from './component/ChercherParking';
import ConsulterDepenses from './component/ConsulterDepenses';
import ServiceNombre from './component/ServiceNombre';

const LandingPage = () => {
    return (
        <>
            <ul >
                <div >
                    <span >
                        <Link to={'/'} >Home</Link>
                    </span>
                </div>
                <li >
                    <Link to={'/ajoutStationnements'} >ajout Stationnements</Link>
                </li>
                <li >
                    <Link to={'/chercherParking'} >chercher Parking</Link>
                </li>
                <li >
                    <Link to={'/consulterDepenses'} >consulter Depenses</Link>
                </li>
                <li >
                    <Link to={'/serviceNombre'} >service</Link>
                </li>
            </ul>
            <div >
                <Routes>
                    <Route path='/ajoutStationnements' element={<AjoutStationnements />}></Route>
                    <Route path='/chercherParking' element={<ChercherParking />}></Route>
                    <Route path='/consulterDepenses' element={<ConsulterDepenses />}></Route>
                    <Route path='/serviceNombre' element={<ServiceNombre />}></Route>
                </Routes>
            </div>
        </>
    );
};

export default LandingPage;