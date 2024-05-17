let datoNumeros: number[] = [4,7,9,3,1,45,67,23,29,78,11,16];
let mayor = encontrarMayor(datoNumeros);
let numParImpar :string;

function encontrarMayor(datoNumeros:number[]) {
    let maximo = datoNumeros[0];
    
    for (let i = 0 ; i <= 12; i++) {
        if (datoNumeros[i] > maximo){
         maximo = datoNumeros[i]
     }
    }
    return maximo;
}
console.log("El numero mayor es "+mayor);

function parImpar() {
    if (mayor%2 === 0) {
          console.log("Es un numero par");  
    }else {
      console.log("Es un numero impar");
    }
}
parImpar();

