import {Component} from 'react';
import { instance } from '../api/InstanceAPI';

class ExpertOpinion extends Component {

	state = { 
		comment: ""
} 

	 async componentDidMount() {
			const res = await instance.get("advertisment/review/product/3")
			console.log(res);
			this.setState({ comment: res })
		 }


 
    render() { 
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
}
 
export default ExpertOpinion;