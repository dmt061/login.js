


//crear un icio simple de un inico de seccion, capturando datos desde html con un prompt//



let email = "dami.13tm@gmail.com";

let password = "xyz123";


//usando prompt vamos a capturar datos desde el teclado//

let userEmail = prompt("ingrese su Correo registrado");

let userPassword = prompt("Ingrese su contraseña registrada");

// vamos a crear un inicio de sesion simple/


if(email.match(userEmail) && password.match(userPassword)){
    document.write("Welcome to page")
}else{
    alert("valide sus credenciales")
}
