
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