import { Component } from 'react';
import NavLink from "./navLink";
import {Link} from 'react-router-dom';

// class NavLinks extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <div>
                // <div className="collapse navbar-collapse" id="navbarSupportedContent">
                //     <ul className="navbar-nav ml-auto"> 
                //         <li class="nav-item dropdown rtl">
                //             <a class="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                //             <i className="bi bi-person-circle"></i>
                //             </a>
                //             <ul class="dropdown-menu dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                //             <li><a class="dropdown-item" href="#" style={{fontSize:'0.8vw'}}>اطلاعات حساب کاربری</a></li>
                //             <li><a class="dropdown-item" href="#" style={{fontSize:'0.8vw'}}>ثبت آگهی و تیکت</a></li>
                //             <li><a class="dropdown-item" href="#" style={{fontSize:'0.8vw'}}>خروج</a></li>
                //             </ul>
                //         </li>
                //         <li className="nav-item">
                //             <a className="nav-link active" aria-current="page" href="#" style={{fontSize:'1.1vw'}}>صفحه اصلی</a>
                //         </li>
                //         <NavLink href="../../Pages/guide" text='راهنمای سایت' />
                //         <NavLink  href="#" text='درباره‌ما'/>
                //         <ul className="nav navbar navbar-left d-flex d-inline-flex p-0 justify-content-start">
                //             <li className="nav-item dropdown rtl">
                //             <a class="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:'1.1vw'}}>
                //                 ثبت نام
                //             </a>
                //             <ul class="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                //                 <li><a class="dropdown-item" href="#" style={{fontSize:'0.8vw'}}>ثبت نام هنرمند یا کارشناس</a></li>
                //                 <li><a class="dropdown-item" href="#" style={{fontSize:'0.8vw'}}>ثبت نام خریدار</a></li>
                //             </ul>
                //             </li>
                //             <li className="nav-item mx-2">
                //             <a className="nav-link" href="#">|</a>
                //             </li>
                //             <NavLink  href="#" text="ورود"/>
                //         </ul>
                //     </ul>
                // </div>
//             </div>
//         );
//     }
// }
 
// export default NavLinks;


const NavLinks = (props) => {
    return ( 
        <div>
            <div>
                {/* Fix this line */}
            <div className=" navbar-collapse" id="navbarSupportedContent"> 
                <ul className="navbar-nav ml-auto"> 
                    <li className="nav-item dropdown rtl">
                        Testtttt
                        {/* <link class="nav-link" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                        <i className="bi bi-person-circle"></i>
                        {/* </link> */}
                        <ul className="dropdown-menu dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                        {/* <li><link class="dropdown-item" to="#" style={{fontSize:'0.8vw'}}>اطلاعات حساب کاربری</link></li> */}
                        {/* <li><link class="dropdown-item" to="#" style={{fontSize:'0.8vw'}}>ثبت آگهی و تیکت</link></li> */}
                        {/* <li><link class="dropdown-item" to="#" style={{fontSize:'0.8vw'}}>خروج</link></li> */}
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#" style={{fontSize:'1.1vw'}}>صفحه اصلی</Link>
                    </li>
                    {/* <NavLink to="../../Pages/guide" text='راهنمای سایت' />
                    <NavLink  to="#" text='درباره‌ما'/> */}
                    <ul className="nav navbar navbar-left d-flex d-inline-flex p-0 justify-content-start">
                        <li className="nav-item dropdown rtl">
                        <Link className="nav-link" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:'1.1vw'}}>
                            ثبت نام
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                            {/* <li><link class="dropdown-item" to="#" style={{fontSize:'0.8vw'}}>ثبت نام هنرمند یا کارشناس</link></li> */}
                            {/* <li><link class="dropdown-item" to="#" style={{fontSize:'0.8vw'}}>ثبت نام خریدار</link></li> */}
                        </ul>
                        </li>
                        <li className="nav-item mx-2">
                        {/* <link className="nav-link" to="#">|</link> */}
                        </li>
                        {/* <NavLink  to="#" text="ورود"/> */}
                    </ul>
                </ul>
            </div>
        </div>
        </div>
     );
}
 
export default NavLinks;