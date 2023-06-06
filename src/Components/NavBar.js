import React from "react";
import { Link } from "react-router-dom";

export function NarBar(){
    return (
        <div>
            <h1 className="">
                Here is the topic
            </h1>
            <Link to={"/contact"} className="">hi</Link>
            <Link to={"/"}>Home page</Link>
        </div>
    )
}