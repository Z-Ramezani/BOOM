import {Component} from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import x from "../assets/ig.jpg";
import ArtworkAdMainPage from '../components/artworkAdMainPage';


class ArtworkGroup extends Component {
    state = { 
        ads : []
     } 

     async componentDidMount(){
        const response = await axios.get('http://hidden.pythonanywhere.com/advertisment/view_advertisements');
        this.setState({ads : response.data.data});
     }

    render() { 
        return (
            <div /* className="row row-cols-1 row-cols-md-3 g-4 mb-4" */> 
            {
                this.state.ads.map((ads)=>{
                    return(
                        <div className='col-4'>
                            <ArtworkAdMainPage image={ads.image_1} size={ads.size} artworkName={ads.name} artistName={ads.artist} cost={ads.price} to={`/artworkGroup/${ads.id}`}/>
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