import { Component } from 'react';

const CarouselItemss = (props) => {
    return ( 
        <div>
            <div class="col-md-12"  style={{margin:'auto'}}>
                <img src={props.src} className='img-responsive' media-simple="true" style={{height:'10vw',width:'10vw'}}/>
                <div style={{fontSize:'1.2vw'}}><strong>
                    {props.textone}
                </strong></div>  
                <div style={{fontSize:'1vw'}}>
                    {props.texttwo}
                </div>
            </div>
        </div>
    );
}
export default CarouselItemss;