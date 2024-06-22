let numeroSecreto = 0 ;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
const asignarTextoElemento = (elemento, texto) => {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto
}

function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

   if(numeroDeUsuario === numeroSecreto){
            asignarTextoElemento("p",`Acertaste al número en ${intentos} 
                ${(intentos === 1) ? "vez" : "veces"}`)
            document.getElementById("reiniciar").removeAttribute('disabled')
    }else {
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
                asignarTextoElemento("p", "El número secreto es menor") 
        }else{
                asignarTextoElemento("p", "El número secreto es mayor")        
        }
        intentos++;
        limpiarCaja();
    }
   return
}
function limpiarCaja(){
        document.querySelector("#valorUsuario").value = ''
}

const condicionesIniciales = () => {
    asignarTextoElemento("h1", "Hola Mundo!");
    asignarTextoElemento("p", `Escribe un número entre 1 - ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    
    intentos = 1;
}


function generarNumeroAleatorio(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles")
    }else{
        //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio()
        }else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }

}
function reinciarJuego(){
    //limpiar caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", true)
    

    
}
condicionesIniciales();





