import React, { useState } from "react";

const App = () => {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const changeImg = (event) => {
        console.log(event)
        setSelectedFile(URL.createObjectURL(event.target.files[0]))
    }
    return (
        <div>
            <style jsx>{`
              .inputFile {
                width: 0.1px !important;
                height: 0.1px !important;
                opacity: 0 !important;
                overflow: hidden !important;
                position: absolute !important;
                z-index: -1 !important;
              }

              .inputFile + label {
                width: 200px;
                height: 100px;
                background-color: #989494;
                display: inline-block;
              }

            `}
            </style>
            <div className="App">

                <form>
                    <input type="file"
                           accept=".jpg, .jpeg, .png"
                           name="file" id="file"
                           className="inputFile" onChange={changeImg}/>
                    <label htmlFor="file"><img src={selectedFile} /></label>
                    <img src={selectedFile}/>
                </form>
            </div>
        </div>

    );
};

export default App;