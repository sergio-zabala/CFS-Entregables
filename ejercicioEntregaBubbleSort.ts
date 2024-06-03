/*Implemente un algoritmo de ordenamiento con
el método Bubble Sort, para que ordene un
arreglo de longitud N en orden descendente.*/

//declaro un array y lo voy a cargar de manera aleatorea.

let dimArreglo = 8
let arregloAleatorio : number [] = new Array (dimArreglo);

//declaro la funcion para cargar el arreglo. donde concateno la funcion azar dentro de esta funcion

function cargarArreglo (arreglo:number[]){
    for (let i = 0; i < arreglo.length; i++){
        arreglo[i] = azar();
    }

}
//con esta funcion generamos los numeros al azar entre 0 y 100.
function azar():number{
    let numAzar = 0
    numAzar = Math.floor(Math.random()*100);
    return numAzar
}
//muestro el arreglo desordenado.
cargarArreglo (arregloAleatorio);
console.log(arregloAleatorio);

//este metodo permite intercambiar los valores del eje i y el eje j
function intercambiarValores (arreglo:number[],i:number,j:number){
    let auxiliar = 0
    auxiliar=arreglo[i];
    arreglo[i]=arreglo[j];
    arreglo[j]=auxiliar;
}

//este metodo compara los valores de i y j y a su vez ordenarlos.
function comparar (arreglo:number[],i:number,j:number){
    let comparacion = 0
    if (arreglo[i]===arreglo[j]){
        comparacion = 0
    }else if (arreglo[i] < arreglo[j]){
        comparacion = 1
    }else if (arreglo[i] > arreglo[j]){
        comparacion = -1
    }
    return comparacion;
}

//declaramos la funcion para que haga el burbujeo.
function bubbleSort (arreglo:number[]){
    for (let i = 2; i < arreglo.length; i++) { //itero desde el valor 2 porque el primer elemento esta ordenado en la ultima vuelta
        for (let j = 0; j < arreglo.length -1; j++) {
            if (comparar(arreglo, j, j+1)==1) {
                intercambiarValores(arreglo, j, j+1);
            }
            
        }
        
    }
    return arreglo
}

bubbleSort(arregloAleatorio);
console.log(`de esta manera queda el arreglo ordenado de mayor a menor: ${bubbleSort(arregloAleatorio)}`);
