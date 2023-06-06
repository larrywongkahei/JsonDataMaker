import React, { useState } from "react";

export function CustomJson(){

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
        setShowPrice(parseInt(e.target.value))
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
        setShowRating(parseInt(e.target.value))
    }

    const [showOrigin, setShowOrigin] = useState("");
    function originHandler(e){
        setShowOrigin(e.target.value)
    }

    const allHandler = [setShowName, setShowAuthor, setShowBrand, setShowDescription, setShowImage, setShowOrigin, setShowPrice, setShowRating]

    const [lockFields, setLockFields] = useState(false);
    function handleLockFields(e){
        e.preventDefault();
        setLockFields(true);
    }

    const [listToShow, setListToShow] = useState([]);

    
    async function CopyToClipboard (){
        await navigator.clipboard.writeText(JSON.stringify(json, null, 2))
        alert("copied")
    }

    const [json, setJson] = useState([])

    const fieldsList = listToShow.map((each, index) => {
        return (
            <li key={index}>
                {each}
            </li>
        )
    })


    const list = ["Name", "Description", "Brand", "Price", "Image", "Author", "Rating", "Origin"]
    const listValue = [{"Name": showName}, {"Description" : showDescription}, {"Brand" : showBrand}, {"Price" : showPrice}, {"Image" : showImage}, {"Author" : showAuthor}, {"Rating" : showRating}, {"Origin" : showOrigin}];

    function selectButton(name){
        if(!lockFields){
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
    }

    function ConfirmFields(e){
        e.preventDefault();
        let result = {}
        listValue.forEach(each => {
            if(Object.values(each) != ""){
                result[Object.keys(each)] = Object.values(each)[0];
            }
        })
        allHandler.forEach(each => {
            each("");
        })

        const newList = [...json]
        newList.push(result)
        setJson(newList);
    }

    const allButton = list.map((each, index) =>{return (
        <div>
            {listToShow.includes(each)? <div style={{display:"flex", backgroundColor:"red", width:"130px", borderRadius:"20px", cursor:"pointer"}} onClick={() => selectButton(each)} key={index}><p>{each}</p></div>
             :
            <div style={{display:"flex", backgroundColor:"grey", width:"130px", borderRadius:"20px", cursor:"pointer"}} onClick={() => selectButton(each)} key={index}><p>{each}</p></div>}
        </div>
        // <div style={{display:"flex", backgroundColor:"grey", width:"130px", borderRadius:"20px", cursor:"pointer"}} onClick={() => selectButton(each)} key={index}>
        //     {lockFields ? <input type="checkbox" disabled="disabled"/> : 
        //     <input type="checkbox" /> }
        //     <p>{each}</p>
        // </div>
    )})

    return (
        <div style={{paddingLeft:"20px", paddingRight:"20px"}}>
            <h1>
                Please choose
            </h1>  
            <div style={{display:"flex", justifyContent:"space-around"}}>
                {allButton}
            </div> 
            <div>
                <h2>
                    Selected fields
                </h2>
                <ul>
                    {fieldsList}
                </ul>

            </div>
            <input type="submit" onClick={handleLockFields} value="Confirm"/>
            {lockFields ? 
            <div style={{display:"flex", flexDirection:"column", textAlign:"center"}}>
                <div style={listToShow.includes("Name") ? {display:"flex"} : {display : "none"}}> <p>Input Name</p> <input type="text" value={showName} onChange={nameHandler}/> </div>
                <div style={listToShow.includes("Description") ? {display:"flex"} : {display : "none"}}> <p>Input Description</p> <input type="text" value={showDescription} onChange={descriptionHandler}/> </div>
                <div style={listToShow.includes("Brand") ? {display:"flex"} : {display : "none"}}> <p>Input Brand</p> <input type="text" value={showBrand} onChange={brandHandler}/> </div>
                <div style={listToShow.includes("Price") ? {display:"flex"} : {display : "none"}}> <p>Input Price</p> <input type="text" value={showPrice} onChange={priceHandler}/> </div>
                <div style={listToShow.includes("Image") ? {display:"flex"} : {display : "none"}}> <p>Input Image</p> <input type="text" value={showImage} onChange={imageHandler}/> </div>
                <div style={listToShow.includes("Author") ? {display:"flex"} : {display : "none"}}> <p>Input Author</p> <input type="text" value={showAuthor} onChange={authorHandler}/> </div>
                <div style={listToShow.includes("Rating") ? {display:"flex"} : {display : "none"}}> <p>Input Rating</p> <input type="text" value={showRating} onChange={ratingHandler}/> </div>
                <div style={listToShow.includes("Origin") ? {display:"flex"} : {display : "none"}}> <p>Input Origin</p> <input type="text" value={showOrigin} onChange={originHandler}/> </div>
            </div> : null}
            <div style={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
                <input type="submit" onClick={ConfirmFields} value="Enter" style={listToShow.length > 0 ? {display:"block"} : {display:"none"}}/>
            </div>
            <div>
                
            </div>
            <button style={{}} onClick={CopyToClipboard}>
                    Copy to clipboard
                </button>
            <pre style={{backgroundColor:"#D3D3D3", width:"480px", height:"320px", whiteSpace:"pre-wrap", overflow:"scroll"}}>
                <code>
                {JSON.stringify(json, null, 2)}
                </code>
            </pre>
        </div>

    )
}