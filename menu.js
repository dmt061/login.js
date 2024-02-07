


let opc = parseInt(prompt("seleccione\n 1.Registrarse\n 2. inicar sesion\n 3.salir"))


switch(opc){
    case 1:
        document.write("Registrarse");
        break;
    
    case 2:
        document.write("inicar sesion");
        break;

    case 3:
        document.write("salir");
        break;

    default:
        alert("ingresa un valor valido");
        
}