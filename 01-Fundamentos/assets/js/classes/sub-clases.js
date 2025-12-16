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

class Heroe extends Persona {
  clan = "sin clan";

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase); //extiende de la clase Persona
    this.clan = "Los Avengers";
  }
}

const spiderman = new Heroe(
  "Peter Parker",
  "Spider",
  "Soy tu amigable amigo Spiderman"
);
// const spiderman = new Heroe();

console.log(spiderman);
spiderman.quienSoy();
