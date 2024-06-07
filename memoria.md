# CHECKPOINT 8

## 1. ¿Qué tipo de bucles hay en JS?

Una de las principales ventajas de la programación es la posibilidad de crear bucles y repeticiones para tareas específicas, y que no tengamos que realizar el mismo código varias veces de forma manual.

En JavaScript los bucles (loops) son utilizados para realizar tareas repetitivas con base en una condición. Las condiciones típicamente devuelven true (verdadero) o false(falso) al ser evaluados. El bucle continuará ejecutándose hasta que la condición devuelva false.

Los bucles nos permiten simplificar nuestro código, que sea más fácil de leer e incluso más fácil de modificar y mantener.

Hay muchos diferentes tipos de bucles, pero esencialmente, todos hacen lo mismo: repiten una acción una cantidad veces.
Los diversos mecanismos de bucle ofrecen diferentes formas de determinar los puntos de inicio y terminación del bucle. Y usaremos el tipo que más nos convenga para cada situación.

![Foto loops](https://lenguajejs.com/fundamentos/estructuras-de-control/flujo-de-ejecucion/bucles-flujo-repeticion.png)

Cuando estamos aprendiendo a programar, es muy común que cometamos un error creando el bucle y nos quedemos en un bucle infinito, es decir, en una situación donde nuestro programa se queda eternamente en bucle y nunca termina. 

Como programadores, esta situación siempre hay que evitarla. Para ello, lo que debemos hacer es siempre comprobar que existe un incremento (o decremento) y que en algún momento la condición va a ser falsa y se podrá salir del bucle.

```javascript
// ¡Los bucles infinitos son malos!
while (true) {
  console.log("¡Hola, mundo!");
}
```

De producirse un bucle infinto, nuestro programa se quedará atascado y tendremos que forzar para finalizarlo. 

Antes de aprender sobre los distintos bucles en JavaScript debemos explicar algunos conceptos:

* **Condición**:
Al igual que en los condicionales *if*, en los bucles se va a evaluar una condición para saber si se debe seguir repetiendo el bucle o se debe finalizar. Habitualmente, lo que se suele hacer es establecer que si la condición es verdadera, se vuelve a repetir el bucle. Por el contrario, si es falsa, se finaliza. Sin embargo, esta condición puede variar dependiendo de la implementación que le indique el programador.

* **Iteración**:
Otro concepto que usaremos mucho dentro de un bucle es el concepto de Iteración. Esto se refiere a cada una de las repeticiones de un bucle. 
Es importante recordar que en programación se suele empezar a contar en 0, por lo que esa es la primera iteración. Si el bucle va desde 0 a 3, hay 4 iteraciones.

* **Contador**:
Muchas veces, los bucles que creamos incorporan un contador, que no es más que algo que irá guardando un número para contar el número de repeticiones realizadas, y así finalizar cuando se llegue a otro número concreto. Dicho contador hay que inicializarlo (crearlo y darle un valor) antes de comenzar el bucle.

* **Incremento**:
Al igual que tenemos un contador en un bucle, también debemos tener una parte donde hagamos un incremento (o un decremento) de dicho contador. Si no lo tuvieramos, el contador no cambiaría y la condición siempre sería veradera, por lo que sería imposible salir del bucle.


Las declaraciones para bucles proporcionadas en JavaScript son:

### for loop:

Un ciclo for se repite hasta que una condición especificada se evalúe como `false`. El bucle for de JavaScript es similar al bucle for de Java y C.
Una declaración for tiene el siguiente aspecto:


```javascript
for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización])
  instrucción
```

Cuando se ejecuta un bucle for, ocurre lo siguiente:
1. Se ejecuta la expresión de iniciación `expresiónInicial`, si existe. Esta expresión normalmente inicia uno o más contadores de bucle, pero la sintaxis permite una expresión de cualquier grado de complejidad. Esta expresión también puede declarar variables.

2. Se evalúa la expresión. Si el valor de `expresiónCondicional` es verdadero, se ejecutan las instrucciones del bucle. Si el valor de condición es falso, el bucle for termina. (Si la expresión condición se omite por completo se supone que la condición es verdadera).

3. Se ejecuta la instrucción/es.

4. Si está presente, se ejecuta la expresión de actualización `expresiónDeActualización`.

5. El control regresa al paso 2.


EJEMPLOS:
```javascript
// for (inicialización; condición; incremento)
for (let i = 0; i < 5; i++) {
  console.log("Valor de i:", i);
}



//EJEMPLO DE DECREMENTO
for (let i = 5; i > 0; i--) {
  console.log("Valor de i:", i);
}

```

Como vemos, la sintaxis de un bucle for es muy compacta y rápida de escribir, sin embargo puede parecernos más críptica cuando la vemos por primera vez.

La sintaxis del bucle for es mucho más práctica porque te obliga a escribir la inicialización, la condición y el incremento antes del propio bucle, y eso hace que no nos olvidemos de estos tres puntos fundamentales, cosa que suele ocurrir en los bucles ``while`` que veremos más tarde.



### for...in loop:
La declaración for...in itera una variable especificada sobre todas las propiedades enumerables de un objeto, en orden arbitrario. Para cada propiedad distinta, se pueden ejecutar sentencias. Una declaración for...in tiene el siguiente aspecto:

```javascript
for (variable in object) {
...
}
```

* **Variable**: Un nombre distinto es asignado a la variable en cada iteración.

* **Objeto**: Objeto cuyas propiedades enumerables (no de tipo symbol) son iteradas.


EJEMPLO:

La siguiente función toma como argumento un objeto y el nombre del objeto. Luego itera sobre todas las propiedades del objeto y devuelve una cadena que enumera los nombres de las propiedades y sus valores.

```javascript
// Inicializar objecto.
a = { "a": "Athens", "b": "Belgrade", "c": "Cairo" }

// Iterar sobre las propiedades.
var s = ""
for (var key in a) {
    s += key + ": " + a[key];
    s += "<br />";
    }
document.write (s);

// Resultado:
// a: Athens
// b: Belgrade
// c: Cairo
```


### for...of loop:
Este crea un bucle que se repite sobre objetos iterables (incluidos Array, Map, Set, objetos arguments y así sucesivamente), invocando un bucle de iteración personalizado con declaraciones que se ejecutarán para el valor de cada distinta propiedad.

```javascript
  for (variable of object) {
        statement
    }
```

* **Variable**: En cada iteración se asigna un valor de una propiedad distinta a la variable.

* **Objeto**: Objeto cuyas propiedades son iteradas.

El siguiente ejemplo muestra la diferencia entre un bucle `for...of` y un bucle `for...in`. Mientras que for...in itera sobre los nombres de propiedad, for...of itera sobre los valores de propiedad:

```JS
const arr = [3, 5, 7];
arr.foo = "hola";


for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}


for (let i of arr) {
  console.log(i); // logs 3, 5, 7
}

```


### while loop:
El bucle while empieza por evaluar la condición. Si la condición es verdadera (devuelve ``true``), entonces las sentencias son ejecutadas. Si la condición es falsa (devuelve ``false``), entonces las sentencias no son ejecutadas. Luego el bucle finaliza.

Aquí la sintaxis del bucle while:
```JS
while (condicion)
{
  sentencia(s);
}
```

* **Sentencia(s)**: Una sentencia es código que se ejecuta si la condición devuelve verdadero ( ``true`` ).

* **Condición(s)**: Es una expresión booleana (``Boolean``) que es evaluada antes de cada paso (iteración) por el bucle. Si esta condición evalúa a verdadero ( ``true`` ), las sentencias son ejecutadas. Cuando la condición evalúa a falso ( ``false`` ), la ejecución continúa con la siguiente sentencia luego del bucle while.

Por tanto, una declaración while ejecuta sus instrucciones siempre que una condición especificada se evalúe como true. Si la condición se vuelve false, la instrucción dentro del bucle se deja de ejecutar y el control pasa a la instrucción que sigue al bucle.

La prueba de condición ocurre antes de que se ejecute la expresión en el bucle. Si la condición devuelve true, se ejecuta la expresión y la condición se prueba de nuevo. Si la condición devuelve false, la ejecución se detiene y el control se pasa a la instrucción que sigue a while.

Para ejecutar varias instrucciones, usamos una declaración de bloque ({ ... }) para agruparlas.


EJEMPLO:

El siguiente ciclo del while se repite siempre que n sea menor que 3
```JS
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}

//Con cada iteración, el bucle incrementa n y agrega ese valor a x. Por lo tanto, x y n toman los siguientes valores:
//Después de la primera pasada: n = 1 y x = 1
//Después de la segunda pasada: n = 2 y x = 3
//Después de la tercera pasada: n = 3 y x = 6
//Después de completar la tercera pasada, la condición n < 3 ya no es true, por lo que el bucle termina.

```


### do... while loop:
La instrucción do...while se repite hasta que una condición especificada se evalúe como falsa. Está cercanamente relacionado al bucle while. En este, la condición se evalúa al final.
Aquí la sintaxis para el bucle do...while:

```js
do {
   *Sentencias;*
} while (*condicion*);

```
* **Sentencia(s)**: Una sentencia es ejecutada por lo menos una vez antes de que la condición o expresión booleana sea evaluada y es re-ejecutada cada vez que la condición devuelve true.

* **condición**: Aquí la condición es una expresión booleana. Si la expresión booleana evalúa a ``true``, las sentencias son ejecutadas de nuevo. Cuando la expresión booleana devuelve ``false``, el bucle finaliza.

La **sentencia** siempre se ejecuta una vez antes de que se verifique la condición. (Para ejecutar varias instrucciones, usa una declaración de bloque ({ ... }) para agrupar esas declaraciones).
Si condición es ``true``, la declaración se ejecuta de nuevo. Al final de cada ejecución, se comprueba la condición. Cuando la condición es ``false``, la ejecución se detiene y el control pasa a la declaración que sigue a do...while.

EJEMPLO:

```js
var i = 0;
do {
  i = i + 1;
  console.log(i);
} while (i < 5);


//Resultado:
//1
//2
//3
//4
//5

```

Los bucles Do...While aseguran que el código se ejecute por lo menos una vez, y luego de esta primera ejecución, si la condición dentro del while() es true, continúa con el bucle, de otra forma, se detiene.



### Declaración ``continue``
La instrucción ``continue`` se puede usar para reiniciar un bucle while, do-while o for.
Cuando utilizamos un ``continue`` sin una etiqueta, finaliza la iteración actual del while, do-while o for y continúa la ejecución del bucle con la siguiente iteración. 

A diferencia de la instrucción ``break``, ``continue`` no termina la ejecución del bucle por completo. En un bucle while, vuelve a la condición. En un bucle for, salta a la expresión-incremento.
Cuando usamos continue con una etiqueta, se aplica a la declaración de bucle identificada con esa etiqueta.

EJEMPLO:
El siguiente ejemplo muestra un bucle while con una instrucción ``continue`` que que se ejecuta cuando el valor de i es 3. Por lo tanto, n toma los valores 1, 3, 7 y 12.

```JS
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12


let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    // continue;
  }
  n += i;
  console.log(n);
}
// 1,3,6,10,15

```



## 2. ¿Cuáles son las diferencias entre const, let y var?
### var
Antes de la llegada de ES6, las declaraciones **var** eran las que mandaban. Sin embargo, hay problemas asociados a las variables declaradas con **var**. Por eso fue necesario que surgieran nuevas formas de declarar variables. En primer lugar, vamos a entender más sobre **var** antes de discutir esos problemas.

* Ámbito de **var**: 

El ámbito significa esencialmente dónde están disponibles estas variables para su uso. Las declaraciones **var** tienen un ámbito global o un ámbito de función/local.

El ámbito es global cuando una variable **var** se declara fuera de una función. Esto significa que cualquier variable que se declare con **var** fuera de una función está disponible para su uso en toda la pantalla.

**var** tiene un ámbito local cuando se declara dentro de una función. Esto significa que está disponible y solo se puede acceder a ella dentro de esa función.

Para entenderlo mejor, tenemos el siguiente ejemplo:

```js
    var saludar = "hey, hola";
    
    function nuevaFuncion() {
        var hola = "hola";
    }

//Aquí, *saludar* tiene un ámbito global porque existe fuera de la función mientras que *hola* tiene un ámbito local. Así que no podemos acceder a la variable *hola* fuera de la función. Así que si realizamos esto, obtendremos un error que se debe a que hola no está disponible fuera de la función:

    var tester = "hey, hola";
    
    function nuevaFuncion() {
        var hola = "hola";
    }
    console.log(hola); // error: hola is not defined
```

Las variables con var se pueden volver a declarar y modificar.
Esto significa que podemos hacer esto dentro del mismo ámbito y no obtendremos un error:

```js
    var saludar = "hey, hola";
    var saludar = "dice Hola tambien";
// y esto también

    var saludar = "hey, hola";
    saludar = "dice Hola tambien";

```

* Hoisting de **var**:

Hoisting es un mecanismo de JavaScript en el que las variables y declaraciones de funciones se mueven a la parte superior de su ámbito antes de la ejecución del código. Esto significa que si hacemos esto:

```js
    console.log (saludar);
    var saludar = "dice hola"
//se interpreta así:

    var saludar;
    console.log(saludar); // saludar is undefined
    saludar = "dice hola"

//Entonces las variables con var se elevan a la parte superior de su ámbito y se inicializan con un valor de undefined.
```

* Problema con **var**:

Hay una debilidad que viene con **var**. Usaremos el siguiente ejemplo para explicarlo:

```js
    var saludar = "hey, hola";
    var tiempos = 4;

    if (tiempos > 3) {
        var saludar = "dice Hola tambien"; 
    }
    
    console.log(saludar) // "dice Hola tambien"
```
Por lo tanto, como tiempos > 3 devuelve true, saludar se redefine para "dice Hola tambien". Aunque esto no es un problema si quieres redefinir saludar a conciencia, se convierte en un problema cuando no te das cuenta de que la variable saludar ha sido definida antes.

Si has utilizado saludar en otras partes de tu código, puede que te sorprenda la salida que puedes obtener. Esto probablemente causará muchos errores en tu código. Por eso son necesarios let y const.


### let 
**let** es ahora preferible para la declaración de variables. No es una sorpresa, ya que es una mejora de las declaraciones con **var**. También resuelve el problema con **var** que acabamos de cubrir. Consideremos por qué esto es así.

* Ámbito de **let**: 

**let** tiene un ámbito de bloque. Un bloque es un trozo de código delimitado por {}. Un bloque vive entre llaves. Todo lo que está dentro de llaves es un bloque.

Así que una variable declarada en un bloque con **let** solo está disponible para su uso dentro de ese bloque. Por ejemplo:

```js
   let saludar = "dice Hola";
   let tiempos = 4;

   if (tiempos > 3) {
        let hola = "dice Hola tambien";
        console.log(hola);// "dice Hola tambien"
    }
   console.log(hola) // hola is not defined
```
Vemos que el uso de hola fuera de su bloque (las llaves donde se definió) devuelve un error. Esto se debe a que las variables **let** tienen un alcance de bloque.

**let** puede modificarse pero no volver a declararse.
Al igual que **var**, una variable declarada con **let** puede ser actualizada dentro de su ámbito. A diferencia de **var**, una variable let no puede ser re-declarada dentro de su ámbito. Así que mientras esto funciona:

```js
    let saludar = "dice Hola";
    saludar = "dice Hola tambien";
```
esto devolverá un error:

```js
    let saludar = "dice Hola";
    let saludar = "dice Hola tambien"; // error: Identifier 'saludar' has already been declared
```
Sin embargo, si la misma variable se define en diferentes ámbitos, no habrá ningún error:

```js
    let saludar = "dice Hola";
    if (true) {
        let saludar = "dice Hola tambien";
        console.log(saludar); // "dice Hola tambien"
    }
    console.log(saludar); // "dice Hola"
```
¿Por qué no hay ningún error? Esto se debe a que ambas instancias son tratadas como variables diferentes, ya que tienen ámbitos diferentes.

Este hecho hace que **let** sea una mejor opción que **var**. Cuando se utiliza **let**, no hay que preocuparse de sí se ha utilizado un nombre para una variable antes, puesto que una variable solo existe dentro de su ámbito.

Además, como una variable no puede ser declarada más de una vez dentro de un ámbito, entonces el problema discutido anteriormente que ocurre con **var** no sucede.

* Hoisting de let:

Al igual que **var**, las declaraciones **let** se elevan a la parte superior. A diferencia de **var** que se inicializa como undefined, la palabra clave **let** no se inicializa. Aunque si intentas usar una variable **let** antes de declararla, obtendrás un Reference Error.


### const
Las variables declaradas con **const** mantienen valores constantes. Comparten muchas similitudes con las declaraciones **let**.

Las declaraciones **const** tienen un ámbito de bloque. Al igual que las declaraciones let, solamente se puede acceder a las declaraciones **const** dentro del bloque en el que fueron declaradas.

**const** no puede modificarse ni volver a declararse
Esto significa que el valor de una variable declarada con **const** es el mismo dentro de su ámbito. No se puede actualizar ni volver a declarar. Así que si declaramos una variable con **const**, no podemos hacer esto:

```js
    const saludar = "dice Hola";
    saludar = "dice Hola tambien";// error: Assignment to constant variable. 
```

ni esto:

```js
    const saludar = "dice Hola";
    const saludar = "dice Hola tambien";// error: Identifier 'saludar' has already been declared
```
Por lo tanto, toda declaración **const**, debe ser inicializada en el momento de la declaración.

Este comportamiento es algo diferente cuando se trata de objetos declarados con **const**. Mientras que un objeto **const** no se puede actualizar, las propiedades de este objeto sí se pueden actualizar. Como resultado, si declaramos un objeto **const** como este:

```js
    const saludar = {
        mensaje: "dice Hola",
        tiempos: 4
    }
// mientras que no podemos hacer esto:

    saludar = {
        palabras: "Hola",
        numero: "cinco"
    } // error:  Assignment to constant variable.

// podemos hacer esto:

    saludar.mensaje = "dice Hola tambien";
```
Esto actualizará el valor de `saludar.mensaje` sin devolver errores.

* Hoisting de **const**:

Al igual que **let**, **const** las declaraciones **const** se elevan a la parte superior, pero no se inicializan.

En resumen, estas son las diferencias entre **var**, **let** y **const**:

* Las declaraciones var tienen un ámbito global o un ámbito función/local, mientras que let y const tienen un ámbito de bloque.

* Las variables var pueden ser modificadas y re-declaradas dentro de su ámbito; las variables let pueden ser modificadas, pero no re-declaradas; las variables const no pueden ser modificadas ni re-declaradas.

* Todas ellas se elevan a la parte superior de su ámbito. Pero mientras que las variables var se inicializan con undefined, let y const no se inicializan.

* Mientras que var y let pueden ser declaradas sin ser inicializadas, const debe ser inicializada durante la declaración.


## 3. ¿Qué es una función de flecha?

Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

Diferencias y limitaciones:

* No tiene sus propios enlaces a this o super y no se debe usar como métodos.
* No tiene argumentos o palabras clave new.target.
* No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
* No se puede utilizar como constructor.
* No se puede utilizar yield dentro de su cuerpo.

### Sintaxis básica
Un parámetro. Con una expresión simple no se necesita ``return``:

```js
param => expression;
(param) => expression;
```

Varios parámetros requieren paréntesis. Con una expresión simple no se necesita ``return``:

```js
(param1, paramN) => expression;
```

Las declaraciones de varias líneas requieren corchetes y ``return``:

```js
(param) => {
  let a = 1;
  return a + b;
};
```

Varios parámetros requieren paréntesis. Las declaraciones de varias líneas requieren corchetes y ``return``:

```js
(param1, paramN) => {
  let a = 1;
  return a + b;
};
```

Para devolver una expresión de objeto literal, se requieren paréntesis alrededor de la expresión:


```js
(params) => ({ foo: "a" }); // devuelve el objeto {foo: "a"}
```

Los parámetros rest son compatibles:

```js
(a, b, ...r) => expression;
```

Se admiten los parámetros predeterminados:

```js
(a = 400, b = 20, c) => expression;
```

Desestructuración dentro de los parámetros admitidos:

```js
([a, b] = [10, 20]) => a + b; // el resultado es 30
({ a, b } = { a: 10, b: 20 }) => a + b; // resultado es 30
```

Ahora vamos a descomponer paso a paso una función tradicional hasta convertirla en la funció de flecha más simple.

Nota: Cada paso a lo largo del camino es una "función flecha" válida.

```js
// Función tradicional
function (a){
  return a + 100;
}

// Desglose de la función flecha:

// 1. Eliminamos la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
(a) => {
  return a + 100;
}

// 2. Quitamos los corchetes del cuerpo y la palabra "return" — el return está implícito.
(a) => a + 100;

// 3. Suprimimos los paréntesis de los argumentos
a => a + 100;
```

Como se muestra arriba, los { corchetes }, ( paréntesis ) y "return" son opcionales, pero pueden ser obligatorios.

Por ejemplo, si tenemos varios argumentos o ningún argumento, debemos volver a introducir paréntesis alrededor de los argumentos:

```js
// Función tradicional
function (a, b){
  return a + b + 100;
}

// Función flecha
(a, b) => a + b + 100;

// Función tradicional (sin argumentos)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

// Función flecha (sin argumentos)
let a = 4;
let b = 2;
() => a + b + 100;
```
Del mismo modo, si el cuerpo requiere líneas de procesamiento adicionales, deberás volver a introducir los corchetes y el ``return``:

```js
// Función tradicional
function (a, b){
  let chuck = 42;
  return a + b + chuck;
}

// Función flecha
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}
```

Y finalmente, en las funciones con nombre tratamos las expresiones de flecha como variables:

```js
// Función tradicional
function bob(a) {
  return a + 100;
}

// Función flecha
let bob = (a) => a + 100;
```

## 4. ¿Qué es la desestructuración de variables?
La desestructuración de objetos es una de las estrategias más utilizadas al trabajar en Javascript debido a que en Javascript se utilizan muchísimo las estructuras de datos de objetos y es muy interesante simplificar lo máximo posible.

Como su propio nombre indica, se trata de desestructurar, es decir, separar una estructura, que en Javascript es o un array o un objeto.

### Desestructuración de arrays
Empecemos por las más sencillas, que son las operaciones de desestructuración de arrays. En los siguientes ejemplos vamos a separar elementos de un array y sacarlo a variables individuales.

```JS
const elements = [5, 2];
const [first, last] = elements;    // first = 5, last = 2

const elements = [5, 4, 3, 2];
const [first, second] = elements;  // first = 5, second = 4, rest = discard

const elements = [5, 4, 3, 2];
const [first, , third] = elements; // first = 5, third = 3, rest = discard

const elements = [4];
const [first, second] = elements;  // first = 4, second = undefined
```
En el primer caso, bastante obvio, extraemos el primer y segundo valor del array elements en una variable denominada first y otra llamada last.

En el segundo caso, hacemos lo mismo en las variables first y second, pero como el array tiene más elementos y sólo hemos indicado dos variables (first y second), el resto son descartadas.

En el tercer caso pasa muy parecido, excepto que en el segundo parámetro de la parte izquierda, no colocamos ningún elemento, por lo tanto, ese dato se descartará.

En el cuarto caso, nos pasa al contrario, y hay menos elementos que variables, por lo que first toma el primer (y único) elemento y second se queda sin ningún valor (obtiene el valor undefined).

**El truco en estos cuatro casos está en que en la parte derecha utilizamos los [] para indicar que se trata de un array, pero en la parte izquierda los utilizamos para indicar que hacemos una desestructuración.**

### Intercambio de variables
Veamos otro ejemplo donde utilizamos la desestructuración. En este caso, haremos un clásico intercambio de variables, donde el valor inicial de *a* debe estar en *b* y viceversa. Sin utilizar desestructuración, debemos utilizar una variable auxiliar aux donde guardar uno de los valores temporalmente, mientras hacemos el cambio de variables:

```JS
// Sin desestructuración
let a = 10;
let b = 5;

let aux = a;
a = b;
b = aux;
```

Sin embargo, si utilizamos desestructuración, este ejemplo es mucho más sencillo:

```JS
// Con desestructuración
let a = 10;
let b = 5;

[a, b] = [b, a];`
```

Utilizamos la misma estrategia explicada en el apartado anterior, sólo que en este caso los arrays sólo se están utilizando para hacer la operación de una sola vez, lo único que termina existiendo son las variables *a* y *b*.

### Spread/rest (...)
Aunque es una funcionalidad individual, el spread / rest se suele utilizar mucho con la desestructuración y resulta un sistema muy cómodo y versátil en Javascript.

#### Spread (Expandir)
Para explicar el spread vamos a crear una función muy sencilla e ilustrar el ejemplo. Dicha función se llamará debug() y recibirá un parámetro param, el cuál se imprimirá por consola mediante un console.log():

```JS
function debug(param) {
  console.log(param);
}

// O lo que es lo mismo:
const debug = (param) => console.log(param);
```

Como ves, muy sencillo. Sin embargo, vamos a hacer un pequeño cambio, primero en el param que pasamos por parámetro a la función, y luego en otro ejemplo, en el param que utilizamos en el console.log(), en el cuerpo de la función.

En primer lugar, colocaremos los ... en el param del console.log():

```JS
const debug = (param) => console.log(...param);
const array = [1, 2, 3, 4, 5];
debug(array);

// 1 2 3 4 5
```
Analicemos lo que ha ocurrido. Le hemos pasado un array de 5 elementos a la función debug() la cuál ha desestructurado el array y lo ha expandido en elementos individuales (observa como lo devuelve).

#### Rest (Agrupar)
Sin embargo, veamos en el siguiente ejemplo, como colocamos los ... en los parámetros de la función. Luego, al llamar a la función debug() le pasamos los 5 datos individuales:

```JS
const debug = (...param) => console.log(param);
debug(1, 2, 3, 4, 5);

// [1, 2, 3, 4, 5]
```

En este caso, el ...param está agrupando esas 5 variables en un array.

Si aún no lo vemos claro, repasemos uno de los primeros ejemplos de este artículo. Ahora vamos a hacer una pequeña modificación para utilizar los ... en modo rest (agrupación de varios elementos individuales, en un array):

```JS
const elements = [5, 4, 3, 2];
const [first, ...rest] = elements;  // first = 5, rest = [4, 3, 2]
```

Observa que el primer elemento del array se guarda en la variable first, sin embargo, el resto de valores, se almacena en la variable rest y se agrupa en un array, de modo que rest contiene el array [4, 3, 2].


### Reestructuración de arrays
Aprovechando estas características que hemos visto de desestructuración, también podríamos aprovecharlas para reestructurar un array y recrear arrays. Veámoslo con un ejemplo.

Tenemos un array de 2 elementos [3, 4] y queremos aprovecharlo para crear un nuevo array del 1 al 5. Vamos a hacer uso de la desestructuración para reaprovecharlo:

```JS
const pair = [3, 4];

// Usando desestructuración + spread
const complete = [1, 2, ...pair, 5];  // [1, 2, 3, 4, 5]

// Sin usar desestructuración
const complete = [1, 2, pair, 5];     // [1, 2, [3, 4], 5]
```

En este caso, tendríamos que complete es el nuevo array [1, 2, 3, 4, 5] que buscábamos si usamos la desestructuración, pero ten en cuenta que si no utilizaramos el ... previo al pair, conseguiríamos algo muy diferente: [1, 2, [3, 4], 5].


## 5. ¿Qué hace el operador de extensión en JS?
La sintaxis extendida o spread syntax permite a un elemento iterable tal como un array o cadena ser expandido en lugares donde cero o más argumentos (para llamadas de función) o elementos (para Array literales) son esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave (para literales Tipo Objeto) son esperados. 

Cuando veamos "..." en el código, son los parámetros rest o el operador spread.

Hay una manera fácil de distinguir entre ellos:

Cuando ... se encuentra al final de los parámetros de una función, son los “parámetros rest” y recogen el resto de la lista de argumentos en un array.

Cuando ... está en el llamado de una función o similar, se llama “operador spread” y expande un array en una lista.
Patrones de uso:

Los parámetros rest son usados para crear funciones que acepten cualquier número de argumentos.

El operador spread es usado para pasar un array a funciones que normalmente requieren una lista de muchos argumentos.

Ambos ayudan a ir entre una lista y un array de parámetros con facilidad.

De rest y spread hemos hablado en el punto anterior. Ahora veremos otros ejemplos:

### Parámetros Rest ...
Una función puede ser llamada con cualquier número de argumentos sin importar cómo sea definida.

Por ejemplo:

```js
function sum(a, b) {
  return a + b;
}

alert( sum(1, 2, 3, 4, 5) );
```

No habrá ningún error por “exceso” de argumentos. Pero, por supuesto, en el resultado solo los dos primeros serán tomados en cuenta, entonces el resultado del código anterior es 3.

El resto de los parámetros pueden ser referenciados en la definición de una función con 3 puntos ... seguidos por el nombre del array que los contendrá. Literalmente significan “Reunir los parámetros restantes en un array”.

Por ejemplo, para reunir todos los parámetros en un array args:

```js
function sumAll(...args) { // args es el nombre del array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6
```

Podemos elegir obtener los primeros parámetros como variables, y juntar solo el resto.

Aquí los primeros dos argumentos van a variables y el resto va al array titles:

```js
function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ); // Julio Cesar

  // el resto va en el array titles
  // por ejemplo titles = ["Cónsul", "Emperador"]
  alert( titles[0] ); // Cónsul
  alert( titles[1] ); // Emperador
  alert( titles.length ); // 2
}

