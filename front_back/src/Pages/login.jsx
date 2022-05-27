import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Button from "../components/button";
import Breadcrumbb from "../components/breadcrumb";
import Navbar from "../components/navBar/navBar";
import Footer from "../components/Footer/footer";
import color from "../assets/images/color.png";
// import InputText from "../components/input_form";
import axios from "axios";
import axiosInstance from "../api/axios";

// import { instance } from "../api/InstanceAPI";

const url = 'http://hidden.pythonanywhere.com/users/login';

const Login = () => {
  // const navigator = useNavigate();

  const [username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
		try{
			const res = await axios.post(url, {
				username,password
			})
      localStorage.setItem('token' , res.data.token);
      // navigator(`/app`);
      // window.location = '/buyerSignUp';
			console.log(res);
		} catch(e) {
      alert('please first create an account');
			console.log(e.response);
		}
  };

  return (
    <div className="bg-image" style={{ backgroundImage: color }}>
      <Navbar />
      <Breadcrumbb is2OrNot="true" first="صفحه اصلی" second="ورود" />
      <div className="container flex-column min-vh-100">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-4">
            <form className="form-control"  onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
								htmlFor='userName' 
								className='form-label'                  
                  style={{ fontSize: "1.1vw" }}
                >
                  نام کاربری
                </label>
                <input
                  type="text"
									className='form-input'
									id='userName'
									value={username}
                  onChange={(e) => setUsername(e.target.value)}
									style={{width:"100%", border:"1px solid #979797", borderRadius:"5px", outline:"none"}}
                />

              </div>

              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="form-label"
                  style={{ fontSize: "1.1vw" }}
                >
                  رمز عبور
                </label>
                <input
                  type="text"
									className='form-input'
									id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
									style={{width:"100%", border:"1px solid #979797", borderRadius:"5px", outline:"none"}}

                />
                <a
                  className="nav-link"
                  href="/"
                  style={{
                    fontSize: "0.7vw",
                    color: "#222222",
                    marginTop: "0%",
                  }}
                >
                  بازیابی رمز عبور
                </a>
              </div>

              <div className="mb-3 form-check pull-right">
                <input
                  type="checkbox"
                  id="Check1"
                  style={{ marginRight: "2%" }}
                />
                <label
                  className="form-check-label me-1"
                  data-ng-model="rememberMe"
                  style={{ fontSize: "0.9vw" }}
                >
                  مرا به یاد بسپار
                </label>
              </div>

              <div className="mb-3">
                <button style={{width:"100%", height:"35px",  fontSize:"1.5vw", backgroundColor:"#BB1542", border:"none", borderRadius:"5px", color:"#fff"}}   type="submit" > ورود </button>
			
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;

