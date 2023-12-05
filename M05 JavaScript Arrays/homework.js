/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   var primerElemento = array.shift();
   return primerElemento;
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
}

function devolverUltimoElemento(array) {
   var ultimoElemento = array.pop();
   return ultimoElemento;
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
}

function obtenerLargoDelArray(array) {
   return array.length;
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
}

function incrementarPorUno(array) {
   for (let i=0; i < array.length; i++) {
      array[i] += 1;
   }
   return array;
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
   array.push(elemento);
   return array;
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
   array.unshift(elemento);
   return array;
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function dePalabrasAFrase(palabras) {
   // var frase = palabras.join(' ');
   // return frase;
   // -------------
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
}

function arrayContiene(array, elemento) {
   // if (array.includes(elemento)) {
   //    return true;
   // } else {
   //    return false;
   // }
   // -------------
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
}

function agregarNumeros(arrayOfNums) {
   // var suma = 0
   // for (let i = 0; i < arrayOfNums.length; i++) {
   //    suma += arrayOfNums[i];
   // }
   // return suma;
   // -------------
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
}

function promedioResultadosTest(resultadosTest) {
   // var suma = 0
   // for (let i = 0; i < resultadosTest.length; i++) {
   //    suma += resultadosTest[i];
   // }
   // var promedio = suma / resultadosTest.length;
   // return promedio;
   // -------------
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
}

function numeroMasGrande(arrayOfNums) {
   // var numeroGrande = Number.NEGATIVE_INFINITY;
   // for (let i = 0; i < arrayOfNums.length; i++) {
   //    if (arrayOfNums[i] > numeroGrande) {
   //       numeroGrande = arrayOfNums[i];
   //    }
   // }
   // return numeroGrande;
   // -------------
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
}

function multiplicarArgumentos() {
   // if (arguments.length === 0) {
   //    return 0;
   // }

   // var producto = 1;
   // for (let i = 0; i < arguments.length; i++) {
   //    producto *= arguments[i];
   // }
   // return producto;
   // -------------
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
}

function cuentoElementos(array) {
   // -------------
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
}

function diaDeLaSemana(numeroDeDia) {
   // -------------
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
}

function empiezaConNueve(num) {
   // -------------
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numeroAString = num.toString();
   var stringSeparado = numeroAString.split('');
   if (stringSeparado[0] == 9) {
      return true;
   } else {
      return false;
   }
}

function todosIguales(array) {
   // -------------
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      if (array[i] === array[i+1]) {
         return true;
      } else {
         return false;
      }
   }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   // var mesesBuscados = ['Enero', 'Marzo', 'Noviembre'];

   // for (let i = 0; i < mesesBuscados.length; i++) {
   //    if (!array.includes(mesesBuscados[i])) {
   //       return 'No se encontraron los meses pedidos';
   //    }
   // }

   // var tresMeses = [];
   // for (let i = 0; array.length; i++) {
   //    if (mesesBuscados.includes(array[i])) {
   //       tresMeses.push(array[i]);
   //    }
   // }
   // return tresMeses
   var mesesBuscados = ['Enero', 'Marzo', 'Noviembre'];
   var mesesEncontrados = [];
   for (let i = 0; i < array.length; i++) {
      if (mesesBuscados.includes(array[i])) {
         mesesEncontrados.push(array[i]);
      }
   }
   if (mesesEncontrados.length === 3) {
      return mesesEncontrados;
   } else {
      return 'No se encontraron los meses pedidos';
   }
}

function tablaDelSeis() {
   // -------------
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var arrayDeProductos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   var arrayDeTablesDelSeis = [];
   for (let i = 0; i < arrayDeProductos.length; i++) {
      arrayDeProductos[i] *= 6;
      arrayDeTablesDelSeis.push(arrayDeProductos[i]);
   }
   return arrayDeTablesDelSeis
}


function mayorACien(array) {
//    // -------------
//    // La función recibe un arreglo con enteros entre 0 y 200.
//    // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
//    // Tu código:
   var mayorACien = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 100) {
         mayorACien.push(array[i]);
      }
   }
   return mayorACien
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var resultado = [];

   for (let i = 0; i < 10; i++) {
      num += 2;
      resultado.push(num);

      if (num === i) {
         return 'Se interrumpió la ejecución';
      }
   }
   return resultado;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var resultado = [];

   for (let i = 0; i < 10; i++) {
      if (i === 5) {
         continue;
      }
      num += 2;
      resultado.push(num);
   }
   return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

