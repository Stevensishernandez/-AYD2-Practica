function detectaCambio(contenido){
    if(contenido.className.includes("is-invalid")){
        contenido.className = contenido.className.replace('is-invalid','');
    }
}