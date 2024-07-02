import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
    <li className="font-bold text-indigo-800 "> <NavLink to="/">Home</NavLink></li>
    <li className="font-bold text-indigo-800"> <NavLink to="/featuredblog">Hire Me</NavLink> </li>
    <li className="font-bold text-indigo-800"> <NavLink to="/allblog">My Works</NavLink> </li>
   </>
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
        <div className="flex-1">
        <div className="avatar">
  <div className="w-12 rounded-full">
    <img src="https://i.ibb.co/vvvLpjM/2398.jpg" />
  </div></div>
        </div>
        <div className="flex-none">
        <ul className="menu menu-vertical lg:menu-horizontal  rounded-box">
 {
    links
 }
</ul>
        </div>
      </div>
        </div>
    );
};

export default Navbar;