
function validacion(){
    
    let datos = new Object();
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var descripcion = document.getElementById("descripcion").value;


       // OBTENGO NOMBRE Y EVALUO
    if(nombre.length < 5){
        document.getElementById("msgNombre").innerText = "Ingrese un nombre correcto...";

    }else{
        document.getElementById("msgNombre").innerText = "";
        datos["Nombre"] = nombre;
    }
    //OBTENGO NOMBRE EVALUO, CARACTERES, LETRAS Y TIPOLOGIA 

    if(email.length > 0){
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)){
            document.getElementById("msgCorreo").innerText = "Ingrese correo valido";
            }else{
                document.getElementById("msgCorreo").innerText = "";
                datos["Email"] = email;
            }
            
         }else{
            document.getElementById("msgCorreo").innerText = "Obligatorio correo";

         }

            //EVALUO SI EL TELEFONO ES CORRECTO
            if(telefono.length < 10){
                document.getElementById("msgTelefono").innerText = "El telefono no es valido";
                } else{
                    document.getElementById("msgTelefono").innerText = "";  
                    datos["Telefono"] = telefono;
            }
        
            //EVALUO SI LA DIRECCION ES CORRECTO
            if(direccion == 0){
                document.getElementById("msgDireccion").innerText = "Debe señlecionar una opcion";
            }else{
                document.getElementById("msgDireccion").innerText = "";  
                datos["Direccion"] = direccion;
            }

            //EVALUO SI LA DESCRIPCION ES CORRECTA

            if(descripcion.length <=0){
                document.getElementById("msgDescripcion").innerText = "Escribir mas 10 caractares";
                
            }else{
                document.getElementById("msgDescripcion").innerText = "";
                datos["Descripcion"] = descripcion;
            }
            console.log(datos);
        } 

        
     
     

  

