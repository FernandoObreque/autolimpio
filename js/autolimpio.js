const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


//---------- NOMBRE ----------
document.getElementById("nombre").addEventListener("blur", (evento) => {
    
    const input = evento.currentTarget;
    const txtNombre = input.value;
    
    const feedbackNombre = document.getElementById("feedback-nombre");

    if( txtNombre.length > 30 ) {        
        feedbackNombre.innerHTML = "Has superado el máximo de 30 caracteres";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackNombre.className = "invalid-feedback";
    } else {        
        feedbackNombre.innerHTML = "OK";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackNombre.className = "valid-feedback";
    }
});



//---------- APELLIDO ----------
document.getElementById("apellido").addEventListener("blur", (evento) => {
    
    const input = evento.currentTarget;
    const txtApellido = input.value;
    
    const feedbackApellido = document.getElementById("feedback-apellido");

    if( txtApellido.length > 30) {        
        feedbackApellido.innerHTML = "Has superado el máximo de 30 caracteres";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackApellido.className = "invalid-feedback";
    } else {        
        feedbackApellido.innerHTML = "OK";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackApellido.className = "valid-feedback";
    }
});



//---------- RUT ----------
document.getElementById("rut").addEventListener("blur", (evento) => {
    
    const input = evento.currentTarget;
    const txtRut = input.value;
    
    const feedbackRut = document.getElementById("feedback-rut");

    if( txtRut.length > 8 ) {        
        feedbackRut.innerHTML = "Máximo 8 caracteres";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackRut.className = "invalid-feedback";
    } else {        
        feedbackRut.innerHTML = "OK";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackRut.className = "valid-feedback";
    }
});
    

/*document.getElementById("digitoverificador").addEventListener("blur", (evento) => {
    
    const digitoverificador = document.getElementById("digitoverificador").value;
    const input = evento.currentTarget;
    
    const permitidos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'k', 'K'];
    
    

    if( !permitidos.includes(digitoverificador) ) {        
        feedbackRut.innerHTML = "Ingresa los caracteres correspondientes";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackRut.className = "invalid-feedback";
    } else {        
        feedbackRut.innerHTML = "OK";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackRut.className = "valid-feedback";
    }
});
*/

//---------- DIGITOVERIFICADOR ----------
document.getElementById("dv").addEventListener("blur", (evento) => {
    
    const input = evento.currentTarget;
    const txtDv = input.value;
    
    const feedbackDv = document.getElementById("feedback-dv");

    if( txtDv.length > 1 ) {        
        feedbackDv.innerHTML = "Has superado el máximo de caracteres";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackDv.className = "invalid-feedback";
    } else {        
        feedbackDv.innerHTML = "OK";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackDv.className = "valid-feedback";
    }
});


//---------- DIRECCION ----------------
document.getElementById("direccion").addEventListener("blur", (evento) => {
    
    const input = evento.currentTarget;
    const txtDireccion = input.value;
    
    const feedbackDireccion = document.getElementById("feedback-direccion");

    if( txtDireccion.length > 80 ) {        
        feedbackDireccion.innerHTML = "Has superado el máximo de 80 caracteres";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackDireccion.className = "invalid-feedback";
    } else {        
        feedbackDireccion.innerHTML = "OK";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackDireccion.className = "valid-feedback";
    }
});



//---------- DATOS DEL VEHICULO ----------------
//---------- MARCA -----------------------------

document.getElementById("marca").addEventListener("blur", (evento) => {
    
    const input = evento.currentTarget;
    const txtMarca = input.value;
    
    const feedbackMarca = document.getElementById("feedback-marca");

    if( txtMarca.length > 20 ) {        
        feedbackMarca.innerHTML = "Has superado el máximo de 20 caracteres";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackMarca.className = "invalid-feedback";
    } else {        
        feedbackMarca.innerHTML = "OK";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackMarca.className = "valid-feedback";
    }
});


//---------- MODELO -----------------------------

document.getElementById("modelo").addEventListener("blur", (evento) => {
    
    const input = evento.currentTarget;
    const txtModelo = input.value;
    
    const feedbackModelo = document.getElementById("feedback-modelo");

    if( txtModelo.length > 20 ) {        
        feedbackModelo.innerHTML = "Has superado el máximo de 20 caracteres";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackMarca.className = "invalid-feedback";
    } else {        
        feedbackModelo.innerHTML = "OK";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackMarca.className = "valid-feedback";
    }
});




document.getElementById("ano").addEventListener("blur", (evento) => {
    
    const input = evento.currentTarget;
    const txtAno = input.value;
    
    const feedbackAno = document.getElementById("feedback-ano");

    if( txtAno.length > 4 ) {        
        feedbackAno.innerHTML = "Has superado el máximo de 4 caracteres";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackAno.className = "invalid-feedback";
    } else {        
        feedbackAno.innerHTML = "OK";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackAno.className = "valid-feedback";
    }
});



    
    
    
    
    
   