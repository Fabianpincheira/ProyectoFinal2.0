var registroForm = [];

function AgregarDatos(){
    var personaRegistrada = new Object();
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;
    var comentario = document.getElementById('comentario').value;

    personaRegistrada['Nombre'] = nombre;
    personaRegistrada['Email'] = email;
    personaRegistrada['Telefono'] = telefono;
    personaRegistrada['Direccion'] = direccion;
    personaRegistrada['Comentario'] = comentario;
    

    registroForm.push(personaRegistrada);

    console.log(registroForm);
   

}