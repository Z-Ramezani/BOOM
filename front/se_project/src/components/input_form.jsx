import {Component} from 'react';

class Input_text extends Component {
    state = {  } 
    render() { 
        return (
            <div class="mx-auto">
                <input type= {this.props.type} className='form-control' required ></input> 
            </div>
            
        );
    }
}
 
export default Input_text;