import {Component} from 'react';
import '../horizontalLine/horizontalLine.css'

class HorizontalLine extends Component {

    state = {} 
    render() { 
        return (
            <div className="text-hr text-hr--right">
                <span className="text-hr__text" style={{fontSize:'1.1vw'}}>{this.props.value}</span> 
            </div> 
        )
    }
}

export default HorizontalLine;