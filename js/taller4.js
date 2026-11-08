let formulario = document.getElementById("formTaller4");
let resultado = document.getElementById("resultado");


formulario.addEventListener("submit", validarRegistro);
function validarRegistro(){
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let edad = parseInt(document.getElementById("edad").value);
    let correo = document.getElementById('correo').value;
    let clave = document.getElementById('clave').value;
    let confirmar = document.getElementById("confirmar").value;


    if (nombre.trim() === "") {
        resultado.innerText = "Escribe tu nombre.";
        resultado.className = "error";
    }
    else {
        if (isNaN(edad)) {
            resultado.innerText = "Escribe tu edad.";
            resultado.className = "error";
        }
        else {
            if (edad < 18 || edad > 100) {
                resultado.innerText = "La edad debe ser un número entre 18 y 100.";
                resultado.className = "error";
            }
            else {
                if (!correo.includes("@") || !correo.includes(".")) {
                    resultado.innerText = "El correo debe tener @ y . para ser válido.";
                    resultado.className = "error";
                }
                else {
                    if(clave.trim()== ""){
                        resultado.innerText=`Escribe una clave`
                        resultado.className=`error`;
                    }
                    else{
                        if (clave !== confirmar) {
                            resultado.innerText = "Las contraseñas no coinciden.";
                            resultado.className = "error";
                        }
                        else {
                            resultado.innerText = `Registro exitoso. Bienvenido(a), ${nombre}.`;
                            resultado.className = "exito";
                        }
                    }
                    
                }
            }
        }
    }

}