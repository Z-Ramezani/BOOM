import { Component } from "react";
import x from "../assets/ig.jpg";

class ArtworkAdMainPage extends Component {
    state = {  } 
    render() { 
        return (
            <div className="">
                <div class="card shadow bg-white rounded" style={{Width: "100vw"}}>
                
                    <img src={x}/*get the first img from back */ alt="art image"/>
                    <figcaption class="figure-caption" dir="LTR" style={{marginLeft:'1vw',fontSize:'0.9vw'}} >
                        20*30cm{/*recive from back*/}
                    </figcaption>
                
                    <div class="card-body pt-0">
                        <h5 class="card-title" style={{color:'#BB1542',fontSize:'1.9vw', fontWeight:'bold'}}>
                            نام اثر {/*recive from back*/}
                        </h5>
                        <div className="card-text">
                           
                            <h2 class="card-text" style={{color:'#222222',fontSize:'1vw',width:'vw'}}>نام هنرمند {/*recive from back*/}</h2>
                            <a href="#"/*recive from back*/ class="stretched-link"></a>
                            <br></br>
                            <div className="row" dir="LTR">
                                <div className="col-4" dir="LTR" style={{paddingRight:'0%'}}>
                                    <h4 class="card-text"  style={{color:'#222222',fontSize:'1.5vw',marginBottom:'0%'}}>999,000{/*recive from back*/}</h4>
                                    <h4 class="card-text"  style={{color:'#222222',fontSize:'0.9vw',marginTop:'0%'}}>تومان</h4>
                                </div>
                                <div className="col ps-0">
                                    <div>{
                                            this.props.showLadder ?
                                            <div>
                                                <i class="bi bi-ladder"></i>
                                            </div>
                                            :<div></div>
                                    }</div>
                                </div>
                            </div>     
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ArtworkAdMainPage ;