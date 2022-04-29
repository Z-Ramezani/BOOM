import { Component } from "react";
import { MDBFooter } from 'mdb-react-ui-kit';
import logo from '../assets/images/logo.png';

class Footer extends Component {
    render() {
        return(
          <div className="mt-auto navbar-fixed-bottom">
          <div className="sticky-bottom" style={{ backgroundColor:"#f9ffff"}}>
            <div className="d-flex justify-content-center">
            <hr style={{height:'0.11vw', width:'75%', borderWidth:'0', color:'#222222', backgroundColor:'#222222'}}></hr>
            </div>
            <MDBFooter className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-1 border-bottom'> 
                <div className='container text-center text-md-start'>
                <div className='col-md-4' style={{marginRight:'1vw'}}>
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

                  <div className='row' style={{marginRight:'7.1vw'}}>
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

                <a className="navbar-brand" href="#" style={{marginLeft:'12.4vw', marginTop:'0.5vw', marginRight:'-14vw'}}>
                <img 
                  className="img-fluid"
                  src={logo}
                  alt='React Bootstrap logo'
                  loading='lazy'
                  style={{width:"35%"}}
                />
              </a>
            </section>
            <div className='text-center' style={{ backgroundColor:"#f9ffff" , fontSize:'1vw'}}>
               <span style={{ fontSize:'1.5vw'}}>©</span>۱۴۰۱  تمامی حقوق محفوظ است  
            </div>
          </MDBFooter>
          </div>
        </div>
        )
    }
}

export default Footer;