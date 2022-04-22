import {Component} from 'react';
import Button from './components/button';
import headerSlide from './components/header-slide';
import 'bootstrap';
import logo from './assets/logo.png';

class App extends Component {
  
  render() { 
    return (
      <>
      
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
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
                  <li className="nav-item">
                    <a className="nav-link" href="#">ثبت نام</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">ورود</a>
                  </li>
                </ul>
              </div>
              
              <a className="navbar-brand" href="#">
                <img
                  src={logo}
                  height='30'
                  alt='React Bootstrap logo'
                  loading='lazy'
                />
              </a>
            </div>  
            
          </nav>
      </>
    )
  }
}
 
export default App;
