let amigos = []


function agregarAmigo (){
    let nombrenuevo = document.getElementById("amigo").value;
    if (nombrenuevo == ""){
        alert ("Por favor, inserte un nombre.");
    }
    else{
    amigos.push(nombrenuevo);
    limpiarCaja();
    console.log(amigos)
    agregarLista("listaAmigos", amigos);
    }
}
function agregarLista(elemento, arreglo){
    let lista = document.getElementById(elemento);
    lista.innerHTML = "";
    for (var i = 0; i < arreglo.length; i++){
        let li = document.createElement("li");
        li.textContent = arreglo[i];
        lista.appendChild(li);
    }
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function sortearAmigo(){
    if (amigos.length==0){
        alert ("No hay nombres en la lista")
    }
    else{
    amigo = Math.floor (Math.random()*amigos.length); 
    asignarTextoElemento("listaAmigos", "El amigo secreto es "+ amigos[amigo])
    }
   
}
function limpiarCaja(){
    document.querySelector("#amigo").value = "";

}
