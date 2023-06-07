import React, { useState } from "react";
import { BsFillClipboardFill } from "react-icons/bs";

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

    const [showCategory, setCategory] = useState("");
    function categoryHandler(e){
        setCategory(e.target.value)
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
        setShowRating(parseInt(e.target.value))
    }

    const [showOrigin, setShowOrigin] = useState("");
    function originHandler(e){
        setShowOrigin(e.target.value)
    }

    const allHandler = [setShowName, setShowAuthor, setShowBrand, setShowDescription, setShowImage, setShowOrigin, setShowPrice, setShowRating, setCategory]

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


    const list = ["Name", "Description", "Brand", "Price", "Image", "Author", "Rating", "Origin", "Category"]
    const listValue = [{"Name": showName}, {"Description" : showDescription}, {"Brand" : showBrand}, {"Price" : showPrice}, {"Image" : showImage}, {"Author" : showAuthor}, {"Rating" : showRating}, {"Origin" : showOrigin}, {"Category" : showCategory}];

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
            if(listToShow.includes(String(Object.keys(each))) && Object.values(each) != "" ){
                result[Object.keys(each)] = Object.values(each)[0];
            }else if(listToShow.includes(String(Object.keys(each)))){
                result[Object.keys(each)] = null;
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
            {listToShow.includes(each)? <div style={{display:"flex", backgroundColor:"red", width:"130px", borderRadius:"50px", cursor:"pointer", justifyContent:"center"}} onClick={() => selectButton(each)} key={index}><p>{each}</p></div>
             :
            <div style={{display:"flex", backgroundColor:"grey", width:"130px", borderRadius:"50px", cursor:"pointer", justifyContent:"center"}} onClick={() => selectButton(each)} key={index}><p>{each}</p></div>}
        </div>
    )})

    return (
        <div style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"20px"}}>
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
            {lockFields ? <input type="submit" onClick={handleLockFields} value="Locked"/>
            : <input type="submit" onClick={handleLockFields} value="Lock"/>}
            {lockFields ? 
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <div style={{display:"flex", flexDirection:"column", textAlign:"center"}}>
                    <div style={listToShow.includes("Name") ? {display:"block"} : {display : "none"}}> <p>Input Name</p> <input type="text" value={showName} onChange={nameHandler} style={{borderRadius:"20px", height:"30px", width:"240px"}}/> </div>
                    <div style={listToShow.includes("Description") ? {display:"block"} : {display : "none"}}> <p>Input Description</p> <input type="text" value={showDescription} onChange={descriptionHandler} style={{borderRadius:"20px", height:"30px", width:"240px"}}/> </div>
                    <div style={listToShow.includes("Brand") ? {display:"block"} : {display : "none"}}> <p>Input Brand</p> <input type="text" value={showBrand} onChange={brandHandler} style={{borderRadius:"20px", height:"30px", width:"240px"}}/> </div>
                    <div style={listToShow.includes("Price") ? {display:"block"} : {display : "none"}}> <p>Input Price</p> <input type="text" value={showPrice} onChange={priceHandler} style={{borderRadius:"20px", height:"30px", width:"240px"}}/> </div>
                    <div style={listToShow.includes("Image") ? {display:"block"} : {display : "none"}}> <p>Input Image</p> <input type="text" value={showImage} onChange={imageHandler} style={{borderRadius:"20px", height:"30px", width:"240px"}}/> </div>
                    <div style={listToShow.includes("Author") ? {display:"block"} : {display : "none"}}> <p>Input Author</p> <input type="text" value={showAuthor} onChange={authorHandler} style={{borderRadius:"20px", height:"30px", width:"240px"}}/> </div>
                    <div style={listToShow.includes("Rating") ? {display:"block"} : {display : "none"}}> <p>Input Rating</p> <input type="text" value={showRating} onChange={ratingHandler} style={{borderRadius:"20px", height:"30px", width:"240px"}}/> </div>
                    <div style={listToShow.includes("Origin") ? {display:"block"} : {display : "none"}}> <p>Input Origin</p> <input type="text" value={showOrigin} onChange={originHandler} style={{borderRadius:"20px", height:"30px", width:"240px"}}/> </div>
                    <div style={listToShow.includes("Category") ? {display:"block"} : {display : "none"}}> <p>Input Category</p> <input type="text" value={showCategory} onChange={categoryHandler} style={{borderRadius:"20px", height:"30px", width:"240px"}}/> </div>
                    <div style={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
                        <input type="submit" onClick={ConfirmFields} value="Enter" style={listToShow.length > 0 ? {display:"block"} : {display:"none"}}/>
                    </div>
                </div>
                <pre style={{backgroundColor:"grey", width:"480px", height:"230px", whiteSpace:"pre-wrap", overflow:"scroll", paddingTop:"10px", paddingLeft:"20px", paddingRight:"20px", paddingBottom:"10px", position:"relative", marginTop:"30px"}}>
                    <div style={{display:"flex", position:"absolute", top:"-6px", right:"5px", justifyItems:"center", alignItems:"center", cursor:"pointer"}} onClick={CopyToClipboard}>
                        <p>Copy </p>
                        <BsFillClipboardFill size={17}/>
                    </div>
                    <code>
                    {JSON.stringify(json, null, 2)}
                    </code>
                </pre>
            </div> : null}
        </div>

    )
}