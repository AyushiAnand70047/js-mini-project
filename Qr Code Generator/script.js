let qrImage = document.getElementById('qr-image');

function generateQR(){
    let qrText = document.getElementById('qr-text');
    if(qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    } else {
        alert("Enter text or url to generate qr");
        qrImage.src = "";
    }
}