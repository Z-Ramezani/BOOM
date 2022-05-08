import { Component } from "react";
import logo from '../../assets/images/logo.png';
import '../navBar/navBar.css';
import NavLink from "./navLink";
import NavLinks from "./navLinks";

class NavBar extends Component {
    render() {
        return(
          <div>
            <nav className="navbar navbar-expand-lg navbar-light p-0" style={{backgroundColor:"#ECFDFD"}}>
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <NavLinks/>
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
        )
    }
}

export default NavBar;