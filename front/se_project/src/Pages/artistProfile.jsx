import {Component} from 'react';
import Button from '../components/button';
import Input_text from '../components/input_form';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/footer';
import ResetButton from '../components/resetButton';

class ArtistProfile extends Component {
  render() { 
    const {names, setNames}=this.setState;
    const {codeNumber, setcodeNumber}=this.setState;
    const {birthay, setBirthay}=this.setState;
    const {phone, setPhone}=this.setState;
    const {email, setEmail}=this.setState;
    const {address, setAddress}=this.setState;
    const {password, setPassword}=this.setState;
    const {showNumber, setShowNumber}=this.setState;


    return (
        <div className='d-flex flex-column min-vh-100'>
            <Navbar/>
            <Breadcrumbb is2OrNot='true' first='حساب کاربری' second='اطلاعات حساب کاربری'/>
            <form>
                    <div>  

                        <div className='row mb-2'>     
                            <div class='col row '>
                                <label className='col-4 col-form-label'>نام و نام‌خانوادگی</label>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className='col row'>
                                <label className='col-4 col-form-label'>کدملی</label>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div class="col row ">
                                <label  class="col-4 col-form-label ">سال تولد</label>
                            </div>
                        </div> 

                        <div className='row mb-2'>
                            <div className='col row'>
                                <label className='col-4 col-form-label'>شماره تماس</label>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className="row col">
                                <label  class="col-sm-4 col-form-label">ایمیل</label>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div class="row col ">
                                <label  class='col-4 col-form-label'>راه ارتباطی جهت نمایش در آگهی</label>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div class="row col">
                                <label  class='col-4 col-form-label'>آدرس</label>
                                
                        </div>

                        <div className='row mb-2'>
                            <div class="row col">
                                <label class="col-sm-4 col-form-label">رمز عبور جدید</label>
                            </div>
                        </div>      
            </div>
            
    );
  }
}
 
export default ArtistProfile;
