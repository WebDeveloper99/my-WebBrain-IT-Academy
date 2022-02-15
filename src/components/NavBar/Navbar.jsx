

import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { navbarData } from '../../utilits/PageOneData';
import Brand from '../Brand';
import Button from '../Button';
import { NavContainer, LogoTip, NavGroup, NavFooter, Link, Com } from './NavBarStyle';

const Navbar = (props) => {

  const location = useLocation()

  return <div>

    <NavContainer color={props.color} >

      <LogoTip>
        <Brand color={props.color} />
      </LogoTip>
      <NavGroup color={props.color} >
        {
          navbarData.map(({ id, path, title, hidden }) => {
            return !hidden && (
              <ul key={id} >
                <li className='link' >
                  <Link activ={location?.pathname === path} to={path}>{title}</Link>
                </li>
              </ul>
            )
          })
        }
      </NavGroup>
      <NavFooter>
        {/* <Com>
          <Com.Label htmlFor="click">Qiziqarli sayohat</Com.Label>
          <Com.Input id='click' type='checkbox' />
          <Com.Slider />
        </Com> */}
        <Button btnName='Kirish' color={''} width={''} height={''} activ={''} />
      </NavFooter>
    </NavContainer>
    <Outlet />

  </div>
};

export default Navbar;
