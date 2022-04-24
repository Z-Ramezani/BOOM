import { Component } from "react";
import { MDBFooter } from 'mdb-react-ui-kit';
import logo from '../assets/images/logo.png';

class Footer extends Component {
    render() {
        return(
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'> 
              
                <div className='container text-center text-md-start mt-2'>
                  <div className='col-md-2 col-md-offset-3'>
                    <a href='' className='me-4 text-reset'>
                      <i class="bi bi-envelope"></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                      <i class="bi bi-linkedin"></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                      <i class="bi bi-telegram"></i>
                    </a>
                  </div>


                  <div className='row mt-1'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" href="#">تماس با ما</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">سوالات متداول</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">قوانین</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">پیشنهادات و انتقادات</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

              <a className="navbar-brand" href="#">
                <img
                  src={logo}
                  height='50'
                  alt='React Bootstrap logo'
                  loading='lazy'
                />
              </a>
              
            </section>

            
      
            <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
              © تمامی حقوق محفوظ است
            </div>
          </MDBFooter>
        
        )
    }
}

export default Footer;