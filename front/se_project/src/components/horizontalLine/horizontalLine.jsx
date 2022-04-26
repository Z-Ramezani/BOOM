import {Component} from 'react';
import '../horizontalLine/horizontalLine.css'

class HorizontalLine extends Component {

    state = {  } 
    render() { 
        return (
            <div className="text-hr">
                <span class="text-hr__text">Right Aligned</span>
                <span class="text-hr__text">{this.props}</span>
            </div>
                
        )
    }
}

export default HorizontalLine;