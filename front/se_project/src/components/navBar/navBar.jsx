import { Component } from "react";
import logo from '../../assets/images/logo.png';
import '../navBar/navBar.css';

class navBar extends Component {
    render() {
        return(
          <div>
            <nav className="navbar navbar-expand-lg navbar-light p-0" style={{backgroundColor:"#ECFDFD"}}>
            
              <div className="container-fluid"> 
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link waves-effect waves-light">
                        <i className="bi bi-person-circle"></i>
                      </a>
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
                    <li className="nav-item" >
                      <a className="nav-link" href="#">ثبت نام</a>
                    </li>
                    <li>
                      <a className="nav-link" href="#">|</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">ورود</a>
                    </li>
                  </ul>
                </div>
                
                <a className="navbar-brand" href="#">
                  <img
                    className="img-fluid float-left"
                    src={logo}
                    height='30'
                    alt='logo'
                    loading='lazy'
                    style={{width:"10%"}}
                  />
                </a>
              </div>  
            </nav>
          </div>
        )
    }
}

export default navBar;