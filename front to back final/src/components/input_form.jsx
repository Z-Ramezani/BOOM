import {Component} from 'react';

class InputText extends Component {
    state = {  } 
    render() { 
        return (
            <div className="mx-auto">
                <input type= {this.props.type} className='form-control' required  placeholder={this.props.placeholder}></input> 
            </div>
        );
    }
}
 
export default InputText;