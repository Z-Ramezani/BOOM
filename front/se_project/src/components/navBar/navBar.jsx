import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Component } from "react";
import logo from '../../assets/images/logo.png';
import '../navBar/navBar.css';

const NavBar = () => {
  return ( 
    <div>
            <nav className="navbar navbar-expand-lg navbar-light p-0" style={{backgroundColor:"#ECFDFD"}}>
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    
                    <li class="nav-item dropdown rtl">
                      <a class="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-person-circle"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">اطلاعات حساب کاربری</a></li>
                        <li><a class="dropdown-item" href="#">ثبت آگهی و تیکت</a></li>
                        <li><a class="dropdown-item" href="#">خروج</a></li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">صفحه اصلی</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="../../Pages/guide">راهنمای سایت</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" style={{fontSize:'1.1vw'}}>درباره ما</a>
                    </li>
                    <ul class="nav navbar navbar-left d-flex d-inline-flex p-0 justify-content-start">
                      <li class="nav-item dropdown rtl">
                        <a class="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:'1.1vw'}}>
                          ثبت نام
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                          <li><a class="dropdown-item" href="#" style={{fontSize:'0.8vw'}}>ثبت نام هنرمند یا کارشناس</a></li>
                          <li><a class="dropdown-item" href="#" style={{fontSize:'0.8vw'}}>ثبت نام خریدار</a></li>
                        </ul>
                      </li>
                      <li className="nav-item mx-2">|</li>
                      <li className="nav-item">
                        <a className="nav-link" href="#" style={{fontSize:'1.1vw'}}>ورود</a>
                      </li>
                    </ul>
                  </ul>
                </div>
                
                <a className="navbar-brand d-flex justify-content-end" href="#">
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
          </div>
   );
}
export default NavBar;