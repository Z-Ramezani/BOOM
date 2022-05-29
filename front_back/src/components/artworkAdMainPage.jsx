import axios from "axios";
import { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import x from "../assets/ig.jpg";

const ArtworkAdMainPage = (props) => {
    // const [ad, setAd] = useState({});

    // useEffect(async ()=>{
    //     const response = await axios.get(`http://hidden.pythonanywhere.com/advertisment/view_advertisements/${props.match.params.id}`);
    //     setAd(response.data.data); 
    // })
    return ( 
        <div className="">
                <div className="card shadow bg-white rounded">
                
                     <img src={props.image} alt="art image"  style={{blockSize: "20vw", maxWidth:'100%',maxHeight:'100%'}}/>
                     <figcaption className="figure-caption" dir="LTR" style={{marginLeft:'1vw',fontSize:'0.9vw'}} >
                        {props.length_in_cm}*{props.width_in_cm}
                    </figcaption>
                
                     <div className="card-body pt-0">
                         <h5 className="card-title" style={{color:'#BB1542',fontSize:'1.9vw', fontWeight:'bold'}}>
                            {props.artworkName}
                         </h5>
                         <div className="card-text">                           
                            <h2 className="card-text" style={{color:'#222222',fontSize:'1vw',width:'vw'}}>{props.artistName}</h2>
                            <Link to={props.to} className="stretched-link"></Link>
                            <br></br>
                            <div className="row" dir="LTR">
                                <div className="col-4" dir="LTR" style={{paddingRight:'0%'}}>
                                    <div><h4 className="card-text"  style={{color:'#222222',fontSize:'1.5vw',marginBottom:'0%'}}>{props.cost}</h4></div>
                                    <div><h4 className="card-text"  style={{color:'#222222',fontSize:'0.9vw',marginTop:'0%'}}>تومان</h4></div>
                                </div>
                                <div className="col ps-0">
                                    <div>{
                                            props.showLadder ?
                                            <div>
                                                <i className="bi bi-ladder"></i>
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

export default ArtworkAdMainPage;