import { translations } from './translations.js';

const asunto = document.getElementById("text");
const correo = document.getElementById("mail");
const cuerpo = document.getElementById("mensagem");
const form = document.querySelector("form");


form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    verificando();
});

const languageSwitcher = document.getElementById("languageSwitcher");

languageSwitcher.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;

    // Update text content dynamically
    document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        if (translations[selectedLanguage][key]) {
            element.innerHTML = translations[selectedLanguage][key];
        }
    });
});

function verificando(){
        if(cuerpo.value== ""){
                alert("Te falta llenar un campo: Todos los campos son requeridos");
        }else{
                // alert("Mensaje enviado: "+ entrada.value)
                enviar = 'mailto:' + correo.value + '?subject='
                + asunto.value + '&body=' + cuerpo.value;
                window.location.href = enviar;
        }
}