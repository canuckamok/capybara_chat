import React, { useEffect, useState } from "react";
//import Chatbox from "./Chatbox";

let capybaraAPI = `https://api.capy.lol/v1/capybara?json=true`;

function noImg(props) {
    return (
        <div class="loader-container" id="loader">
            <div class="capybara-loader">
                <div class="eye left">
                    <div class="pupil left"></div>
                </div>
                <div class="eye right">
                    <div class="pupil right"></div>
                </div>
            </div>
        </div>
    )
}
function Chatbox({currentInput}) {
    const [capyImg, setCapyImg] = useState();
    useEffect(() => {
        fetch(capybaraAPI)
            .then(response => response.json())
            .then(res => {
                setCapyImg(res.data)
                console.log(res.data)

                //setCapybaraImg = `<img src="${capyData.url}" id="capyimg" alt="${capyData.alt}" width=${capyData.width} height=${capyData.height}> `;
                //loader.style.visibility = 'hidden';
            })
            .catch((error => console.error(error)))
    }, []);

    return (

        <img 
            src={capyImg.url}
            id = "capyimg"
            alt = {capyImg.alt}
            width = {capyImg.width}
            height = {capyImg.height}
        />
    );
           // <img src="${capybaraImg.url}" id="capyimg" alt="${capyData.alt}" width=${capyData.width} height=${capyData.height}/>
}

function Input() {
    const [currentInput, setCurrentInput] = useState("");
    const handleChange = e => {
        setCurrentInput(e.target.value);
    };
    const handleSubmit = e => {
        if (currentInput === "") {
        alert("please pull up");
        }
    };
    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleSubmit();
        }
    };


  return (
    <>
        <div id="chat-box"></div>
        <div id="input-submit">
              <input
                  type="text"
                  id="input-box"
                  value={currentInput}
                  onChange={handleChange}
                  onKeyDown={handleKeypress}
                  placeholder="tell me sumfin" />
              <button
                  onClick={handleSubmit}
                  id="submit-button"></button>
          </div>
    </>
  );
}

export default Input;