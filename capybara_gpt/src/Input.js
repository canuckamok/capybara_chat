import React, { useEffect, useState } from "react";

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
  );
}

function Chatbox({ capyData }) {
  if (!capyData) {
    return <noImg />;
  }

  return (
    <img
      src={capyData.url}
      id="capyimg"
      alt={capyData.alt}
      width={capyData.width}
      height={capyData.height}
    />
  );
}

function Input() {
  const [currentInput, setCurrentInput] = useState("");
  const [capyData, setCapyData] = useState();

  const handleChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (currentInput === "") {
      alert("please pull up");
    } else {
      try {
        const response = await fetch(capybaraAPI);
        const data = await response.json();
        setCapyData(data.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <>
      <div id="chat-box">
        <Chatbox capyData={capyData} />
      </div>
      <div id="input-submit">
        <input
          type="text"
          id="input-box"
          value={currentInput}
          onChange={handleChange}
          onKeyDown={handleKeypress}
          placeholder="tell me sumfin"
        />
        <button onClick={handleSubmit} id="submit-button"></button>
      </div>
    </>
  );
}

export default Input;