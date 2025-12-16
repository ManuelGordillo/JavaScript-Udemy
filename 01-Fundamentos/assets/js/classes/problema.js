const fher = {
  nombre: "Manuel",
  edad: 30,
  imprimir() {
    console.log(`Nombre:${this.nombre} - edad: ${this.edad}`); //this referencia al mismo objeto donde se encuentra la propiedad, atributo
  },
};

const pedro = {
  nombre: "Pedro",
  edad: 15,
  imprimir() {
    console.log(`Nombre:${this.nombre} - edad: ${this.edad}`); //this referencia al mismo objeto donde se encuentra la propiedad, atributo
  },
};

// fher.imprimir();
// pedro.imprimir();

//Funcion con mayuscula para crear instancias
function Persona(nombre, edad) {
  console.log("Se ejecuto esta linea");
  this.nombre = nombre; //asignando los parametros al mismo objeto
  this.edad = edad;

  this.imprimir = function () {
    console.log(`Nombre:${this.nombre} - edad: ${this.edad}`); //this referencia al mismo objeto donde se encuentra la propiedad, atributo
  };
}

const maria = new Persona("Maria", 18); //new genera una nueva instancia
const melissa = new Persona("Melissa", 35); //new genera una nueva instancia
// console.log(maria);
maria.imprimir();
melissa.imprimir();
