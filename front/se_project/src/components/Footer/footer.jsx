import { Component } from "react";
import { MDBFooter } from 'mdb-react-ui-kit';
import logo from '../../assets/images/logo.png';
import FooterIcon from "./footerIcon";
// import { Nav } from "react-bootstrap";
import NavLink from "../navBar/navLink";

const Footer = (props) => {
  return (  
    <div className="mt-auto navbar-fixed-bottom">
    <div className="sticky-bottom" style={{ backgroundColor:"#f9ffff"}}>
      <div className="d-flex justify-content-center">
        <hr style={{height:'0.11vw', width:'75%', borderWidth:'0', color:'#222222', backgroundColor:'#222222'}}></hr>
      </div>
      <MDBFooter className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-1 border-bottom'> 
            <div className='container text-center text-md-start'>
              <FooterIcon/>

              <div className='row' style={{marginRight:'18.6%'}}>
                <nav className="navbar navbar-expand-lg navbar-light">
                  
                  <ul className="navbar-nav">
                      <NavLink href="#" text='تماس با ما'/>
                      <NavLink href="#" text='سوالات متداول'/>
                      <NavLink href="#" text='قوانین'/>
                      <NavLink href="#" text='پیشنهادات و انتقادات'/>
                  </ul>
                </nav>
              </div>
            </div>

            <a className="navbar-brand" href="#" style={{marginLeft:'14%', marginTop:'0.5vw', marginRight:'-14vw'}}>
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
  );
}
 
export default Footer;