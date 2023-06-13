import React, { Component } from 'react';
import "./About.css";
import Ellie from  "../assets/Ellie.jpg"; 

export default class About extends Component {
  render() {
    return(
       <div>
       <div className="split left">
         <div className="centered">
           <img 
             className="profile_image"
             src={Ellie}
             alt="Profile Pic"
             ></img>
         </div>
       </div>
       <div className="split right">
         <div className="centered">
           <div className="name_title">Ellie Dawson</div>
           <div className="brief_description">
              Hello! My name is Ellie Dawson. I am a rising junior studying computer science at Cornell. I love running, hiking, and my dog. 
           </div>
         </div>
       </div>
     </div>
    )
  }
}