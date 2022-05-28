import { Component } from 'react';
import Input_text from '../input_form';

class SetArtworkInfo  extends Component {
    state = {  } 
    render() { 
        const {names, setNames}=this.setState;
        const {size, setSize}=this.setState;
        const {method, setMethod}=this.setState;
        const {material, setMaterial}=this.setState;
        const {date, setDate}=this.setState;
        const {cost, setCost}=this.setState;
        return (
            <div className="row g-0 position-relative" dir="LTR">
                <div className="col-md-6 mb-md-0 p-md-4">
                    <form>
                        
                    {/* آپلود همزمان */}
                    <div class="form-group">
                        <div class="col-sm-9">
                            <span class="btn btn-default btn-file">
                                <input id="input-2" name="input2[]" type="file" class="" multiple data-show-upload="false" data-show-caption="true"/>
                                <figcaption class="figure-caption" dir="RTL" style={{marginRight:'0.2vw',fontSize:'1.3vw'}} >
                                    آپلود 5 عکس از اثر
                                </figcaption>
                            </span>
                        </div>
                    </div>

                {/* آپلود جداگانه */}
                        {/* <div class="form-group" style={{width:'23vw', height:'23vw', border:'0.11vw solid #e1e1e1', borderRadius:'0.2vw'}}>
                            <input type="file" class="file" multiple/>
                            <input type="file" class="file" multiple/>
                            <input type="file" class="file" multiple/>
                            <input type="file" class="file" multiple/>
                            <input type="file" class="file" multiple/>

                        </div> */}

                    </form>
                </div>
                <div className="col-md-6 p-4 ps-md-0" dir="RTL">

                    <div className='row justify-content-center'>
                        <div className='row mb-2'>     
                            <div className='col row '>
                                <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>نام اثر</label>
                                <div className='col-8'> 
                                    <Input_text type="text" value={names} onChange={(e)=>setNames(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-2'>     
                            <div className='col row '>
                                <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>ابعاد اثر</label>
                                <div className='col-8'> 
                                    <Input_text type="text" placeholder='80*50 سانتی‌متر' value={size} onChange={(e)=>setSize(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-2'>     
                            <div className='col row '>
                                <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>سبک کار</label>
                                <div className='col-8'> 
                                    <Input_text type="text" value={method} onChange={(e)=>setMethod(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-2'>     
                            <div className='col row '>
                                <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>متریال استفاده شده</label>
                                <div className='col-8'> 
                                    <Input_text type="text" value={material} onChange={(e)=>setMaterial(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-2'>     
                            <div className='col row'>
                                <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>تاریخ ایجاد اثر</label>
                                <div className='col-8'> 
                                    <Input_text type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2 form-group">
                            <label for="exampleFormControlTextarea1" style={{marginBottom:'2%', fontSize:'1.1vw'}}>توضیحات تکمیلی</label>
                            <textarea className="col-4 form-control" id="exampleFormControlTextarea1" rows="3" style={{width:'85%',marginRight:'7%'}}></textarea>
                        </div>
                    
                        <div>
                                <div className='row mb-2'>     
                                    <div className='col row'>
                                        <label className='col-4 col-form-label' style={{marginRight:'0%',marginLeft:'-0.1vw', fontSize:'1.1vw'}}>قیمت</label>
                                        <div className='col-8'style={{width:'64%', fontSize:'1.1vw'}}> 
                                            <Input_text type="text" placeholder='تومان' value={cost} onChange={(e)=>setCost(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default  SetArtworkInfo;