const textInput = document.getElementById("qr-code-input");
const submitBtn = document.getElementById("submit-btn");
const form = document.querySelector("form");
const codeContainer = document.getElementById("code-container");
const downloadBtn = document.getElementById("download-btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (textInput.value !== "") {
    getQRCode(textInput.value);
  }
});

function getQRCode(url) {
  codeContainer.innerHTML = "";
  const qrCode = new QRCode(codeContainer, url);
  codeContainer.querySelector("img").setAttribute("id", "qr-code-image");
}

function downloadCode() {
  const qrCodeImg = document.querySelector("#qr-code-image");
  if (qrCodeImg) {
    const link = document.createElement("a");
    link.href = qrCodeImg.src;
    link.download = "qrcode.png";
    link.click();
  }
}

downloadBtn.addEventListener("click", downloadCode);
