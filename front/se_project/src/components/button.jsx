import {Component} from 'react';

class Button extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end" dir={this.props.dir}>
                    <button 
                    onClick={this.props.onClick} 
                    className="btn btn-primary" 
                    type="button" 
                    style={{width: this.props.width, height:this.props.height, backgroundColor:'#BB1542', borderColor:'#BB1542', fontSize:this.props.fontSize}}
                    disabled={this.props.disabled}>
                        {this.props.text}
                    </button>
                </div>
            </>
        )
    }
}

export default Button;