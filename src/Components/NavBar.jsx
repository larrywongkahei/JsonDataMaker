import React from "react";
import { Link } from "react-router-dom";

export function NarBar(){
    return (
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingLeft:"24px", paddingTop:"18px", paddingBottom:"32px", color:"white", paddingRight:"32px"}}>
            <Link to={"/"} style={{fontSize:"42px", fontWeight:"bold", textDecoration:"none", color:"white"}}>
                JsonDataMaker
            </Link>
            <div style={{paddingRight:"10px"}}>
                <a>
                    <Link to={"/"} style={{textDecoration:"none", paddingRight:"10px", color:"white", fontSize:"20px"}}>Home</Link>
                </a>
                <a>
                    <Link to={"/customjson"} style={{textDecoration:"none", paddingRight:"10px", color:"white", fontSize:"20px"}}>Create</Link>
                </a>
            </div>
        </div>
    )
}