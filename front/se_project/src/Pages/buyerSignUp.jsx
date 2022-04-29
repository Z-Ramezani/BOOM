import {Component} from 'react';
import Button from '../components/button';
import Input_text from '../components/input_form';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/footer';
import ResetButton from '../components/resetButton';

class BuyerSighUp extends Component {
  render() { 
    const {names, setNames}=this.setState;;
    const {phone, setPhone}=this.setState;
    const {password, setPassword}=this.setState;

    function validateFormFields() {
        return password.length > 0 && names.length > 0 && phone.length > 0;
        
    }

    return (
        <div>
            <Navbar/>
            <Breadcrumbb is3OrNot='true' first='صفحه اصلی' second='ثبت‌نام ' third='به عنوان خریدار'/>
            <div className='d-flex flex-column min-vh-100'>
                <form style={{marginTop: 'auto'}}>
                    <div className='container w-75 p-3 shadow mb-5 bg-white rounded' >
                        <div className='row justify-content-center' >
                            <div className='row mb-2'>
                                <div class='col row '>
                                    <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>نام و نام‌خانوادگی</label>
                                    <div className='col-8'> 
                                        <Input_text type="text" value={names} onChange={(e)=>setNames(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='col row'>
                                    <label className="col-sm-3 col-form-label mx-auto" style={{fontSize:'1.1vw'}}>شماره تماس</label>
                                    <div className="col-8">
                                        <Input_text type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-2'>
                                <div class="row col">
                                    <label class="col-sm-4 col-form-label" style={{fontSize:'1.1vw'}}>رمز عبور</label>
                                    <div class="col-8">
                                        <Input_text type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <div class="row col">
                                    <label class="col-sm-3 col-form-label  mx-auto" style={{fontSize:'1.1vw'}}>تکرار رمز عبور</label>
                                    <div class="col-8">
                                        <Input_text type="password"/>
                                    </div>
                                </div>
                            </div>      
                        </div>
                    </div>
                    <div className='container w-75 p-0' >
                        <div className='justify-content-center mt-0 mx-0' >
                            <div className='d-flex'>
                                <div className='mx-1'>
                                    <ResetButton/>
                                </div>
                                <div className='mx-1'>
                                    <Button width= 'auto' height= 'auto' text= 'ثبت‌نام' fontSize='1.17vw' disabled={!validateFormFields()}/*reference=''*//*sholde use axios library for connect backend in next edit*//>
                                </div> 
                            </div>   
                        </div>
                    </div>
                </form>
            <Footer/>
            </div> 
        </div>  
    );
  }
}
 
export default BuyerSighUp;
