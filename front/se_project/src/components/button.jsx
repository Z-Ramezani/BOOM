import {Component} from 'react';

class Button extends Component {

    state = {  } 
    render() { 
        return (
            <>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button /*onClick={this.props.reference} */ className="btn btn-primary" type="button" style={{width: this.props.width, height:this.props.height, backgroundColor:'#BB1542', borderColor:'#BB1542', fontSize:'23px'}}>{this.props.text}</button>
                </div>
            </>
        )
    }
}

export default Button;