import { Component } from "react";
import { MDBFooter } from 'mdb-react-ui-kit';
import logo from '../assets/images/logo.png';

class Footer extends Component {
    render() {
        return(
          <div className="sticky-bottom ">
            <div className="d-flex justify-content-center">
              <hr style={{height:'2px', width:'75%', borderWidth:'0', color:'#222222', backgroundColor:'#222222'}}></hr>
            </div>
            <MDBFooter className='text-center text-lg-start text-muted'>
            <hr class="mt-2 mb-3"/>
            <section className='d-flex justify-content-center justify-content-lg-between p-1 border-bottom'> 
                <div className='container text-center text-md-start'>
                  <div className='col-md-4 col-md-offset-3  mx-1'>
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
                    <nav className="navbar navbar-expand-lg navbar-light">
                      
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

              <a className="navbar-brand" href="#" /*style={{marginLeft:'20px', marginTop:'5px'}}*/>
                <img 
                  className="img-fluid"
                  src={logo}
                  alt='React Bootstrap logo'
                  loading='lazy'
                  style={{width:"35%"}}
                />
              </a>
            </section>
            <div className='text-center p-1' style={{ backgroundColor:"#f9ffff" }}>
              © تمامی حقوق محفوظ است
            </div>
          </MDBFooter>
          </div>
        
        )
    }
}

export default Footer;