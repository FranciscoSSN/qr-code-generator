// pegar elementos
const container = document.querySelector(".container");
const qrCodeButton = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// funções
function generatorQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return;

    qrCodeButton.innerHTML = "Gerar QR Code";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeButton.innerHTML = "QR Code gerado";
    })

    // console.log(qrCodeInputValue);
}

// eventos
qrCodeButton.addEventListener("click", () => {
    generatorQrCode();
})

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        generatorQrCode();
    }
})

// limpar campo
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeButton.innerHTML = "Gerar QR Code";
    }
})