import * as rls from "readline-sync"

let numero = rls.questionInt("Ingrese un numero : ");

if (numero%2) {
    console.log("Es un numero impar");   
             }
else if (numero==0) {
    console.log("El numero es igual a 0. ");
    
                    }
    else {
    console.log("Es un numero par");
         }