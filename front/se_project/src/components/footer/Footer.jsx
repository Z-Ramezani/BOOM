import React from 'react'
import "./Footer.css"
import logo from "../../assets/images/logo.png";


// import { SiGmail } from 'react-icons/si';
// import { GrLinkedinOption } from 'react-icons/gr';
// import { AiOutlineInstagram } from 'react-icons/ai';
// import { FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
	return (
		<div className='footer'>
	<div className='line-2'></div>
			<div className='footer-top'>
				<div className='footer-right'>
					{/* <div className='footer-icons'>
						<SiGmail />
						<GrLinkedinOption />
						<AiOutlineInstagram />
						<FaTelegramPlane />
					</div> */}

					<div className='footer-links'>
						<a className='footer-link' href='/'>تماس با ما</a> | <a className='footer-link' href='/'>سوالات متداول</a> | <a className='footer-link' href='/'>قوانین</a> | <a className='footer-link' href='/'>پیشنهادات و انتقادات</a>
					</div>
				</div>


				<div className='footer-left'>
					<img className="footer-logo" src={logo} alt="logo" />
				</div>
			</div>

			<div className='footer-bottom'>
				<div className='line-1'></div>
				<p style={{fontSize: "12px"}}> همه حقوق محفوظ است &copy; 1401 </p>
			</div>
		</div>
	)
}




