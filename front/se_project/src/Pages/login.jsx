import React, {Component} from 'react';
import Button from '../components/button';
import Navbar from '../components/navBar/navBar';

class Login extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <Navbar/>
            <div className='container'>
                <div className="row d-flex justify-content-center" >  
                    <div className="col-md-3">
                        <form  className="form-control me_2 ">
                            <div className="mb-3">
                                <label for="InputEmail1" className="form-label">نام کاربری</label>
                                <input type="text" className="form-control" id="userNameInput" />
                            </div>
                            <div className="mb-3">
                                <label for="InputPassword1" className="form-label">رمز عبور</label>
                                <input type="password" className="form-control" id="InputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="Check1" style={{direction: "ltr"}}/>
                                <label className="form-check-label" for="Check1">مرا به یاد بسپار</label>
                            </div>
                            <Button width= '337px' height= '49px' text= 'ورود' /*reference=''*//*sholde use axios library for connect backend in next edit*//>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        ); 
    }
}
 
export default Login;