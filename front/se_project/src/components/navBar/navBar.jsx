import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Component } from "react";
import logo from '../../assets/images/logo.png';
import '../navBar/navBar.css';
import NavLink from "./navLink";
import NavLinks from "./navLinks";
import {Outlet, Link} from 'react-router-dom';

// class NavBar extends Component {
//     render() {
//         return(
//           <div>
//             <nav className="navbar navbar-expand-lg navbar-light p-0" style={{backgroundColor:"#ECFDFD"}}>
//             <div class="container-fluid">
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                   <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <NavLinks/>
//                 <a className="navbar-brand d-flex justify-content-end" href="#">
//                 <img 
//                   className="img-fluid"
//                   src={logo}
//                   alt='logo'
//                   loading='lazy'
//                   style={{width:"9%"}}
//                 />
//               </a>
//               </div>
//             </nav>
//             <Outlet />
//           </div>
//         )
//     }
// }

// export default NavBar;

const NavBar = (props) => {
  return ( 
      <div>
        <nav className="navbar navbar-expand-lg navbar-light p-0" style={{backgroundColor:"#ECFDFD"}}>
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <NavLinks/>
            <a className="navbar-brand d-flex justify-content-end">
            <img 
              className="img-fluid"
              src={logo}
              alt='logo'
              loading='lazy'
              style={{width:"9%"}}
            />
            </a>
          </div>
        </nav>
        <Outlet />
      </div>
   );
}
export default NavBar;