
function validacion(){
    var formvalido = true;

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;


    if(nombre == null || nombre.length == 0){
        alert("elnombre no puede estar vacio ");
        formvalido = false;
    }

    if(email == null || email.length == 0){
        alert("el email no puede estar vacio ");
        formvalido = false;
    }
    if(telefono == null || telefono.length == 0){
        alert("el telefono no puede estar vacio ");
        formvalido = false;
    }
    if(direccion == null || direccion.length == 0){
        alert("la direccion no puede estar vacio ");
        formvalido = false;
    }


    return formvalido;
}
