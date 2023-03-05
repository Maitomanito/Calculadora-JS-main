function boton(valor) {
    let pantalla = document.getElementById('input').value += valor; print;
    return pantalla;
}
//operaciones normales
function total() {
    let operacion = document.getElementById('input').value;
    document.getElementById('input').value = eval(operacion);
    if (operacion === '') {
        document.getElementById('input').value = '';
    }
    
}
//raiz cuadrada
function raiz(){
    let raiz = document.getElementById('input').value;
    document.getElementById('input').value = Math.sqrt(raiz);
}

//funcion de reset
function reset() {
    document.getElementById('input').value = '';
}