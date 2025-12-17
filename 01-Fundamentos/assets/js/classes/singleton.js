//singleton instancia unica de mi clase
class Singleton {
  static instancia; // undefined
  nombre = "";

  constructor(nombre = "") {
    // console.log(Singleton.instancia);

    // const a = undefined;
    // console.log(a);
    // console.log(!a);
    // console.log(!!a);

    if (!!Singleton.instancia) {
      return Singleton.instancia;
    }

    Singleton.instancia = this;
    this.nombre = nombre;

    // return this;
  }
}

const instancia1 = new Singleton("Ironman");
const instancia2 = new Singleton("Spiderman");
const instancia3 = new Singleton("Black Panther");

console.log(`Nombre en la instancia uno: ${instancia1.nombre}`);
console.log(`Nombre en la instancia dos: ${instancia2.nombre}`);
console.log(`Nombre en la instancia tres: ${instancia3.nombre}`);
