import {Component} from 'react';

class Button extends Component {
    // chooseWhichMethod=()=>{
    //     if (this.props.reference === 'count'){
    //         this.setValue();
    //     }
    // }
    // setValue=()=>{
    //     this.setState({count: this.state.count + 1});
    // }
    state = { 
        // count: 0
     } 
    render() { 
        return (
            <>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end" dir='LTR'>
                    {/* <h1>{this.state.count}</h1> */}
                    <button /*onClick={this.chooseWhichMethod}*/ className="btn btn-primary" type="button" style={{width: this.props.width, height:this.props.height, backgroundColor:'#BB1542', borderColor:'#BB1542', fontSize:this.props.fontSize}}>{this.props.text}</button>
                </div>
            </>
        )
    }
}

export default Button;