// Guia 1 - Ejercicio 1

// 1) Cargar desde el teclado una pila DADA con 3 elementos. Pasar los dos primeros elementos a la
// pila CJTO1 y el restante a la pila CJTO2, ambas pilas inicializadas en vacío.
// 1.1) ¿Importa el orden de las sentencias escritas? Explique.
// 1.2) ¿Funciona el programa si DADA tiene menos de 3 elementos?. Si funciona explicar
// por qué, sino modifícalo. 

let dada = ["a", "b", "c"];
let cjto_1 = [];
let cjto_2 = [];

cjto_2.push(dada.pop());
cjto_1.push(dada.pop(), dada.pop());

// Guia 1 - Ejercicio 3

//3.1 La condicion del ciclo es que Pila1 no este vacía.

//3.2 El ciclo no finaliza nunca porque las pilas en cada vuelta se desapilan de
// la pila "Descarte" y no de Pila1 como indica la condición. Por lo tanto Pila1 nunca estará vacía.

//3.3 
function pasarPila(array1, array2){

    while (array1.length > 0) {
        array2.push(array1.pop())
        
    } 
}

// Guia 1 - Ejercicio 4

// 4) Realizar un programa para:Cargar desde teclado una pila DADA y pasar a la pila DISTINTOS
// todos aquellos elementos distintos al valor 8. Los elementos iguales a 8 deben quedar en DADA.

function pasarElementoDistinto(array1, array2, x) {
while (array1.length > 0) {
    if (array1[array1.length - 1] != x) {
        array2.push(array1.pop())
        
    } else {
        array1.pop();
    }
     

}
}
let dada = [2, 5, 8, 9, 1, 3, 5, 8];
let distintos = [];
pasarElementoDistinto(dada, distintos, 8)

// Guia 1 - Ejercicio 7
// 7) Suponiendo la existencia de una pila LIMITE, pasar los elementos de la pila DADA que sean 
// mayores o iguales que el tope de LIMITE a la pila MAYORES, y los elementos que sean menores a 
// la pila MENORES. ¿Funciona tu solución si DADA está vacía? 

let limite = [];
let dada = [];
let mayores = [];
let menores = [];

while (dada.length > 0) {
    if (dada[dada.length - 1] >= limite[limite.length - 1]) {
        mayores.push(dada.pop())
    } else {
        menores.push(dada.pop())
    }
}


// Guia 1 - Ejercicio 8
// Dada una pila ORIGEN que se carga desde el teclado, y una pila DESTINO inicialmente vacía, 
// se pretende pasar los datos de ORIGEN a DESTINO pero dejándolos en el mismo orden. 

var origen = [2, 3, 4, 5];    
var destino = [];
var auxiliar = [];
var auxiliar2 = [];

pasarPila(origen, auxiliar);
pasarPila(auxiliar, destino);

// 8.1  
// Modificar el programa anterior para Cargar desde el teclado la pila ORIGEN y que la 
// invierta, es decir, que quede ORIGEN con los mismos elementos pero invertidos 

pasarPila(origen, auxiliar);
pasarPila(auxiliar, auxiliar2);
pasarPila(auxiliar2, origen);

// Guia 1 - Ejercicio 9
 
dada = [6, 10, 9];
auxiliar = [];
auxiliar2= [];

pasarPila(dada, auxiliar);
auxiliar2 = auxiliar[auxiliar.length - 1];
auxiliar.pop();
pasarPila(auxiliar, dada);
dada.push(auxiliar2);


// Guia 1 - Ejercicio 10

modelo = [1, 2, 3];
dada = [2, 3, 5, 6, 3, 6];
auxiliar = [];

topeModelo = [];

topeModelo = modelo[modelo.length - 1];
pasarPila(dada, auxiliar);

for (let i = 0; i < auxiliar.length; i++) {
    if (auxiliar[i] != topeModelo) {
        dada.push(auxiliar[i]);

    }
    
}
 
// Guia 1 - Ejercicio 11
pozo = [];
jugador1 = [];
jugador2 = [];

 while (pozo.length > 0) {
     jugador1.push(pozo.pop());
     jugador2.push(pozo.pop());
 }           
// Guia 1 - Ejercicio 12
origen = [8, 5, 8, 6, 5, 9, 8];
modelo = [2, 2, 8];
reemplazo =[2, 3, 4];

auxiliar1 = [];
auxiliar2 = [];
cantidad_aux1 = 0;

pasarPila(origen, auxiliar1);
for (let i = 0; i < auxiliar1.length; i++) {
    if (auxiliar1[i] != modelo[modelo.length - 1]) {
        auxiliar2.push(auxiliar1[i]);
        
    }
    
}

pasarPila(auxiliar2, origen)


// Guia 1 - Ejercicio 13

let dada = [];
let aux = [];
let par = [];
let impar = [];

if (dada.length % 2 === 0) {
    par.push(aux[aux.length - 1]);

} else {
    impar.push(aux[aux.length - 1]);
}




//-------------- GUIA 2 ------------------------




// Guia 2 - Ejercicio 1 

let origen = [2, 5, 6, 8];
let distintos = [];

pasarPila(origen, distintos);


// Guia 2 - Ejercicio 2
aux = [];
aux2 = [];
dada = [];

pasarPila(dada, aux);
pasarPila(aux, aux2);
pasarPila(aux2, dada);

// Guia 2 - Ejercicio 3

datos = [6, 10, 9];
auxiliar = [];
auxiliar2= [];

pasarPila(datos, auxiliar);
auxiliar2 = auxiliar[auxiliar.length - 1];
auxiliar.pop();
pasarPila(auxiliar, datos);
datos.push(auxiliar2);

// Guia 2 - Ejercicio 4 
let datos = [5, 6, 9, 2, 3, 1];
let aux1 = [];
let aux2 = [];

pasarPila(datos, aux1);
aux2.push(aux1[aux1.length - 1]);
pasarPila(aux1, datos);
aux2.push(datos);
datos = aux2;

// Guia 2 - Ejercicio 5

origen = [5, 2, 6, 0, 2, 1, 5, 2];
destino = [];
while (origen.length > 0) {
    for (let i = origen.length - 1; i >= 0; i--) {
        if (origen[i] != 0) {
            destino.push(origen[i]);
            origen.pop();
            
        } else if (origen [i] === 0) {
            break;
        }
        
    }
    
}

// Guia 2 - Ejercicio 6

let fila_a = [];
let fila_b = [];
let resultado = [];
let verdadero = [];
let falso = [];

if (fila_a.length === fila_b.length) {
    verdadero.push(resultado[resultado.lenght - 1])
} else {
    falso.push(resultado[resultado.lenght - 1])
}

// Guia 2 - Ejercicio 7

if (fila_a === fila_b) {
    iguales.push(resultado[resultado.lenght - 1])
    
} else {
    distintas.push(resultado[resultado.lenght - 1])
}

// Guia 2 - Ejercicio 8
