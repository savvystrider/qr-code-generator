const textInput = document.getElementById("qr-code-input");
const submitBtn = document.getElementById("submit-btn");
const form = document.querySelector("form");
const codeContainer = document.getElementById("code-container");
const btnContainer = document.querySelector(".btn-container");
const downloadBtn = document.getElementById("download-btn");
const shareBtn = document.getElementById("share-btn");

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
  form.style.display = "none";
  btnContainer.classList.add("active");
  codeContainer.classList.add("active");
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

function copyCode() {
  const qrCodeImg = document.querySelector("#qr-code-image");

  if (qrCodeImg) {
    fetch(qrCodeImg.src)
      .then((response) => response.blob())
      .then((blob) => {
        const clipboardItem = new ClipboardItem({
          "image/png": blob,
        });

        navigator.clipboard
          .write([clipboardItem])
          .then(() => {
            alert("QR code successfully copied!");
          })
          .catch((error) =>
            console.error("Error copying image to clipboard: ", error)
          );
      })
      .catch((error) =>
        console.error("Error copying image to clipboard: ", error)
      );
  }
}

shareBtn.addEventListener("click", copyCode);
