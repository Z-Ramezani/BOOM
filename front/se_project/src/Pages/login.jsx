import {Component} from 'react';
import Button from '../components/button';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/footer';

class Login extends Component {
  render() { 
    const {names, setNames}=this.setState;
    const {phone, setPhone}=this.setState;
    const {password, setPassword}=this.setState;



    return (
        <div>
            <Navbar/>
            <Breadcrumbb is2OrNot='true' first='صفحه اصلی' second='ورود'/>
            <div className='container flex-column min-vh-100'>
                <div className="row d-flex justify-content-center " >   
                    <div className="col-md-3">
                        <form  className="form-control" style={{marginTop: 'auto'}}>
                            <div className="mb-3">
                                <label for="InputEmail1" className="form-label">نام کاربری</label>
                                <input type="text" className="form-control" id="userNameInput" />
                            </div>
                            <div className="mb-3">
                                <label for="InputPassword1" className="form-label">رمز عبور</label>
                                <input type="password" className="form-control" id="InputPassword1" />
                            </div>
                            <div className="mb-3 form-check pull-right">
                                <input type="checkbox"  id="Check1"/>
                                <label className="form-check-label" data-ng-model="rememberMe">مرا به یاد بسپار</label>
                            </div>
                            <Button  width= '337px' height= '49px' text= 'ورود' fontSize='23px' /*reference=''*//*sholde use axios library for connect backend in next edit*//>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>                    
    );
  }
}
 
export default Login;
