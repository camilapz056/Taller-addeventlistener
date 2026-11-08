let formulario = document.getElementById("formTaller5");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", calcular);

function calcular(){
event.preventDefault();

    let primero = parseFloat(document.getElementById("primero").value);
    let segundo = parseFloat(document.getElementById("segundo").value);
    let operacion = document.getElementById("operacion").value;
    let calculo;
    let mensaje;

    if(isNaN(primero) || isNaN(segundo)){
        resultado.innerText = "Escribe los numeros a operar."
        resultado.className = "error";
    }
    else if(operacion.trim() == ""){
        resultado.innerText = "Selecciona una opcion"
        resultado.className = "error";
    }

    else{

        switch(operacion){
        case `suma`:
            calculo = primero + segundo; 
            mensaje = `${primero} + ${segundo}`

            resultado.innerText=`${mensaje} = ${calculo}`
            resultado.className=`exito`

            break;

        case `resta`:
            calculo = primero - segundo;
            mensaje = `${primero} - ${segundo}`

            resultado.innerText=`${mensaje} = ${calculo}`
            resultado.className=`exito`

            break;

        case `multiplicacion`:
            calculo = primero*segundo;
            mensaje = `${primero} * ${segundo}`

            resultado.innerText=`${mensaje} = ${calculo}`
            resultado.className=`exito`

            break;

        case `division`:

            if(segundo === 0){
                resultado.innerText="No es posible dividir entre cero."
                resultado.className="error";
            }
            else{
                calculo = primero/segundo;
                mensaje = `${primero} / ${segundo}`

                resultado.innerText=`${mensaje} = ${calculo}`
                resultado.className=`exito`
            }
            break;
            
        }

    }

}

