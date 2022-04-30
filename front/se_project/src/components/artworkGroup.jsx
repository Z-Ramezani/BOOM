import {Component} from 'react';
import ArtworkAdMainPage from '../components/artworkAdMainPage';

const ArtworkGroup = () => {

    return (
        <div>
                <div class="row row-cols-1 row-cols-md-3 g-4 mb-4">    
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