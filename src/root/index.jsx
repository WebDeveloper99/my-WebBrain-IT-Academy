

import React from 'react';
import { Routes, useLocation, Route, Navigate } from 'react-router-dom'
import { Container } from './style';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer';
import { navbarData } from '../utilits/PageOneData';

const Root = () => {

    const location = useLocation();
    return <React.Fragment>
        <Container>
            <Routes>
                <Route path={'/'}  element={<Navbar/>} >
                <Route path={'/'}  element={<Footer/>} >
                    {
                        navbarData.map(({id, path, Comp})=>{
                            return(
                                  <Route key={id} path={path} element={<Comp/>} />
                            )
                        })
                    }
                    <Route path='/' element={<Navigate to={'/asosiy'} />} />
                    <Route path='*' element={<h1 style={{margin: '100px 650px'}} >404</h1>} />
                </Route>
                </Route>
            </Routes>
        </Container>
    </React.Fragment>;
};

export default Root;


