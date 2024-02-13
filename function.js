
// realizar una funcionalidad que le permita al departamento de nomina generar 
//el calculo del salario delo a pagar de los empleados de acuerdo a su salario y validando
//si estos ganan o no mas de 2 smlv y si tienen derecho a el aux de transporte


// el descuento de salud se calcula: el salario * el 4% de eps
// el descuento de pension se calcula: el salario * el 4% de pension
// el salario neto se calcula : salario - eps - pension y se le suma el axulio de transporte si gana menos de 2smlv


let salary = parseInt(prompt("ingrese el salario del empleado"));

function calcularEps(salary) {
    let descuentoEps = salary * 0.04;
    return descuentoEps
}

function calcularPension(salary){
    let descuentoPension = salary * 0.04;
    return descuentoPension;
}

// llamar a una funcion 

alert( "EPS:" + calcularEps(salary));
let pension = calcularPension(salary);
alert("Pension" + pension)

// vamos a poder crear un callback que recibe como argumento las funciones de calcular salud, EPS y calcular Penscion
 

function calcularsalarioNeto(salary, calcularEps, calcularPension){
    if(salary < (1300000*2) ){
        let salarioNeto = salary - calcularEps(salary) - calcularPension(salary) + 162000
        return salarioNeto
    }else{
        let salarioNeto = salary - calcularEps(salary) - calcularPension(salary)
        return salarioNeto

    }
}

document.write("El salario a pagar es:" + calcularsalarioNeto(salary, calcularEps, calcularPension));
