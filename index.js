function encriptar(){
    let texto = document.getElementById("texto").value;
    const mayusculas = /[A-Z]/;
    const acentos = /[áéíóúÁÉÍÓÚüÜñÑ]/;
    
    let textoCifrado = texto
    
        
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (document.getElementById("texto").value.length == 0 || mayusculas.test(texto) || acentos.test(texto)) {
        alert("Debes ingresar un texto en minusculas y sin acentos");
        document.getElementById("titulo-mensaje").textContent = "Ningun mensaje fue encontrado";
        document.getElementById("parrafo").textContent = "Ingresa el texto que deseas encriptar o desencriptar";

    } else {
        document.getElementById("texto").value = textoCifrado;
        document.getElementById("titulo-mensaje").textContent = "Texto encriptado con exito";
        document.getElementById("parrafo").textContent = "";

    }




}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    const mayusculas = /[A-Z]/;
    const acentos = /[áéíóúÁÉÍÓÚüÜñÑ]/;
    
    let textoDesencriptado = texto
        
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    
    if (document.getElementById("texto").value.length == 0 || mayusculas.test(texto) || acentos.test(texto)){
        alert("Debes ingresar un texto en minusculas y sin acentos");
        document.getElementById("titulo-mensaje").textContent = "Ningun mensaje fue encontrado";
        document.getElementById("parrafo").textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        
        
    } else {
        document.getElementById("texto").value = textoDesencriptado;
        document.getElementById("titulo-mensaje").textContent = "Texto desencriptado con exito";
        document.getElementById("parrafo").textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
}