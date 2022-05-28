import { Component } from 'react';
import NavLink from "./navLink";

class NavLinks extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto"> 
                        <li className="nav-item dropdown rtl">
                            <a className="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-person-circle"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a className="dropdown-item" href="#" style={{fontSize:'0.8vw'}}>اطلاعات حساب کاربری</a></li>
                            <li><a className="dropdown-item" href="#" style={{fontSize:'0.8vw'}}>ثبت آگهی و تیکت</a></li>
                            <li><a className="dropdown-item" href="#" style={{fontSize:'0.8vw'}}>خروج</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" style={{fontSize:'1.1vw'}}>صفحه اصلی</a>
                        </li>
                        <NavLink href="../../Pages/guide" text='راهنمای سایت' />
                        <NavLink  href="#" text='درباره‌ما'/>
                        <ul className="nav navbar navbar-left d-flex d-inline-flex p-0 justify-content-start">
                            <li className="nav-item dropdown rtl">
                            <a className="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:'1.1vw'}}>
                                ثبت نام
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="#" style={{fontSize:'0.8vw'}}>ثبت نام هنرمند یا کارشناس</a></li>
                                <li><a className="dropdown-item" href="#" style={{fontSize:'0.8vw'}}>ثبت نام خریدار</a></li>
                            </ul>
                            </li>
                            <li className="nav-item mx-2">
                            <a className="nav-link" href="#">|</a>
                            </li>
                            <NavLink  href="#" text="ورود"/>
                        </ul>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default NavLinks;