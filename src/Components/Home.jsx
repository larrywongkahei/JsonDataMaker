import React, { useState } from "react";
import { BsFillClipboardFill } from "react-icons/bs";

export function Home(){

    const [showTutorial, setShowTutorial] = useState("");

    const Csharp ="try {\n    using (HttpClient client = new HttpClient()){\n      using (HttpResponseMessage res = await client.GetAsync('The endpoint here')){\n        using (HttpContent content = res.Content){\n        string data = await content.ReadAsStringAsync();\n        // Do whatever you want with the jsondata\n        }\n      }\n    }\n  }\ncatch(Exception exception) {\nConsole.WriteLine(exception);\n}"

    const Javascript = "fetch('The endpoint here')\n.then(res => res.json())\n.then(data => #Do whatever you want with the jsondata)"

    const Python = "import requests \n\nrequest = requests.get('The endpoint here')\ndata = request.text\n//Do whatever you want with the jsondata"

    async function Csharpcopy(){
        await navigator.clipboard.writeText(Csharp)
        alert("Copied")
    }

    async function Javascriptcopy(){
        await navigator.clipboard.writeText(Javascript)
        alert("Copied")
    }

    async function Pythoncopy(){
        await navigator.clipboard.writeText(Python)
        alert("Copied")
    }

    function showTutorialButtonHandler(name){
        setShowTutorial(name)
    }

    return (
        <div>
            <h1 style={{textAlign:'center', marginBottom:"0px"}}>
                Here are two simple Json data you could use for free
            </h1>
            <hr style={{marginLeft:"20%", marginRight:"20%", marginBottom:"30px"}}/>
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <button style={{height:"120px", width:"120px", borderRadius:"30%", fontSize:"20px", backgroundColor:"#CCCCCC", border:"none"}} onClick={() => showTutorialButtonHandler("Products")}>
                    Products
                </button>
                <button style={{height:"120px", width:"120px", borderRadius:"30%", fontSize:"20px", backgroundColor:"#CCCCCC", border:"none"}} onClick={() => showTutorialButtonHandler("Users")}>
                    Users
                </button>
            </div>
            {showTutorial != "" ? 
            <div style={{backgroundColor:"grey", marginLeft:"15%", marginRight:"15%", paddingTop:"10px", paddingBottom:"20px", paddingLeft:"40px", marginTop:"30px", borderRadius:"5px"}}>
                <h3>
                    Endpoints
                </h3>
                <p style={{fontSize:"18px"}}>
                    To fetch all {showTutorial} : <code>https://imagesbackend.herokuapp.com/api/{showTutorial.toLowerCase()}</code>
                </p>
                <p style={{fontSize:"18px"}}>
                    To fetch certain number of {showTutorial} : <code>https://imagesbackend.herokuapp.com/api/{showTutorial.toLowerCase()}/&#123;Number&#125;</code>
                </p>
            </div> : null}
            <h1 style={{textAlign:"center", marginBottom:"0px"}}>
                Tutorial
            </h1>
            <hr style={{marginLeft:"20%", marginRight:"20%", marginBottom:"30px"}}/>
            <table style={{width:"100%", borderSpacing:"30px"}}>
                <tr>
                    <td style={{textAlign:"center", width:"30%", borderRight:"1px solid white", fontSize:"24px", fontWeight:"bold"}}>
                        C#
                    </td>
                    <td>
                        <pre style={{width:"670px", backgroundColor:"grey", height:"180px", paddingLeft:"10px", paddingTop:"10px", margin:"auto", overflow:"scroll", position:"relative"}}>
                            <div style={{display:"flex", position:"absolute", top:"-6px", right:"5px", justifyItems:"center", alignItems:"center", cursor:"pointer"}} onClick={Csharpcopy}>
                                <p>Copy </p>
                                <BsFillClipboardFill size={17}/>
                            </div>
                            <code style={{backgroundColor:"grey"}} id="testing">
                                try &#123;<br /><br />
                                &nbsp;using (HttpClient client = new HttpClient())&#123;<br /><br />
                                &nbsp;&nbsp;using (HttpResponseMessage res = await client.GetAsync("The endpoint here"))&#123;<br /><br />
                                &nbsp;&nbsp;&nbsp;using (HttpContent content = res.Content)&#123;<br /><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;string data = await content.ReadAsStringAsync();<br /><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;#Do whatever you want with the jsondata<br /><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br /><br />
                                &nbsp;&nbsp;&nbsp;&#125;<br /><br />
                                &nbsp;&nbsp;&#125;<br /><br />
                                &nbsp;&#125;
                                catch(Exception exception) &#123;<br /><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(exception);<br /><br />
                                &#125;
                            </code>
                        </pre>
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign:"center", width:"10%", borderRight:"1px solid white", fontSize:"24px", fontWeight:"bold"}}>
                        Javascript
                    </td>
                    <td>
                        <pre style={{width:"670px", backgroundColor:"grey", height:"180px", paddingLeft:"10px", paddingTop:"10px", margin:"auto", position:"relative"}}>
                            <div style={{display:"flex", position:"absolute", top:"-6px", right:"5px", justifyItems:"center", alignItems:"center", cursor:"pointer"}} onClick={Javascriptcopy}>
                                <p>Copy </p>
                                <BsFillClipboardFill size={17}/>
                            </div>
                            <code style={{backgroundColor:"grey"}}>
                                fetch("The endpoint here")<br/><br />
                                .then(res =&#62; res.json())<br/><br />
                                .then(data =&#62; #Do whatever you want with the jsondata)
                            </code>
                        </pre>
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign:"center", width:"30%", borderRight:"1px solid white", fontSize:"24px", fontWeight:"bold"}}>
                        Python
                    </td>
                    <td>
                        <pre style={{width:"670px", backgroundColor:"grey", height:"180px", paddingLeft:"10px", paddingTop:"10px", margin:"auto", position:"relative"}}>
                            <div style={{display:"flex", position:"absolute", top:"-6px", right:"5px", justifyItems:"center", alignItems:"center", cursor:"pointer"}} onClick={Pythoncopy}>
                                <p>Copy </p>
                                <BsFillClipboardFill size={17}/>
                            </div>
                            <code style={{backgroundColor:"grey"}}>
                            import requests<br /><br />
                            request = requests.get("The endpoint here")<br /><br />
                            data = request.text<br /><br />
                            #Do whatever you want with the jsondata
                            </code>
                        </pre>
                    </td>
                </tr>
            </table>

        </div>

    )
}