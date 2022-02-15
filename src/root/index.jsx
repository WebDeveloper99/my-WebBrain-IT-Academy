

import React from 'react';
import { Routes, useLocation, Route, Navigate } from 'react-router-dom'
import { Container } from './style';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer';
import { navbarData } from '../utilits/PageOneData';
import Settings from '../components/Settings';

const Root = (props) => {
    
    return <React.Fragment>
        <Container>
            <Settings/>            
            <Routes>
                <Route path={'/'}  element={<Navbar color={props.color} />} >
                <Route path={'/'}  element={<Footer color={props.color} />} >
                    {
                        navbarData.map(({id, path, Comp})=>{
                            return(
                                  <Route key={id} path={path} element={<Comp color={props.color} />} />
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


