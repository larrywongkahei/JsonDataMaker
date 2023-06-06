import React from "react";
import { Link } from "react-router-dom";

export function NarBar(){
    return (
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingLeft:"10px"}}>
            <Link to={"/"} style={{fontSize:"42px", fontWeight:"bold", textDecoration:"none", color:"black"}}>
                Here is the topic
            </Link>
            <div style={{paddingRight:"10px"}}>
                <a>
                    <Link to={"/"} style={{textDecoration:"none", color:"black", paddingRight:"10px"}}>Home</Link>
                </a>
                <a>
                    <Link to={"/customjson"} style={{textDecoration:"none", color:"black", paddingRight:"10px"}}>Create</Link>
                </a>
                <a>
                    <Link to={"/contact"} style={{textDecoration:"none", color:"black"}}>Contact</Link>
                </a>
            </div>
        </div>
    )
}