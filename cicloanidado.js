
let studentName;
let lastName;
let id;
let email;
let password;

let student = new Array();

let notes = new Array();


function registrarusuarios(){
    studentName = prompt("Ingrese el dato del estudiante: ");
    student.push(studentName);
    lastName = prompt("Ingrese el apellido del estudiante");
    student.push(lastName);
    id = prompt("Ingrese el numero de documento del estudiante");
    student.push(id);
    email = prompt("Ingrese su correo");
    student.push(email);
    password = prompt("Ingrese la contaseña");
    student.push(password);
}

function iniciarsesion(){
    let userMail= prompt("Ingres el usuario registrado:");
    let userPass=("Ingrese la contraseña registrada");
    if(email==userMail && password==userPass){
        return true;
    }else{
        alert("Valide sus credenciales");
        return false;
    }
}

function menuApp(){
    let init = parseInt(prompt("presione 1 para inicializar la aplicacion"));
    while(init!=0){
        let opc= parseInt(prompt("1. registrar\n 2. Iniciar sesion \n 3. salir"));
        switch(opc){
            case 1:
                document.write("Registro");
                registrarusuarios();
                break;
            case 2:
                document.write("Inicar sesion");
                iniciarsesion();
                appNotas(iniciarsesion);
                break;
            case 3:
                document.write("Salir");
                init=0;
                break;
            default:
                alert("Ingrese una opcion valida");
                break;
            
        }
    }

}

function appNotas(iniciarsesion){
    while(iniciarsesion== true){
    alert("Bienvenido" + studentName);
    opcApp = parseInt(prompt("1. Ver mis datos\n 2. Registrar mis notas\n 3. Ver mis notas\n 4. salir"));
    switch(opcApp){
            case 1:
                document.write("ver mis datos");
                break;
            case 2:
                document.write("Registrar mis notas");
                break;
            case 3:
                document.write("Ver mis notas");
                break;
            case 4:
                document.write("Salir");
                iniciarsesion=false;
                break;
            default:
                alert("Ingrese una opcion valida");
                break;
    }
}

}

menuApp();