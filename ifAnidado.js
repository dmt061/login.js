
let peso = prompt("ingrese su peso");

let altura = prompt("ingrese su altura");

let imc = peso/(altura*altura);

if(imc < 18.5){
    alert("Tienes peso bajo")
}else if(imc >= 18.5 && imc <= 24.9 ){
    alert("Tiene un nivel de peso normal")
}else if (imc >= 25.0 && imc <= 29.9){
    alert("Tienes sobre peso")
}else if(imc >=30.0){
    alert("Tienes obesidad")
}else{
    alert("ingrese valores validos");
}
