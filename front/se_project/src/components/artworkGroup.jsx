import {Component} from 'react';
import { Link } from 'react-router-dom';
import ArtworkAdMainPage from '../components/artworkAdMainPage';

      
const ArtworkGroup = (props) => {

    return (
        <div>
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">    
                    <div className='col'>
                        <Link className="nav-link" to="artwokAd"><ArtworkAdMainPage/></Link>
                    </div>
                    <div className='col'>
                        <Link className="nav-link" to="artwokAd"><ArtworkAdMainPage/></Link>
                    </div>
                    <div className='col'>
                        <Link className="nav-link" to="artwokAd"><ArtworkAdMainPage/></Link>
                    </div>      
                     
            </div>
       </div>
      );
     }
 

 
export default ArtworkGroup;