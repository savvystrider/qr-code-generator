const textInput = document.getElementById("qr-code-input");
const submitBtn = document.getElementById("submit-btn");
const form = document.querySelector("form");
const codeContainer = document.getElementById("code-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (textInput.value !== "") {
    getQRCode(textInput.value);
  }
});

function getQRCode(url) {
  codeContainer.innerHTML = "";
  const qrCode = new QRCode(codeContainer, url);
}
