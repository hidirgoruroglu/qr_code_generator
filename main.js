const wrapper = document.querySelector(".wrapper");
const qrInput = document.querySelector(".form input");
const generateButton = document.querySelector(".form button");
const qrImage = document.querySelector(".qr-code img");

generateButton.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateButton.innerText = "Generating QR Code..."
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImage.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateButton.innerText = "Generate QR Code";
    });
    
});