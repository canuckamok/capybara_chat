import React, { useState } from "react";
import './capybara.css';

let capybaraAPI = `https://api.capy.lol/v1/capybara?json=true`;

function Loader() {
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

function NoImg() {
  return (
    <div class="loader-container">
      <div class="capybara-fixed">
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
     return <NoImg />;
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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (currentInput === "") {
      alert("please pull up");
    } else {
      setLoading(true);
      try {
        const response = await fetch(capybaraAPI);
        const data = await response.json();
        setTimeout(() => {
        setCapyData(data.data);
        setLoading(false);
        }, 2000);
      } catch (error) {
        console.error(error);
        setLoading(false);
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
        {loading ? <Loader /> : <Chatbox capyData={capyData} />}
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