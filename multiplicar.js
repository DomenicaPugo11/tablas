function validarInput(input) {
    let mensaje = document.getElementById("errorTxtNumero");;

    mensaje.textContent = "";
    input.classList.remove("input-error");

    if (input.value.trim() === "") {
        mensaje.textContent = "La casilla no puede estar vacía";
        input.classList.add("input-error");
        return false;
    }

    if (!/^[0-9]+$/.test(input.value)) {
        mensaje.textContent = "Ingrese solo números";
        input.classList.add("input-error");
        return false;
    }

    return true;
}

function generarTablas(){
    let contenedor=document.getElementById("contenedor");
    let txtCaja=document.getElementById("txtNumero");
    if (!validarInput(txtCaja)) {
    return;
    }
    let caja=parseInt(txtCaja.value);
    let contenido="";
    let multiplicacion=1;
    for (let i=1;i<=10;i++){
        multiplicacion=i*caja;
        contenido=contenido+"<P>"+ i +"X"+ caja + "=" + multiplicacion + "</p>"
    }
    contenedor.innerHTML = contenido;
}