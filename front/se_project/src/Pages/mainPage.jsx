import {Component} from 'react';
import Navbar from '../components/navBar/navBar';
import Breadcrumbb from '../components/breadcrumb';
import Footer from '../components/footer';
import ArtworkGroup from '../components/artworkGroup';
import HeaderSlide from '../components/header-slide';
class MainPage extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <HeaderSlide/>
                <Breadcrumbb is1OrNot='true' first='صفحه اصلی'/>
                <div className='d-flex flex-column min-vh-100'>
                    <div className='container w-75 p-3'>
                        <ArtworkGroup/>
                        <ArtworkGroup/>
                        <ArtworkGroup/>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}
 
export default MainPage;