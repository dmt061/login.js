



let valor = parseInt(prompt("Marque 1. para avanzado, 2. para sobresaliente, 3. para basico, 4. para no aprobaste"));

switch(valor){

    case 1:
        alert("su nota es 5, su nivel avanzado");
        break;
    case 2:
        alert("Su nota esta entre 4 y 4,9 su nivel es sobresaliente");
        break;
    case 3:
        alert("Su nota esta entre 3,0 y 3,9 su nivel es basico");
        break;
    case 4:
        alert("Su nota es menor a 3,0 su nivel es no aprobado");
        break;
    default:
        alert("ingrese un valor valido");
        break; 
}