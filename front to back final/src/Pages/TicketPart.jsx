import {Component} from 'react';
import Button from '../components/button';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/Footer/footer';
import HorizontalLine from '../components/horizontalLine/horizontalLine';
import SetArtworkAdInfo from '../components/ArtworkAdInfo/SetArtworkAdInfo';
import ShowArtworkAdCost from '../components/ArtworkAdInfo/showArtworkAdCost';
import { instance } from '../api/InstanceAPI';

class TicketPart extends Component {
    setValueIncrease=()=>{
        this.setState({count: this.state.count + 1});
    }

    setValueDecrease=()=>{
        this.setState({count: this.state.count - 1});
    }


    state = { 
        count:0,
				ads: ["1"]
     } 

		 async componentDidMount() {
			const res = await instance.get("advertisment/24/update_advertisementes")
			console.log(res);
			this.setState({ ads: res })
		 }


		handleEdit = async (ad) => {
			const res = await instance.put(`advertisment/24/update_advertisementes/${ad.id}`, ad)
			console.log("updated:", res);
			const updatedAd = [...this.state.ads]
			const index = updatedAd.indexOf(ad)
			updatedAd[index] = {...ad}
			this.setState({ ads: updatedAd })
		}

		handleDelete = async (ad) => {
			const res = await instance.delete(`advertisment/24/delete_advertisementes/${ad.id}`)
			const newAds = this.state.ads.filter(a => a.id !== ad.id)
			this.setState({ ads: newAds })
		}


    render() { 
        return (
            <div>
                <Navbar/>
                <Breadcrumbb is2OrNot='true' first='حساب کاربری' second='ثبت آگهی و تیکت'/>
                <div className='d-flex flex-column min-vh-100'>
                    <HorizontalLine value='تیکت'/>
                    <div className='container w-75 p-3'>
                        <div className='d-flex mb-3'>
                            <label className="form-label ps-2 mt-2"  style={{fontSize:'1.1vw'}}>تعداد تیکت باقیمانده</label>
                            <input type="text" className="form-control" disabled value={this.state.count} style={{width:'3.5vw', height:'auto' , backgroundColor:'#f9ffff'}} ></input>
                        </div>
                        <Button width='auto' height='auto' fontSize='1.17vw' text='خرید تیکت' dir='LTR' onClick={this.setValueIncrease}/>
                    </div>
                    <HorizontalLine value='آگهی اثر هنری'/>

									
												<div>
                        <div className='container w-75 p-3 shadow bg-white rounded mb-5'>
                            <SetArtworkAdInfo/>
                            <div style={{marginRight:'3.5%'}}>
                                <Button width= 'auto' height= 'auto' fontSize='1.17vw' text= 'ارسال درخواست ثبت آگهی' dir='LTR' onClick={this.setValueDecrease}/>
                            </div>
                        </div>
                        <div className='container w-75 p-3 shadow bg-white rounded mb-5'>
                            <ShowArtworkAdCost/>
							{this.state.ads.map( (ad, index) => {
			return(
							<div className='d-flex' style={{marginRight:'2%'}}>
									<div className='ms-2'  key={index}>
											<Button width= 'auto' height= 'auto' fontSize='1.17vw' text= 'ویرایش'  onClick={() => {this.handleEdit(ad)}} />
									</div>
									<div className='ms-2'  key={index}>
											<Button width= 'auto' height= 'auto' fontSize='1.17vw' text= 'حذف'  onClick={() => {this.handleDelete(ad)}}/>
									</div>
									<Button width= 'auto' height= 'auto' fontSize='1.17vw' text= 'خرید نردبان' onClick={this.setValueDecrease}/>
							</div>
			)
									}
										)}
                        </div>
                    </div>
								

                    <Footer/>
                </div>
            </div>
        );
    }
}
 
export default TicketPart;