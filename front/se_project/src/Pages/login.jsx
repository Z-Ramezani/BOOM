import React, {Component} from 'react';
import Button from '../components/button';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/footer';
import Breadcrumbb from '../components/breadcrumb';
import Input_text from '../components/input_form';
class Login extends Component {
    render() { 
        const {username, setUsername}=this.setState;
        const {password, setPassword}=this.setState;

        return (
            <div>
                <Navbar/>
                <Breadcrumbb is3OrNot='true' first='صفحه اصلی' second='آگهی اثر' third='اثر'/>
                <div className='container'style={{marginTop:'30px'}}>
                <div className="row d-flex justify-content-center" >  
                    <div className="col-md-3">
                        <form  className="form-control me_2 ">
                            <div className="mb-3">
                                <label for="InputEmail1" className="form-label">نام کاربری</label>
                                <Input_text type='text' value={username} onChange={(e)=>setUsername(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="InputPassword1" className="form-label">رمز عبور</label>
                                <Input_text type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="justify-content-right" id="Check1"/>
                                <label className="mx-2" for="Check1">مرا به یاد بسپار</label>
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