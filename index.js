// Tarea 

// 1: 

function esPar (num) {
    return num % 2 === 0 ? "Par" : "impar"
}

// console.log(esPar (7));

// 2: 

function esMayor (num1, num2) {
    return num1 > num2 ? num1 : num2 > num1 ? num2 : 'son iguales'
}

// console.log(esMayor(10, 20));

// 3: 

function esMultiploDeCinco(num) {
    return num % 5 === 0 ? "es multiplo de 5" : " no es multiplo"
  }
  
  
//   console.log(esMultiploDeCinco(25))

//  4:

function imprimirNumerosHasta(num) {
    for (let i = 0; i <= num; i++) {
        console.log(i); 
    }
}

// console.log(imprimirNumerosHasta(10));

//  5:

function imprimirPalabra(palabra,cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
        
    }
}
  
// console.log(imprimirPalabra('benny y coco te quiero',5));


//  6:

function imprimirArray(array) {
    console.log(array)
}

// console.log(imprimirArray(["Rengoku", "Nezuko", "Tankiro", "Kanroji"]));

// 7:

function imprimirArraySinQuintoElemento(array) {
    for (let i = 0; i < array.length; i++) {
        if (i != 4) {
            console.log(array[i]);
        }
        
    }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// imprimirArraySinQuintoElemento(numeros);

function arrayMultipicadoPorNumero(array,num) {
    for (let i = 0; i < array.length; i++) {
        const total = array[i] * num
        console.log(total);
    }
}
arrayMultipicadoPorNumero(numeros,2)


// Crea una función que reciba un array de números y un
// número por parámetro e imprima por consola cada número del 
// array multiplicado por el número pasado por parámetro.