showName("Julio", "Cesar", "Cónsul", "Emperador");
```

Es importante tener en cuenta que los parámetros rest deben ir al final. Estos recogen todos los argumentos sobrantes, por lo que el siguiente código no tiene sentido y causa un error:

```js
function f(arg1, ...rest, arg2) { // arg2 después de ...rest ?!
  // error
}
```
...rest debe ir siempre último.


### Sintaxis Spread
Lo usaremos por ejemplo cuando necesitamos obtener una lista de parámetros desde un array.

Existe una función nativa Math.max que devuelve el número más grande de una lista:

```js
alert( Math.max(3, 5, 1) ); // 5
```
Ahora bien, supongamos que tenemos un array [3, 5, 1]. ¿Cómo ejecutamos Math.max con él?

Pasando la variable no funcionará, porque Math.max espera una lista de argumentos numéricos, no un único array:

```js
let arr = [3, 5, 1];

alert( Math.max(arr) ); // NaN
```

Y seguramente no podremos listar manualmente los ítems en el código Math.max(arr[0], arr[1], arr[2]), porque tal vez no sepamos cuántos son. A medida que nuestro script se ejecuta, podría haber muchos elementos, o podría no haber ninguno. Y eso podría ponerse feo.

¡Operador Spread al rescate! Es similar a los parámetros rest, también usa ..., pero hace exactamente lo opuesto.

Cuando ...arr es usado en el llamado de una función, “expande” el objeto iterable arr en una lista de argumentos.

Para Math.max:

```js
let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5 (spread convierte el array en una lista de argumentos)
```

También podemos pasar múltiples iterables de esta manera:

```js
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(...arr1, ...arr2) ); // 8
```

Incluso podemos combinar el operador spread con valores normales:

```js
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25
```

Además, el operador spread puede ser usado para combinar arrays:
```js
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert(merged); // 0,3,5,1,2,8,9,15 (0, luego arr, después 2, después arr2)
```

En los ejemplos de arriba utilizamos un array para demostrar el operador spread, pero cualquier iterable funcionará también.

Por ejemplo, aquí usamos el operador spread para convertir la cadena en un array de caracteres:

```js
let str = "Hola";

