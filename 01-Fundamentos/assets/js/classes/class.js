class Persona {
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + " instancias";
  }

  static mensaje() {
    console.log(this.nombre); //undefined
    console.log("Hola a todos soy un metodo estatico");
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin nombre",
    codigo = "Sin código",
    frase = "Sin Frase"
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    Persona._conteo++;
  }

  //set ASIGNAR ESTABLECER
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
    // return comida.Uppercase();
  }

  //get RECUPERAR UN VALOR siempre retornar algo
  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida} `;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const spiderman = new Persona(
  "Peter Parker",
  "Spider",
  "Soy tu amigable amigo Spiderman"
);
const iroman = new Persona("Tony Stark", "Iroman", "Yo soy Iroman");
// console.log(iroman);

// spiderman.quienSoy();
spiderman.miFrase();

spiderman.setComidaFavorita = "El pie de cereza de la tia May";

// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);
// spiderman._conteo = 2;
console.log("Conteo stático", Persona._conteo);
console.log(Persona.conteo);

Persona.mensaje();

Persona.propiedadExterna = " hola propiedad externa";
console.log(Persona.propiedadExterna);
console.log(Persona);
