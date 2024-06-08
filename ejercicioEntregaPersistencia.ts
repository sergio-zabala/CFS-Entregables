//importo los datos de node:fs
import * as fs from "node:fs";

//declaro los arreglos del enunciado.
const precios : number[] = [525, 3500, 400, 1999];
const productos : string[] = ["Leche", "Galletitas", "Harina","Queso"];

//convierto el arreglo tipo number a tipo string con este metodo.
let contenidoString : string = precios.toString();
let espacio : string ="";
let espacio2 : string ="";
//con este for le agrego espacios al arreglo precios.
for (let i = 0; i < precios.length; i++){
    espacio += `${precios[i]} `;
}

//guardo la informacion en un .txt
fs.writeFileSync("./precios.txt", espacio);

for (let i = 0; i < productos.length; i++){
    espacio2 += `${productos[i]} `;
}

fs.writeFileSync("./productos.txt",espacio2);

//leo la informacion del .txt
const datoPrecios : string = fs.readFileSync("./precios.txt","utf8");
const espaciosOff : string = datoPrecios.trim();
const nuevoArrayPrecios : string[] = espaciosOff.split(" ");
console.log(nuevoArrayPrecios);
const datoProductos : string = fs.readFileSync("./productos.txt","utf8");
const espaciosOff2 : string = datoProductos.trim();
const nuevoArrayProductos : string[] = espaciosOff2.split(" ");
console.log(nuevoArrayProductos);




