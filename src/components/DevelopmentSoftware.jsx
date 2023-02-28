import React from "react";
const DevelopmentSoftware = (props) => {
    return(
        <div className = {"DevelopmentSoftware " + props.color}>
            <img src ={props.image} alt ={props.name} />
            <h2>{props.name}</h2>
            <p>to learn more  click visit website</p> 
           <a href ={props.address}>Visit website</a>
            </div>

    );
}
export default DevelopmentSoftware;