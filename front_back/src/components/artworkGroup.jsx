import {Component} from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
// import x from "../assets/ig.jpg";
import ArtworkAdMainPage from '../components/artworkAdMainPage';

class ArtworkGroup extends Component {
    state = { 
        ads : []
     } 
     async componentDidMount(){
        const response = await axios.get('http://hidden.pythonanywhere.com/advertisment/view_advertisements/');
        console.log(response.data);
        this.setState({ads : response.data});
     }

    render() { 
        return (
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-4" > 
            {
                this.state.ads.map((ad)=>{
                    return(
                        <div className='col-4'>
                            <ArtworkAdMainPage 
                            image={ad.image_1} 
                            length_in_cm={ad.length_in_cm} 
                            width_in_cm={ad.width_in_cm}
                            artworkName={ad.name} 
                            artistName={ad.artist} 
                            cost={ad.price} 
                            //ladder
                            to={`/artworkGroup/${ad.id}`}/>
                        </div>
                    )
                })
            }
            </div>
        );
    }
}
export default ArtworkGroup;  

// const ArtworkGroup = (props) => {
//     const [value, setValue] = useState([]);
//     return (
//         <div>
//             <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">  
//                 <div className='col'>
//                     <Link className="nav-link" to="artwokAd"><ArtworkAdMainPage/></Link>
//                 </div>
//                 <div className='col'>
//                     <Link className="nav-link" to="artwokAd"><ArtworkAdMainPage/></Link>
//                 </div>
//                 <div className='col'>
//                     <Link className="nav-link" to="artwokAd"><ArtworkAdMainPage/></Link>
//                 </div>      
//             </div>
//        </div>
//       );
//      }

// export default ArtworkGroup;