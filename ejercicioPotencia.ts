import * as rls from "readline-sync";

let base : number = rls.questionFloat("Ingrese el numero de Base: ");
let exponente: number = rls.questionInt ("Ingrese el exponente 'debe ser mayor o igual a cero': ");
let i: number;

function calcularPotencia (base : number, exponente : number): number {
    if (exponente == 0) {
        return 1;
    } 
    else {
        let resultado: number = 1;
        for (i = 1; i <= exponente; i++) {
            resultado *= base;
        }
        return resultado;
    }
}

if (exponente >= 0) {
    let resultado: number = calcularPotencia(base, exponente);
    console.log("El resultado de " +base+ " elevado a la " +exponente+ " es: " +resultado);
} else {
    console.log("El exponente debe ser mayor o igual a cero.");
}