import {Component} from 'react';
import '../horizontalLine/horizontalLine.css';

class HorizontalLine extends Component {

    state = {  } 
    render() { 
        return (
            <div className="text-hr text-hr--right">
                <span class="text-hr__text">Right Aligned</span>
                
            </div>
                
        )
    }
}

export default HorizontalLine;