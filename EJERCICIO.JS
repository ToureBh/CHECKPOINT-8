//Cree un bucle for en JS que imprima cada nombre en esta lista. 
var miLista = ["velma", "exploradora", "jane", "john", "harry"];

for (nombre in miLista) {
    console.log(miLista[nombre])
}

//-Cree un bucle while que recorra la misma lista y también imprima los nombres.
// Nota: Recuerda crear un contador para que el ciclo no sea infinito.

var i = 0;
while (i < miLista.length) {
    console.log(miLista[i]);
    i++;
}

//-Cree una función de flecha que devuelva "Hola mundo".

holaMundo = () => { console.log("Hola mundo"); }
holaMundo();