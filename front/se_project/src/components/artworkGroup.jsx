import {Component} from 'react';
import ArtworkAdMainPage from '../components/artworkAdMainPage';

// class ArtworkGroup extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <div>
//                 <div class="row row-cols-1 row-cols-md-3 g-4 mb-4">    
//                     <div className='col'>
//                         <ArtworkAdMainPage/>
//                     </div>
//                     <div className='col'>
//                         <ArtworkAdMainPage/>
//                     </div>
//                     <div className='col'>
//                         <ArtworkAdMainPage/>
//                     </div>      
const ArtworkGroup = (props) => {

    return (
        <div>
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">    
                    <div className='col'>
                        <ArtworkAdMainPage/>
                    </div>
                    <div className='col'>
                        <ArtworkAdMainPage/>
                    </div>
                    <div className='col'>
                        <ArtworkAdMainPage/>
                    </div>      
                     
            </div>
       </div>
      );
     }
 

 
export default ArtworkGroup;