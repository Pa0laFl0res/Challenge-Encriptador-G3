var encryptText = document.querySelector('.encryptText');
var message = document.querySelector('.message');


function btnEncrypt(){
    document.getElementById("notFound").style.display = "none";
    const encryptedText = encrypt(encryptText.value);
    message.value = encryptedText;
    message.style.backgroundImage ="none";
    encryptedText.value ="";
    //alert("Ha sido encriptado!!!")
    console.log("It's been encrypted, it's working");


}

function btnDesencrypt(){
    const encryptedText = desencrypt(encryptText.value);
    message.value = encryptedText;
    encryptedText.value = "";
    //alert("Ha sido desencriptado!!!")
    console.log("it's been desencrypted, it's working");
}

// 'La letra "e" es transformada para "enter"
// 'La letra "i" es transformada para "imes"
// 'La letra "a" es transformada para "ai"
// 'La letra "o" es transformada para "ober"
// 'La letra "u" es transformada para "ufat"

function encrypt(stringEncrypted){
    let matrixCode = [["e", ["enter"]],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncrypted = stringEncrypted.toLowerCase();

    for(let i = 0; i < matrixCode.length; i++){
        if(stringEncrypted.includes(matrixCode[i][0])){
            stringEncrypted = stringEncrypted.replace(matrixCode[i][0], matrixCode[i][1]);
        }
    }
    return stringEncrypted;
}

function desencrypt(stringDesencrypted){
    let matrixCode = [["e", ["enter"]],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencrypted = stringDesencrypted.toLowerCase();

    for(let i = 0; i < matrixCode.length; i++){
        if(stringDesencrypted.includes(matrixCode[i][1])){
            stringDesencrypted = stringDesencrypted.replaceAll(matrixCode[i][1], matrixCode[i][0])
        }
    }
    return stringDesencrypted;
}


function btnCopy(){
    message.select();
    navigator.clipboard.writeText(message.value);
    message.value = "";
    alert("Texto copiado");
    console.log("alert sent, you're text has been copied");

    
}