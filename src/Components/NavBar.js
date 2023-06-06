import React from "react";
import { Link } from "react-router-dom";

export function NarBar(){
    return (
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingLeft:"10px", color:"white"}}>
            <Link to={"/"} style={{fontSize:"42px", fontWeight:"bold", textDecoration:"none", color:"white"}}>
                Here is the topic
            </Link>
            <div style={{paddingRight:"10px"}}>
                <a>
                    <Link to={"/"} style={{textDecoration:"none", paddingRight:"10px", color:"white"}}>Home</Link>
                </a>
                <a>
                    <Link to={"/customjson"} style={{textDecoration:"none", paddingRight:"10px", color:"white"}}>Create</Link>
                </a>
                <a>
                    <Link to={"/contact"} style={{textDecoration:"none", color:"white"}}>Contact</Link>
                </a>
            </div>
        </div>
    )
}