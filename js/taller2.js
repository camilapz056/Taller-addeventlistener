let formulario=document.getElementById("formTaller2");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", taller2);

function taller2(){
    event.preventDefault();

    let nota = parseFloat(document.getElementById("nota").value);
    let desempeno;
    let estado="Aprobado";

    if(isNaN(nota)){
        resultado.innerText= "Escribe una nota";
        resultado.className="error"
        return;
    }
    else if(nota<0 || nota>5){
        resultado.innerText="La nota debe estar entre 0.0 y 5.0";
        resultado.className="error";
        return;
    }
    else if(nota >= 4.5){
        desempeno = "Exelente";
    } 
    else if(nota >= 4){
        desempeno = "Bueno";
    }
    else if(nota >= 3){
        desempeno = "Aceptable";
    }
    else{
        desempeno = "Insuficiente";
        estado = "No aprobado";
    }
    resultado.innerText=`Nota: ${nota} Desempeño: ${desempeno} Estado: ${estado}`;
    resultado.className="exito";
}
