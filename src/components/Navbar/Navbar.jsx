import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const links = <>
  <li><NavLink to={'/'}>Home</NavLink></li>
  <li><NavLink to={"/dashbord"}>DashBord</NavLink></li>
  </>



  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <h1>Book Nest</h1>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div> 
  );
};

export default Navbar;