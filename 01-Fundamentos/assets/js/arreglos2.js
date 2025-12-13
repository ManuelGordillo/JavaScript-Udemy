let juegos = ["Zelda", "Mario", "Metroid", "God of war"];
console.log("Largo:", juegos.length);

let primero = juegos[0];
console.log(primero);

let ultimo = juegos[juegos.length - 1];
console.log(ultimo);

console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arreglo) => {
  console.log(elemento, indice, arreglo);
}); //instruccion por cada una de los elementos del arreglo juegos

let nuevaLongitud = juegos.push("F-Zero"); //metodo para insertar un nuevo elemento al final
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift("Fire Emblem"); //añade el elemento al inicio del arreglo
console.log({ nuevaLongitud, juegos });

juegoBorrado = juegos.pop(); //elimina el ultimo elemento del arreglo
console.log({ juegoBorrado, juegos });

let pos = 1;
let juegosBorrados = juegos.splice(pos, 2); //recibe un punto inicial y elimina cuntos elementos quieres borrar o insertar en ese lugar

console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf("Metroid");
console.log({ metroidIndex });
