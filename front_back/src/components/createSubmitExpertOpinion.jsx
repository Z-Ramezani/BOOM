import { useState } from 'react';
import Button from '../components/button';
import Input_text from '../components/input_form';
import { Editor } from 'react-bootstrap-editor';
import {Collapse} from 'react-bootstrap'

const CreateSubmitExpertOpinion = (props) => {

    const [cost, setCost] = useState(0);
    const [send, setSend] = useState("");

    return ( 

        <div className='col-11 p-2'>
            
            <div id="example-collapse-text"className='row' style={{paddingBottom:'1vw'}}>
                <div className='col'>
                    <a className='nav-link' href='#' style={{fontSize:'1.2vw',color:'#BB1542'}} >
                        {/* نام کارشناس از بک گرفته recive from back */}
                    </a>
                </div>
                <div className='row mb-2'>
                    <div className='col row'>
                        <label className='col-form-label' style={{fontSize:'1.2vw', fontWeight:'bold',marginTop:'2.4%'}}>قیمت پیشنهادی:</label>
                        <div className="col-3">
                            <Input_text type="number" min="0.00" max="10000.00" step="0.01" value={cost} onChange={(e)=>setCost(e.target.value)}/>
                        </div>
                        <div className='col-2'>تومان</div>
                    </div>
                </div>
                
                <div className="form-group">
                    <label style={{marginBottom:'1%',marginRight:'1.1vw',fontSize:'1vw'}}>توضیحات تکمیلی</label>
                    <Editor value="<p></p>" onChange={console.log} />
                </div>
                <div className="form-group p-2">
                    <Button width= 'auto' height= 'auto' text= 'ثبت نظر' fontSize='1.17vw' onClick={() => setSend(send)}
                    /*reference=''*//*sholde use axios library for connect backend in next edit*//>
                </div>
                
                {/* ارسال اطلاعات به بک */}
            </div>
        {/* اگر کاربر کارشناس بود نمایش داده شود */}
            
        </div> 
        
        
     );
}
 
export default CreateSubmitExpertOpinion;