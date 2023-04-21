const chatBox = document.getElementById("chat-box");
const inputBox = document.getElementById("input-box");
const submitButton = document.getElementById("submit-button");
const capybaraAPI = `https://api.capy.lol/v1/capybara?json=true`;
const loaderShowTime = 2000;

const loaderHTML = `
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
`;

let capybaraImg;

submitButton.addEventListener("click", () => {

  if (inputBox.value === '') {
    return window.alert('Please pull up');
  }

  const capyimg = document.getElementById('capyimg');
  if (capyimg) {
    chatBox.removeChild(capyimg);
  }
  // todo: no need to insert each time
  chatBox.innerHTML = loaderHTML;
  const loader = document.getElementById('loader');
  loader.style.visibility = 'visible';
  
  setTimeout(() => {
    fetch(capybaraAPI)
      .then(response => response.json())
      .then(res => {
        const capyData = res.data;
      
        capybaraImg = `<img src="${capyData.url}" id="capyimg" alt="${capyData.alt}" width=${capyData.width} height=${capyData.height}> `;
        chatBox.innerHTML = capybaraImg;
      
        loader.style.visibility = 'hidden';
      })
      .catch(error => console.error(error));
    }, loaderShowTime)
});