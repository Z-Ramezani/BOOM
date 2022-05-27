import {Component} from 'react';
import Button from '../components/button';
import InputText from '../components/input_form';
import HorizontalLine from '../components/horizontalLine/horizontalLine';

class UserInformation extends Component {
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
        <div>
            <HorizontalLine value='اطلاعات کاربری'/>
            <form style={{backgroundColor:'#F9FFFF'}}>
                <div className='container w-75 p-3 p-3 rounded mb-5'>
                    <div className='row justify-content-center'>
                      <div className='col-9'>
                        <div className='row mb-2'>     
                            <div className='col row '>
                                <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>نام و نام‌خانوادگی</label>
                                <div className='col-6'> 
                                    <InputText type="text" value={names} onChange={(e)=>setNames(e.target.value)}/>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className='col row'>
                                <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>کدملی</label>
                                <div className='col-6'>
                                    <InputText type="text" value={codeNumber} onChange={(e)=>setcodeNumber(e.target.value)}/>
                                </div>
                            </div>
                        </div>
    
                        <div className='row mb-2'>
                            <div className="col row ">
                                <label  className="col-4 col-form-label" style={{fontSize:'1.1vw'}}>سال تولد</label>
                                <div className='col-6'>
                                    <InputText type="date" value={birthay} onChange={(e)=>setBirthay(e.target.value)}/>
                                </div>
                            </div>
                        </div> 

                        <div className='row mb-2'>
                            <div className='col row'>
                                <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>شماره تماس</label>
                                <div className='col-6'>
                                    <InputText type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className="row col">
                                <label  className="col-sm-4 col-form-label" style={{fontSize:'1.1vw'}}>ایمیل</label>
                                <div className='col-6'>
                                    <InputText type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className="row col ">
                                <label  className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>راه ارتباطی جهت نمایش در آگهی</label>
                                <div className='col-6'>
                                    <InputText type="text" value={showNumber} onChange={(e)=>setShowNumber(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                                    
                        <div className='row mb-2'>
                            <div className="row col">
                                <label  className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>آدرس</label>
                                <div className="col-8">
                                    <InputText type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                                </div>
                            </div>          
                        </div>

                        <div className='row mb-2'>
                            <div className="row col">
                                <label className="col-sm-4 col-form-label" style={{fontSize:'1.1vw'}}>رمز عبور جدید</label>
                                <div className='col-6'>
                                    <InputText type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                            </div>
                        </div>      
                                
                    </div>
                    <form className='col-3 justify-content-end'>
                            <div className="form-group " style={{width:'15vw', height:'15vw', border:'0.11vw solid #e1e1e1', borderRadius:'0.2vw'}}>
                                <input type="file" className="form-control-file"/>
                            </div>
                      </form>
                    <div className='row mb-2' >
                        <div className='justify-content-center mt-0 mx-0' >
                            <div className='d-flex'>
                                <div className='mx-3'>
                                    <Button width= 'auto' height= 'auto' text= 'ویرایش' fontSize='1.17vw'/*reference=''*//*sholde use axios library for connect backend in next edit*//>
                                </div>               
                            </div>   
                        </div>
                    </div>
                    
                    </div>
                </div>
            </form>
        </div>
    )
  }
}

export default UserInformation;