alert( [...str] ); // H,o,l,a
```

El operador spread utiliza internamente iteradores para iterar los elementos, de la misma manera que for..of hace.

Entonces, para una cadena for..of retorna caracteres y ...str se convierte en "H","o","l","a". La lista de caracteres es pasada a la inicialización del array [...str].

Para esta tarea en particular también podríamos haber usado Array.from, ya que convierte un iterable (como una cadena de caracteres) en un array:

```js
let str = "Hola";

// Array.from convierte un iterable en un array
alert( Array.from(str) ); // H,o,l,a
```

El resultado es el mismo que [...str].

Pero hay una sutil diferencia entre Array.from(obj) y [...obj]:

Array.from opera con símil-arrays e iterables.
El operador spread solo opera con iterables.
Por lo tanto, para la tarea de convertir algo en un array, Array.from tiende a ser más universal.


## 6. ¿Qué es la programación orientada a objetos?
En el mundo de la programación, la POO es un paradigma que ha ganado una gran popularidad en los últimos años debido a su capacidad para crear aplicaciones más robustas, flexibles y fáciles de mantener. Esta metodología de desarrollo se basa en la idea de que los programas se pueden organizar como una colección de objetos interconectados, cada uno con su propio conjunto de datos y funcionalidades. 

La Programación Orientada a Objetos (POO) es un paradigma de programación, es decir, un modelo o un estilo de programación que nos da unas guías sobre cómo trabajar con él. Se basa en el concepto de clases y objetos. Este tipo de programación se utiliza para estructurar un programa de software en piezas simples y reutilizables de planos de código (clases) para crear instancias individuales de objetos. 

Con el paradigma de Programación Orientado a Objetos lo que buscamos es dejar de centrarnos en la lógica pura de los programas, para empezar a pensar en objetos, lo que constituye la base de este paradigma. Esto nos ayuda muchísimo en sistemas grandes, ya que en vez de pensar en funciones, pensamos en las relaciones o interacciones de los diferentes componentes del sistema.

Un programador diseña un programa de software organizando piezas de información y comportamientos relacionados en una plantilla llamada clase. Luego, se crean objetos individuales a partir de la plantilla de clase. Todo el programa de software se ejecuta haciendo que varios objetos interactúen entre sí para crear un programa más grande.

La POO se inspira en la forma en que percibimos y entendemos el mundo que nos rodea. Imagina que estás construyendo un sistema de gestión de una biblioteca. En lugar de pensar en términos de algoritmos y estructuras de datos, la POO te invita a considerar las entidades que existen en el contexto de la biblioteca, como libros, bibliotecarios y usuarios.

En este enfoque, cada una de estas entidades se convierte en un objeto, con propiedades (datos) y comportamientos (funcionalidades). Por ejemplo, un objeto «Libro» puede tener atributos como el título, el autor y el año de publicación, así como métodos para obtener información sobre el libro, prestarlo o devolverlo a la biblioteca.

La clave de la POO radica en la interacción entre estos objetos. Pueden comunicarse entre sí enviándose mensajes y colaborando para lograr un objetivo común. Por ejemplo, un objeto «Usuario» podría enviar un mensaje al objeto «Libro» para solicitar su préstamo, y este último respondería actualizando su estado interno.

### Clases, objetos e instancias
¿Cómo se crean los programas orientados a objetos? Resumiendo mucho, consistiría en hacer clases y crear objetos a partir de estas clases. Las clases forman el modelo a partir del que se estructuran los datos y los comportamientos.

El primer y más importante concepto de la POO es la distinción entre clase y objeto.

Una clase es una plantilla. Define de manera genérica cómo van a ser los objetos de un determinado tipo. Por ejemplo, una clase para representar a animales puede llamarse ‘animal’ y tener una serie de atributos, como ‘nombre’ o ‘edad’ (que normalmente son propiedades), y una serie con los comportamientos que estos pueden tener, como caminar o comer, y que a su vez se implementan como métodos de la clase (funciones).

Un ejemplo sencillo de un objeto, como decíamos antes, podría ser un animal. Un animal tiene una edad, por lo que creamos un nuevo atributo de ‘edad’ y, además, puede envejecer, por lo que definimos un nuevo método. Datos y lógica. Esto es lo que se define en muchos programas como la definición de una clase, que es la definición global y genérica de muchos objetos.

![esquema](https://profile.es/wp-content/media/POO.jpg)

Con la clase se pueden crear instancias de un objeto, cada uno de ellos con sus atributos definidos de forma independiente. Con esto podríamos crear un gato llamado Paco, con 3 años de edad, y otro animal, este tipo perro y llamado Pancho, con una de edad de 4 años. Los dos están definidos por la clase animal, pero son dos instancias distintas. Por lo tanto, llamar a sus métodos puede tener resultados diferentes. Los dos comparten la lógica, pero cada uno tiene su estado de forma independiente.

### Principios de la Programación Orientada a Objetos 
**La encapsulación**

La encapsulación contiene toda la información importante de un objeto dentro del mismo y solo expone la información seleccionada al mundo exterior. 
Esta propiedad permite asegurar que la información de un objeto esté oculta para el mundo exterior, agrupando en una Clase las características o atributos que cuentan con un acceso privado, y los comportamientos o métodos que presentan un acceso público.

La encapsulación de cada objeto es responsable de su propia información y de su propio estado. La única forma en la que este se puede modificar es mediante los propios métodos del objeto. Por lo tanto, los atributos internos de un objeto deberían ser inaccesibles desde fuera, pudiéndose modificar sólo llamando a las funciones correspondientes. Con esto conseguimos mantener el estado a salvo de usos indebidos o que puedan resultar inesperados. 

Usamos de ejemplo un coche para explicar la encapsulación. El coche comparte información pública a través de las luces de freno o intermitentes para indicar los giros (interfaz pública). Por el contrario, tenemos la interfaz interna, que sería el mecanismo propulsor del coche, que está oculto bajo el capó. Cuando se conduce un automóvil es necesario indicar a otros conductores tus movimientos, pero no exponer datos privados sobre el tipo de carburante o la temperatura del motor, ya que son muchos datos, lo que confundiría al resto de conductores.

**La abstracción**

La abstracción es cuando el usuario interactúa solo con los atributos y métodos seleccionados de un objeto, utilizando herramientas simplificadas de alto nivel para acceder a un objeto complejo.

En la programación orientada a objetos, los programas suelen ser muy grandes y los objetos se comunican mucho entre sí. El concepto de abstracción facilita el mantenimiento de un código de gran tamaño, donde a lo largo del tiempo pueden surgir diferentes cambios.

Así, la abstracción se basa en usar cosas simples para representar la complejidad. Los objetos y las clases representan código subyacente, ocultando los detalles complejos al usuario. Por consiguiente, supone una extensión de la encapsulación. Siguiendo con el ejemplo del coche, no es necesario que conozcas todos los detalles de cómo funciona el motor para poder conducirlo.

**La herencia**

La herencia define relaciones jerárquicas entre clases, de forma que atributos y métodos comunes puedan ser reutilizados. Las clases principales extienden atributos y comportamientos a las clases secundarias. A través de la definición en una clase de los atributos y comportamientos básicos, se pueden crear clases secundarias, ampliando así la funcionalidad de la clase principal y agregando atributos y comportamientos adicionales.

Volviendo al ejemplo de los animales, se puede usar una sola clase de animal y agregar un atributo de tipo de animal que especifique el tipo de animal. Los diferentes tipos de animales necesitarán diferentes métodos, por ejemplo, las aves deben poder poner huevos y los peces, nadan. Incluso cuando los animales tienen un método en común, como moverse, la implementación necesitaría muchas declaraciones «si» para garantizar el comportamiento de movimiento correcto. Por ejemplo, las ranas saltan, mientras que las serpientes se deslizan. El principio de herencia nos permite solucionar este problema.

**El polimorfismo**

El polimorfismo consiste en diseñar objetos para compartir comportamientos, lo que nos permite procesar objetos de diferentes maneras. Es la capacidad de presentar la misma interfaz para diferentes formas subyacentes o tipos de datos. Al utilizar la herencia, los objetos pueden anular los comportamientos principales compartidos, con comportamientos secundarios específicos. El polimorfismo permite que el mismo método ejecute diferentes comportamientos de dos formas: anulación de método y sobrecarga de método.


## 7. ¿Qué es una promesa en JS?
Como su propio nombre indica, una promesa es algo que, en principio pensamos que se cumplirá, pero en el futuro pueden ocurrir varias cosas:

![promesa img](https://lenguajejs.com/javascript/asincronia/promesas/promises.png)

* La promesa se cumple (promesa resuelta)
* La promesa no se cumple (promesa rechazada)
* La promesa se queda en un estado incierto indefinidamente (promesa pendiente)

Con estas sencillas bases, podemos entender el funcionamiento de una promesa en Javascript. Antes de empezar, también debemos tener claro que existen dos partes importantes de las promesas: como consumirlas (utilizar promesas) y como crearlas (preparar una función para que use promesas y se puedan consumir).

Las promesas en Javascript se representan a través de un , y cada promesa estará en un estado concreto: pendiente, aceptada o rechazada. Además, cada promesa tiene los siguientes métodos:


|Métodos	     | Descripción: |
|--------------|--------------|
|**.then(`FUNCTION`resolve)**|Ejecuta la función callback resolve cuando la promesa se cumple. |
|**.catch(`FUNCTION`reject)**|Ejecuta la función callback reject cuando la promesa se rechaza.|
|**.then(`FUNCTION`resolve, `FUNCTION`reject)**|Método equivalente a las dos anteriores en el mismo .then().|
|**.finally(`FUNCTION`end)**|Ejecuta la función callback end tanto si se cumple como si se rechaza.|

Más adelante veremos, que a diferencia del apartado anterior donde se utilizaban solamente funciones callback, en este enfoque se tiende a no anidar promesas, evitando así el famoso *Callback Hell*, y haciendo el código mucho más legible.

### Consumir una promesa
La forma general de consumir una promesa es utilizando el .then() con un sólo parámetro, puesto que muchas veces lo único que nos interesa es realizar una acción cuando la promesa se cumpla:

```JS
fetch("/robots.txt").then(function(response) {
  /* Código a realizar cuando se cumpla la promesa */
});
```

Lo que vemos en el ejemplo anterior es el uso de la función fetch(), la cuál devuelve una promesa que se cumple cuando obtiene respuesta de la petición realizada. De esta forma, estaríamos preparando (de una forma legible) la forma de actuar de nuestro código a la respuesta de la petición realizada, todo ello de forma asíncrona.

Recuerda que podemos hacer uso del método .catch() para actuar cuando se rechaza una promesa:

```JS
fetch("/robots.txt")
  .then(function(response) {
    /* Código a realizar cuando se cumpla la promesa */
  })
  .catch(function(error) {
    /* Código a realizar cuando se rechaza la promesa */
  });
