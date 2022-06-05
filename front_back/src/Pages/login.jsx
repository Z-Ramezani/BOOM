import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import Breadcrumbb from "../components/breadcrumb";
import Navbar from "../components/navBar/navBar";
import Footer from "../components/Footer/footer";
import color from "../assets/images/color.png";
import Input_text from "../components/input_form";
import axios from "axios";
import axiosInstance from "../api/axios";
import PropTypes from 'prop-types';
import setToken from '../App';

// import { instance } from "../api/InstanceAPI";

const url = 'http://hidden.pythonanywhere.com/users/login';
async function loginUser(credentials) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

 export default function Login({ setToken }) {
  // const navigator = useNavigate();

  const [username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
	// 	try{
	// 		const res = await axios.post(url, {
	// 			username,password
	// 		})
  //     localStorage.setItem('token' , res.data.token);
  //     navigator(`/`);
  //     // window.location = '/';
	// 		console.log(res);
	// 	} catch(e) {
  //     alert('please first create an account');
	// 		console.log(e.response);
	// 	}
  // };

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return ( 
      <div className='bg-image login-wrapper' style={{backgroundImage:color}}>
        <Navbar/>
        <Breadcrumbb is2OrNot='true' first='صفحه اصلی' second='ورود'/>
        <div className='container flex-column min-vh-100' >
            <div className="row d-flex justify-content-center " >  
          
              <div className="col-md-4">
                  <form className="form-control" onSubmit={handleSubmit}>
                      <div className="mb-3">
                          <label htmlFor="InputEmail1" className="form-label"  style={{fontSize:'1.1vw'}}>نام کاربری</label>
                          <Input_text type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                      </div>
                      <div className="mb-3">
                          <label htmlFor="InputPassword1" className="form-label"  style={{fontSize:'1.1vw'}}>رمز عبور</label>
                          <Input_text type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                          <a className='nav-link' href='#' style={{fontSize:'0.7vw',color:'#222222',marginTop:'0%'}} >بازیابی رمز عبور</a>

                      </div>
                      <div className="mb-3 form-check pull-right">
                          <input type="checkbox"  id="Check1" style={{marginRight:'2%'}} />
                          <label className="form-check-label me-1" data-ng-model="rememberMe"  style={{fontSize:'0.9vw'}}>مرا به یاد بسپار</label>
                      </div>
                      <div className="mb-3">
                          <Button type='submit' width= '100%' height= '5%' text= 'ورود' fontSize='1.5vw'/>
                      </div>
                  </form>
              </div>

            </div>
        </div>
        <Footer/>
      </div>
  );
}


Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

