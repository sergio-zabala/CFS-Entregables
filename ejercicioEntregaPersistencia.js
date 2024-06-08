"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importo los datos de node:fs
var fs = require("node:fs");
//declaro los arreglos del enunciado.
var precios = [525, 3500, 400, 1999];
var productos = ["Leche", "Galletitas", "Harina", "Queso"];
//convierto el arreglo tipo number a tipo string con este metodo.
var contenidoString = precios.toString();
var espacio = "";
var espacio2 = "";
//con este for le agrego espacios al arreglo precios.
for (var i = 0; i < precios.length; i++) {
    espacio += "".concat(precios[i], " ");
}
//guardo la informacion en un .txt
fs.writeFileSync("./precios.txt", espacio);
for (var i = 0; i < productos.length; i++) {
    espacio2 += "".concat(productos[i], " ");
}
fs.writeFileSync("./productos.txt", espacio2);
//leo la informacion del .txt
var datoPrecios = fs.readFileSync("./precios.txt", "utf8");
var espaciosOff = datoPrecios.trim();
var nuevoArrayPrecios = espaciosOff.split(" ");
console.log(nuevoArrayPrecios);
var datoProductos = fs.readFileSync("./productos.txt", "utf8");
var espaciosOff2 = datoProductos.trim();
var nuevoArrayProductos = espaciosOff2.split(" ");
console.log(nuevoArrayProductos);
