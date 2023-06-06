import React from "react";

export function Home(){

    const Csharp ="try {\n    using (HttpClient client = new HttpClient()){\n      using (HttpResponseMessage res = await client.GetAsync('The endpoint here')){\n        using (HttpContent content = res.Content){\n        string data = await content.ReadAsStringAsync();\n        // Do whatever you want with the jsondata\n        }\n      }\n    }\n  }\ncatch(Exception exception) {\nConsole.WriteLine(exception);\n}"

    function Csharpcopy(){
        navigator.clipboard.writeText(Csharp)
    }

    return (
        <div>
            <button onClick={Csharpcopy}>
asef
            </button>
            <h1>
                There are three categories for now
            </h1>
            <h4>
                tutorial
            </h4>
            <table style={{width:"100%", borderSpacing:"30px"}}>
                <tr>
                    <td style={{textAlign:"center", width:"30%", borderRight:"1px solid white"}}>
                        C#
                    </td>
                    <td>
                        <pre style={{width:"670px", backgroundColor:"grey", height:"180px", paddingLeft:"10px", paddingTop:"10px", margin:"auto", overflow:"scroll"}}>
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
                    <td style={{textAlign:"center", width:"30%", borderRight:"1px solid white"}}>
                        Javascript
                    </td>
                    <td>
                        <pre style={{width:"670px", backgroundColor:"grey", height:"70px", paddingLeft:"10px", paddingTop:"10px", margin:"auto"}}>
                            <code style={{backgroundColor:"grey"}}>
                                fetch("The endpoint here")<br/>
                                .then(res => res.json())<br/>
                                .then(data => #Do whatever you want with the jsondata)
                            </code>
                        </pre>
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign:"center", width:"30%", borderRight:"1px solid white"}}>
                        Python
                    </td>
                    <td>
                        <pre style={{width:"670px", backgroundColor:"grey", height:"120px", paddingLeft:"10px", paddingTop:"10px", margin:"auto"}}>
                            <code style={{backgroundColor:"grey"}}>
                            import requests<br /><br />
                            request = requests.get("The endpoint here")<br />
                            data = request.text<br />
                            #Do whatever you want with the jsondata
                            </code>
                        </pre>
                    </td>
                </tr>
            </table>

        </div>

    )
}