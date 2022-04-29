import { Component } from "react";
import logo from '../../assets/images/logo.png';
import '../navBar/navBar.css';

class navBar extends Component {
    render() {
        return(
          <div>
            <nav className="navbar navbar-expand-lg navbar-light p-0" style={{backgroundColor:"#ECFDFD"}}>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    
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
                      <a className="nav-link" href="#">راهنمای سایت</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">درباره‌ما</a>
                    </li>
                    
                    <li class="nav-item dropdown rtl">
                      <a class="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ثبت نام
                      </a>
                      <ul class="dropdown-menu dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">ثبت نام هنرمند یا کارشناس</a></li>
                        <li><a class="dropdown-item" href="#">ثبت نام خریدار</a></li>
                      </ul>
                    </li>
                    <li>
                      <a className="nav-link" href="#">|</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">ورود</a>
                    </li>
                  </ul>
                </div>
                
                <a className="navbar-brand d-flex justify-content-end" href="#" style={{marginTop:'-0.4vw',marginLeft:'0.2vw'}}>
                <img 
                  className="img-fluid"
                  src={logo}
                  alt='logo'
                  loading='lazy'
                  style={{width:"9%"}}
                />
              </a>
               
            </nav>
          </div>
        )
    }
}

export default navBar;