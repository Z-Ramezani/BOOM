import { Component } from 'react';
import HorizontalLine from './horizontalLine/horizontalLine';
import Input_text from './input_form';
import Button from './button';
class ExportResume extends Component {
    render() { 
        const {activityfield, setactivityfield}=this.setState;
        const {experience, setExperience}=this.setState;
        return (
            <div>
                <HorizontalLine value='سوابق کاری'/>
                <form>
                    <div className='container w-75 p-3 p-3 rounded mb-5' >
                        <div className='row justify-content-center' style={{backgroundColor:'#F9FFFF'}}>
                            <div className='row mb-2'>     
                                <div class='col row '>
                                    <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>زمینه فعالیت</label>
                                    <div className='col-4'>
                                        <Input_text type="text" value={activityfield} onChange={(e)=>setactivityfield(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-2'>
                                <div className="col row ">
                                    <label  className="col-4 col-form-label" style={{fontSize:'1.1vw'}}>سابقه فعالیت</label>
                                    <div className='col-4'>
                                        <Input_text type="text" value={experience} onChange={(e)=>setExperience(e.target.value)} placeholder="سال"/>
                                    </div>
                                </div>
                            </div>     
                                    
                        </div>
                        
                        < div className='row mb-2' >
                            <div className='justify-content-center mt-0 mx-0' >
                                <div className='d-flex'>
                                    <div className='mx-3'>
                                        <Button width= 'auto' height= 'auto' text= 'ثبت' fontSize='1.17vw'/*reference=''*//*sholde use axios library for connect backend in next edit*//>
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
 
export default ExportResume;