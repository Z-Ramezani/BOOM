import {Component} from 'react';
import { useState } from "react";
import Button from "../components/button";
import Input_text from "../components/input_form";
import Breadcrumbb from "../components/breadcrumb";
import Navbar from "../components/navBar/navBar";
import Footer from "../components/Footer/footer";
import ResetButton from "../components/resetButton";
import axios from "axios";

const url1 = "http://hidden.pythonanywhere.com/users/register/expert";

const ExpertSignUp = () => {
  const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
  const [national_id_number, setNational_id_number] = useState("");
  const [birth_date, setBirth_date] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  //const [gender, setGender]= useState("");
  const [showNumber, setShowNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url1, {
        name,
		lastname,
        national_id_number,
        birth_date,
        phone,
        email,
        address,
        password,
        showNumber,
      });
      localStorage.setItem('token' , res.data.token);
      console.log(res);
    } catch (e) {
      alert('this user exist with this mobile phone!')
      console.log(e.response);
    }
  };

  return ( 
    <div>
        <Navbar/>
        <Breadcrumbb is3OrNot='true' first='صفحه اصلی' second='ثبت‌نام ' third='به عنوان کارشناس'/>
        <div className='d-flex flex-column min-vh-100'>
            <form style={{marginTop: 'auto'}} onSubmit={handleSubmit}>
                <div className='container w-75 p-3 shadow p-3 mb-5 bg-white rounded mt-4' >
                    <div className='row justify-content-center' >
                        <div>  
                            <div className='row mb-2'>
                                <div class='col row '>
                                    <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>نام</label>
                                    <div className='col-8'> 
                                        <Input_text type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                                    </div>
                                </div>
                                <div class='col row '>
                                    <label className='col-sm-3 col-form-label mx-auto' style={{fontSize:'1.1vw'}}>نام خانوادگی</label>
                                    <div className='col-8'> 
                                        <Input_text type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-2'>
                                <div class="col row ">
                                    <label  class="col-4 col-form-label" style={{fontSize:'1.1vw'}}>سال تولد</label>
                                    <div class="col-8">
                                        <Input_text type="date" value={birth_date} onChange={(e)=>setBirth_date(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='col row'>
                                    <label className="col-sm-3 col-form-label mx-auto" style={{fontSize:'1.1vw'}}>شماره تماس</label>
                                    <div className="col-8">
                                        <Input_text type="tel" /*pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"*/ value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className='row '>
                                <div className="row col">
                                    <label  class="col-sm-4 col-form-label" style={{fontSize:'1.1vw'}}>ایمیل</label>
                                    <div class="col-8">
                                        <Input_text type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                <div class="row col ">
                                    <label  class="col-sm-3 col-form-label  mx-auto" style={{fontSize:'1.1vw'}}>راه ارتباطی جهت نمایش در آگهی</label>
                                    <div class="col-8">
                                        <Input_text type="text" value={showNumber} onChange={(e)=>setShowNumber(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-2'>
                            <div className='col row'>
                                    <label className="col-sm-4 col-form-label " style={{fontSize:'1.1vw'}}>کدملی</label>
                                    <div className="col-8">
                                        <Input_text type="number"  min="0" value={national_id_number} onChange={(e)=>setNational_id_number(e.target.value)}/>
                                    </div>
                                </div>
                                <div class="row col">
                                    <label class="col-sm-3 col-form-label mx-auto" style={{fontSize:'1.1vw'}}>رمز عبور</label>
                                    <div class="col-8">
                                        <Input_text type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                    </div>
                                </div>
                               
                            </div>
                            <div className='row mb-2'>
                                <div class="row col">
                                    <label  class="col-sm-3 col-form-label" style={{fontSize:'1.1vw'}}>آدرس</label>
                                    <div class="col-12 me-4">
                                        <Input_text type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                                    </div>
                                </div>
                            </div>     
                        </div>
                    </div>
                </div>
            
                <div className='container w-75 p-3 mb-4' >
                    <div className='justify-content-center mt-0 mx-0' >
                        <div className='d-flex'>
                            <div className='mx-1'>
                                <ResetButton/>
                            </div>
                            <div className='mx-1'>
                                <Button type= 'submit' width= 'auto' height= 'auto' text= 'ثبت‌نام' fontSize='1.17vw'/>
                            </div> 
                        </div>   
                    </div>
                </div>
            </form>
        <Footer/>
        </div>   
    </div> 
 );
};

export default ExpertSignUp;
