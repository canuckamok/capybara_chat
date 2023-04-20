const chatBox = document.getElementById("chat-box");
const inputBox = document.getElementById("input-box");
const submitButton = document.getElementById("submit-button");

function getRandomCapybaraImage() {
  const capybaraImages = [
    'https://i.natgeofe.com/n/566ed88f-7ee4-4a57-be2e-aa312a5f65a1/capybara.jpg',
    'https://media.wired.com/photos/5926ad99f3e2356fd800a15d/16:9/w_929,h_523,c_limit/GettyImages-460739682.jpg',
    'https://www.belfastcity.gov.uk/getmedia/c1e8ff22-1e64-44c4-ab8e-3322333794e1/Capybara-1.jpg?w=800&h=533&ext=.jpg&width=640&resizemode=force',
    'https://www.zoo-berlin.de/fileadmin/_processed_/a/9/csm_Wasserschwein-Nachwuchs_f374a8f22b.jpg',
    'https://images.thestar.com/qrTDHUnIV9Fw-Ks_5h4j7tMWUGw=/1086x725/smart/filters:cb(2700061000):format(webp)/https://www.thestar.com/content/dam/thestar/news/gta/2016/06/29/an-ode-to-the-capybaras/kbzoo03jpg.jpg',
    // Add more image URLs as needed
  ];

  const randomIndex = Math.floor(Math.random() * capybaraImages.length);
  return capybaraImages[randomIndex];
}

submitButton.addEventListener("click", () => {
  const request = inputBox.value;
  const capybaraImg = `<img src="${getRandomCapybaraImage()}" alt="capybara"> `;
  chatBox.innerHTML = capybaraImg;
});