import {Component} from 'react';

class Button extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary" type="button">{this.props.text}</button>

                </div>
            </>
        );
    }
}

assign (){
     this.props.text;
}

export default Button;