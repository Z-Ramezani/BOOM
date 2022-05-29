import {Component} from 'react';

const ExpertOpinion = (props) => {
    return ( 
        <div className='row' style={{paddingBottom:'1vw'}}>
            <div className='col'>
                <a className='nav-link' href='#' style={{fontSize:'1.2vw',color:'#BB1542'}} >
                    نام کارشناس از بک گرفته و اینجا میاد و قابلیت کلیک داره {/*recive from back*/}
                </a>
            </div>
            <div className='col'>
                <h2 style={{fontSize:'1.2vw', fontWeight:'bold',marginTop:'2.4%'}}>
                    قیمت پیشنهادی:{/*recive from back*/}
                </h2>
            </div>
                <div className="form-group">
                    <label style={{marginBottom:'1%',marginRight:'1.1vw',fontSize:'1vw'}}>توضیحات تکمیلی</label>
                    <textarea className="col-4 form-control"  rows="3" style={{width:'85%',marginRight:'7%'}}></textarea>
                </div>
        </div>
     );
}
 
export default ExpertOpinion;