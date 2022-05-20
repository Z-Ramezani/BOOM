import { useEffect, useState } from 'react';
import {Component} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/Footer/footer';
import color from '../assets/images/color.png'
import Input_text from '../components/input_form';
import App from '../App';
// class Login extends Component {
//   render() { 
//     const {userName, setUserName}=this.setState;
//     const {password, setPassword}=this.setState;

//     // let sendData = () => {
//     //     axios.post('http://hidden.pythonanywhere.com/users/login', {userName, password})
//     //         .then(res => {
//     //             App.user = res.data.data;
//     //             console.log(App.user)
//     //             history.push('/')
//     //         })
//     //         .catch(err => console.log(err.data))
//     // }
//     // let history = useHistory();

//     function validateFormFields() {
//         return userName.length > 0 && password.length > 0;
//     }
//     return (
//         <div className='bg-image' style={{backgroundImage:color}}>
//             <Navbar/>
//             <Breadcrumbb is2OrNot='true' first='صفحه اصلی' second='ورود'/>
//             <div className='container flex-column min-vh-100' >
//                 <div className="row d-flex justify-content-center " >  
//                     <form onSubmit={this.handleSubmit}>
//                         <div className="col-md-4">
//                             <form  className="form-control">
//                                 <div className="mb-3">
//                                     <label for="InputEmail1" className="form-label"  style={{fontSize:'1.1vw'}}>نام کاربری</label>
//                                     <Input_text type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label for="InputPassword1" className="form-label"  style={{fontSize:'1.1vw'}}>رمز عبور</label>
//                                     <Input_text type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//                                     <a className='nav-link' href='#' style={{fontSize:'0.7vw',color:'#222222',marginTop:'0%'}} >بازیابی رمز عبور</a>

//                                 </div>
//                                 <div className="mb-3 form-check pull-right">
//                                     <input type="checkbox"  id="Check1" style={{marginRight:'2%'}} />
//                                     <label className="form-check-label me-1" data-ng-model="rememberMe"  style={{fontSize:'0.9vw'}}>مرا به یاد بسپار</label>
//                                 </div>
//                                 <div className="mb-3">
//                                     <Button  width= '100%' height= '5%' text= 'ورود' fontSize='1.5vw' disabled={!validateFormFields()} /*reference=''*//*sholde use axios library for connect backend in next edit*//>
//                                 </div>
//                             </form>
//                         </div>
//                     </form> 
//                 </div>
//             </div>
//             <Footer/>
//         </div>                    
//     );
//   }
// }
 
// export default Login;

const Login = (props) => {

    const {userName, setUserName}=useState("");
    const {password, setPassword}=useState("");

    const navigator = useNavigate();

    let sendData = () => {
        console.log("ASDAASDASDASDd")
        axios.post('http://hidden.pythonanywhere.com/users/login', {userName, password})
            .then(res => {
                App.user = res.data.data;
                console.log('hello');
                navigator('/');
            })
            .catch(err => console.log('not'))
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return ( 
        <div className='bg-image' style={{backgroundImage:color}}>
            <Navbar/>
            <Breadcrumbb is2OrNot='true' first='صفحه اصلی' second='ورود'/>
            <div className='container flex-column min-vh-100' >
                <div className="row d-flex justify-content-center " >  
                    
                        <div className="col-md-4">
                            <form  className="form-control" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label forhtml="InputEmail1" className="form-label"  style={{fontSize:'1.1vw'}}>نام کاربری</label>
                                    <Input_text type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label forhtml="InputPassword1" className="form-label"  style={{fontSize:'1.1vw'}}>رمز عبور</label>
                                    <Input_text type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                    <a className='nav-link' href='#' style={{fontSize:'0.7vw',color:'#222222',marginTop:'0%'}} >بازیابی رمز عبور</a>

                                </div>
                                <div className="mb-3 form-check pull-right">
                                    <input type="checkbox"  id="Check1" style={{marginRight:'2%'}} />
                                    <label className="form-check-label me-1" data-ng-model="rememberMe"  style={{fontSize:'0.9vw'}}>مرا به یاد بسپار</label>
                                </div>
                                <div className="mb-3">
                                    <Button  width= '100%' height= '5%' text= 'ورود' fontSize='1.5vw' onClick={sendData}/>
                                </div>
                            </form>
                        </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Login;
