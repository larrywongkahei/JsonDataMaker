import React, { useState } from "react";

export function Home(){

    const [showName, setShowName] = useState("");
    function nameHandler(e){
        setShowName(e.target.value)
    }

    const [showDescription, setShowDescription] = useState("");
    function descriptionHandler(e){
        setShowDescription(e.target.value)
    }

    const [showBrand, setShowBrand] = useState("");
    function brandHandler(e){
        setShowBrand(e.target.value)
    }

    const [showPrice, setShowPrice] = useState("");
    function priceHandler(e){
        setShowPrice(e.target.value)
    }

    const [showImage, setShowImage] = useState("");
    function imageHandler(e){
        setShowImage(e.target.value)
    }

    const [showAuthor, setShowAuthor] = useState("");
    function authorHandler(e){
        setShowAuthor(e.target.value)
    }

    const [showRating, setShowRating] = useState("");
    function ratingHandler(e){
        setShowRating(e.target.value)
    }

    const [showOrigin, setShowOrigin] = useState("");
    function originHandler(e){
        setShowOrigin(e.target.value)
    }

    const [listToShow, setListToShow] = useState([]);
    const list = ["Name", "Description", "Brand", "Price", "Image", "Author", "Rating", "Origin"]

    function selectButton(name){
        if(listToShow.filter(each => each === name).length > 0){
            const newList = listToShow.filter(each => each !== name)
            setListToShow(newList)
        }
        else{
            const newList = [...listToShow];
            newList.push(list.find(each => each === name));
            setListToShow(newList);
        }
    }

    function ConfirmFields(e){
        e.preventDefault();
    }

    const allButton = list.map((each, index) =>{return (
        <div style={{display:"flex"}} key={index}>
            <input type="checkbox" onClick={() => selectButton(each)}></input>
            <p>{each}</p>
        </div>
    )})

    return (
        <div>
            <h1>
                Please choose
            </h1>
            <form>
                {allButton}
                <div  style={{display:"flex", flexDirection:"column"}}>
                <div style={listToShow.includes("Name") ? {display:"block"} : {display : "none"}}> <p>Input Name</p> <input type="text" value={showName} onChange={nameHandler}/> </div>
                <div style={listToShow.includes("Description") ? {display:"block"} : {display : "none"}}> <p>Input Description</p> <input type="text" value={showDescription} onChange={descriptionHandler}/> </div>
                <div style={listToShow.includes("Brand") ? {display:"block"} : {display : "none"}}> <p>Input Brand</p> <input type="text" value={showBrand} onChange={brandHandler}/> </div>
                <div style={listToShow.includes("Price") ? {display:"block"} : {display : "none"}}> <p>Input Price</p> <input type="text" value={showPrice} onChange={priceHandler}/> </div>
                <div style={listToShow.includes("Image") ? {display:"block"} : {display : "none"}}> <p>Input Image</p> <input type="text" value={showImage} onChange={imageHandler}/> </div>
                <div style={listToShow.includes("Author") ? {display:"block"} : {display : "none"}}> <p>Input Author</p> <input type="text" value={showAuthor} onChange={authorHandler}/> </div>
                <div style={listToShow.includes("Rating") ? {display:"block"} : {display : "none"}}> <p>Input Rating</p> <input type="text" value={showRating} onChange={ratingHandler}/> </div>
                <div style={listToShow.includes("Origin") ? {display:"block"} : {display : "none"}}> <p>Input Origin</p> <input type="text" value={showOrigin} onChange={originHandler}/> </div>
                </div>
                <input type="submit" onClick={ConfirmFields}/>
            </form>
        </div>

    )
}