```

Observa como hemos indentado los métodos .then() y .catch(), ya que se suele hacer así para que sea mucho más legible para el programa. Además, se pueden encadenar varios .then() si se siguen generando promesas y se devuelven con un return:

```js
fetch("/robots.txt")
  .then(response => {
    return response.text(); // Devuelve una promesa
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => { /* Código a realizar cuando se rechaza la promesa
```

No debemos olvidar indicar el return para poder encadenar las siguientes promesas con .then(). Tras un .catch() también es posible encadenar .then() para continuar procesando promesas.

De hecho, usando arrow functions se puede mejorar aún más la legibilidad de este código, recordando que cuando sólo tenemos una sentencia en el cuerpo de la arrow function hay un return implícito:

```js
fetch("/robots.txt")
  .then(response => response.text())
  .then(data => console.log(data))
  .finally(() => console.log("Terminado."))
  .catch(error => console.error(data));
```

Observese además que hemos añadido el método .finally() para añadir una función callback que se ejecutará tanto si la promesa se cumple o se rechaza, lo que nos ahorrará tener que repetir la función en el .then() como en el .catch().

### Código no bloqueante
Algo muy importante es que el código que ejecutamos en el interior de un .then() es código asíncrono no bloqueante:

**Asíncrono**: Porque probablemente no se ejecutará de inmediato, sino que tardará en ejecutarse.

**No bloqueante**: Porque mientras espera ser ejecutado, no bloquea el resto del programa.

¿Qué significa esto? Significa que cuando llegamos a un .then(), el sistema no se bloquea, sino que deja la función «pendiente» hasta que se cumpla la promesa, pero mientras, continua procesando el resto del programa.

Observa el siguiente ejemplo:

```js
fetch("/robots.txt")
  .then(response => response.text())
  .then(data => {
    console.log("Código asíncrono");
  });

console.log("Código síncrono")
```
Aunque el console.log("Código asíncrono") figure unas líneas antes del console.log("Código síncrono"), se mostrará más tarde. Esto ocurre porque el console.log() del interior del .then() no ocurre inmediatamente, y al no ser bloqueante, se continua con el resto del programa hasta que se ejecute, que lo retomará.

### Crear promesas
En los apartados anteriores hemos aprendido que son las promesas y hemos visto como consumirlas utilizando .then(). Ahora nos queda la cuestión opuesta, aprender a crear o implementar funciones que devuelvan promesas que puedan consumirse posteriormente.

Por ejemplo creamos un nuevo objeto  que «envuelve» toda la función doTask().

Al new Promise() se le pasa por parámetro una función con dos callbacks:

El primer callback, resolve, lo utilizaremos cuando se cumpla la promesa.
El segundo callback, reject, lo utilizaremos cuando se rechace la promesa.

```js
const doTask = (iterations) => {
  return new Promise( (resolve, reject) => {
    const numbers = [];

    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      numbers.push(number);
      if (number === 6) {
        reject({
          error: true,
          message: "Se ha sacado un 6"
        });
      }
    }

    resolve({
      error: false,
      value: numbers
    });
  })
};


doTask(10)
  .then(result => console.log("Tiradas correctas: ", result.value))
  .catch(err => console.error("Ha ocurrido algo: ", err.message));
```

## 8. ¿Qué hacen async y await por nosotros?

### La palabra clave await
Vamos a ver un ejemplo:

```js
const response = await fetch("/robots.txt");
const data = await response.text();
console.log(data);

console.log("Código síncrono.");
```
Lo que hace await es detener la ejecución y no continuar. Se espera a que se resuelva la promesa, y hasta que no lo haga, no continua. A diferencia del .then(), aquí tenemos un código bloqueante.

Ahora, vamos a introducir este fragmento de código dentro de una función llamada request(). Quedaría de la siguiente forma:

```js
function request() {
  const response = await fetch("/robots.txt");
  const data = await response.text();
  return data;
}

request();
```

Sin embargo, aquí tenemos un problema. Estamos utilizando await (asíncrono) dentro de request() (síncrono), por lo que antes de ejecutarla, al intentarla definir, nos aparecerá el siguiente error:

Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules

### La palabra clave async
Para resolver el problema anterior y poder utilizar el await dentro de nuestra función, sólo tenemos que definir nuestra función como función asíncrona y al llamarla utilizar nuevamente el await:

```js
async function request() {
  const response = await fetch("/robots.txt");
  const data = await response.text();
  return data;
}

await request();
```

Sin embargo, vamos a pararnos un poco a pensar esto desde las bases. Definamos dos funciones básicas exactamente iguales, ambas devuelven lo mismo, pero una es síncrona y otra asíncrona:

```js
function sincrona() { return 42; }
async function asincrona() { return 42; }

sincrona();   // 42
asincrona();  // Promise <fulfilled>: 42
```

En el caso de la función sincrona() devuelve directamente el valor, sin embargo, en el caso de la función asincrona() devuelve una promesa que se ha cumplido inmediatamente, con el valor 42.

Si queremos reescribirlas como arrow function, se definiría como vemos a continuación, colocando el async justo antes de los parámetros de la arrow function:

```js
const sincrona = () => 42;
const asincrona = async () => 42;
```

### Async/await + .then()
En algunos casos, como al usar un fetch(), donde tenemos que manejar dos promesas, es posible que nos interese utilizar .then() para la primera promesa y await para la segunda. De esta forma podemos manejarlo todo directamente, sin tener que guardarlo en constantes o variables temporales que no utilizaremos sino una sola vez:

```js
async function request() {
  return await fetch("/robots.txt")
      .then(response => response.text());
}

await request();
```

En este caso, observa que el fetch() devuelve una primera promesa que es manejada por el .then(). La segunda promesa, devuelta por el método response.text() se devuelve hacia fuera y es manejada por el await, que espera a que se cumpla, y una vez cumplida, se devuelve como valor de la función request().