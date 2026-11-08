let formulario = document.getElementById("formTaller3");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", taller3);
function taller3(){
    event.preventDefault();

    let numeroA = parseFloat(document.getElementById("numeroA").value);
    let numeroB =parseFloat(document.getElementById("numeroB").value);
    let numeroC = parseFloat(document.getElementById("numeroC").value);

    if(isNaN(numeroA) || isNaN(numeroB) || isNaN(numeroC)){
        resultado.innerText="Completa los tres numeros"
        resultado.className="error";
    }

    else{

        if(numeroA > numeroB && numeroA > numeroC){
        resultado.innerText=`El numero mayor es ${numeroA}`
        resultado.className=`exito`;
        }
        else if(numeroB > numeroA && numeroB > numeroC){
            resultado.innerText=`El numero mayor es ${numeroB}`
            resultado.className=`exito`;
        }
        else if(numeroC > numeroA && numeroC > numeroB){
            resultado.innerText=`El numero mayor es ${numeroC}`
            resultado.className=`exito`;
        }

        else if(numeroA == numeroB && numeroA == numeroC){
            resultado.innerText=`Los numeros son iguales.`
            resultado.className=`exito`;
        }

        else{
            resultado.innerText=`Dos se los numeros son iguales`
            resultado.className=`error`;
        }
    }


}