"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero = rls.questionInt("Ingrese un numero : ");
if (numero % 2) {
    console.log("Es un numero impar");
}
else if (numero == 0) {
    console.log("El numero es igual a 0. ");
}
else {
    console.log("Es un numero par");
}
