import { Component, useEffect, useState } from 'react';
import NavLink from "./navLink";
import {Link, useLocation} from 'react-router-dom';
import '../navBar/navLinks.css';
import logic from '../../logic';
import axios from 'axios';

const NavLinks = (props) => {
    // const history = useHistory();
    const location = useLocation();
    const [url, setUrl] = useState(null);
    useEffect(()=> {
        setUrl(location.pathname);
    }, [location]);

    const [navbarUserIsLogged, setnavbarUserIsLogged] = useState(false);
    useEffect(() => {
        (async () => {
        const loggedIn = await logic.isUserLoggedIn;
        if (loggedIn) setnavbarUserIsLogged(true);
        })();
    }, [navbarUserIsLogged]);

    const [auth, setAuth] = useState(false);



    function requireAuth() {
    axios.post("http://localhost:3001/checkLogged")
    .then(function (response) { 
    if (response.data.user) {
        setAuth(true);
        return true;
    }else{
        setAuth(false);
        return false;
    }
    })
    }

    return ( 
        <div>
            <div>
                {/* Fix this line */}
            <div className=" navbar-collapse" id="navbarSupportedContent"> 
                <ul className="navbar-nav ml-auto"> 
                    <li className="nav-item dropdown rtl">
                        <Link className={"nav-link " + ((url === "/artistProfile" || url === "/TicketPart") ?"active" : "")} to="#" activeStyle id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-person-circle"></i>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><Link className="dropdown-item" to="../../artistProfile" style={{fontSize:'0.8vw'}}>اطلاعات حساب کاربری</Link></li>
                        <li><Link className="dropdown-item" to="../../TicketPart" style={{fontSize:'0.8vw'}}>ثبت آگهی و تیکت</Link></li>
                        <li><Link className="dropdown-item" to="#" style={{fontSize:'0.8vw'}}>خروج</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className= {"nav-link " + (url === "/mainPage" ?"active" : "")} aria-current="page" to='../../mainPage' style={{fontSize:'1.1vw'}}>صفحه اصلی</Link>
                    </li>
                    <Link to='../../Guide' className={"nav-link " + (url === "/Guide" ?"active" : "")} >راهنمای سایت</Link>
                    <Link  to="../../AboutUs" className={"nav-link " + (url === "/AboutUs" ?"active" : "")}>درباره‌ما</Link>
                    <ul className="nav navbar navbar-left d-flex d-inline-flex p-0 justify-content-start">
                        {!props.navbarUserIsLogged ? (
                            <>
                                <li className="nav-item dropdown rtl" >
                                    <Link className={"nav-link " + ((url === "/artistSignUp" || url === "/buyerSignUp") ?"active" : "")} to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:'1.1vw'}}>
                                        ثبت نام
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="../../artistSignUp" style={{fontSize:'0.8vw'}}>ثبت نام هنرمند یا کارشناس</Link></li> 
                                        <li><Link className="dropdown-item" to="../../buyerSignUp" style={{fontSize:'0.8vw'}}>ثبت نام خریدار</Link></li>
                                    </ul>
                                    </li>
                                    <li className="nav-item mx-2">
                                    <Link className="nav-link disabled" to="#">|</Link>
                                </li>
                            </>
                        ) : <></>
                    }
                       
                        <Link  to="../../Login" className={"nav-link " + (url === "/Login" ? "active": "")}>ورود</Link>
                        
                    </ul>
                </ul>
            </div>
        </div>
        </div>
     );
}
 
export default NavLinks;