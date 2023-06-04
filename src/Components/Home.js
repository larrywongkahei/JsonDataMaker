import React, { useState, useEffect } from "react";

export function Home(){

    const [showName, setShowName] = useState({"showName" : false});
    const [showDescription, setShowDescription] = useState({"showDescription" : false});
    const [showBrand, setShowBrand] = useState({"showBrand" : false});
    const [showPrice, setShowPrice] = useState({"showPrice" : false});
    const [showImage, setShowImage] = useState({"showImage" : false});
    const [showAuthor, setShowAuthor] = useState({"showAuthor" : false});
    const [showRating, setShowRating] = useState({"showRating" : false});
    const [showOrigin, setShowOrigin] = useState({"showOrigin" : false});
    const [listToShow, setListToShow] = useState([]);
    const list = [showName, showDescription, showBrand, showPrice, showImage, showAuthor, showRating, showOrigin]
    useEffect(() => {
    }, [])

    function selectButton(name){
        if(listToShow.includes(name)){
            const newList = listToShow.filter(each => each != name)
            setListToShow(newList)
        }
        else{
            const newList = [...listToShow];
            newList.push(name);
            setListToShow(newList);
        }
    }

    const allButton = list.map((each, index) =>{return (
        <div style={{display:"flex"}} key={index}>
            <input type="checkbox" onClick={() => selectButton(String(Object.keys(each)))}></input>
            <p>{Object.keys(each)}</p>
        </div>
    )})

    const allList = listToShow.map((each, index) => {
        return(
        <h1 key={index}>
            {each}
        </h1>
        )
    })

    const allInput = listToShow.map((each, index) => {
        return (
            <div>
                <p>{each}</p>
                <input type="text" placeholder="{each}" /> 
            </div>
                   )
    })

    return (
        <div>
            <h1>
                Please choose
            </h1>
            <form>
                {allButton}
            </form>
            <div>
                {allInput}
            </div>
        </div>

    )
}