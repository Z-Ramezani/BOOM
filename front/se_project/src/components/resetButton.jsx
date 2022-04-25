import {Component} from 'react';

class ResetButton extends Component {

    state = {  } 
    render() { 
        return (
            <>
                 <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary" 
                            type="reset" 
                            style={{width:'auto', height:'auto', 
                            backgroundColor:'#BB1542', borderColor:'#BB1542',
                             fontSize:'23px'}}>
                                 بازنشانی
                    </button>
                </div>
            </>
        )
    }
}

export default ResetButton;