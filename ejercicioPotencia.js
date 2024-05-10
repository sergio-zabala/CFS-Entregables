"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionFloat("Ingrese el numero de Base: ");
var exponente = rls.questionInt("Ingrese el exponente 'debe ser mayor o igual a cero': ");
var i;
function calcularPotencia(base, exponente) {
    if (exponente == 0) {
        return 1;
    }
    else {
        var resultado = 1;
        for (i = 1; i <= exponente; i++) {
            resultado *= base;
        }
        return resultado;
    }
}
if (exponente >= 0) {
    var resultado = calcularPotencia(base, exponente);
    console.log("El resultado de " + base + " elevado a la " + exponente + " es: " + resultado);
}
else {
    console.log("El exponente debe ser mayor o igual a cero.");
}
