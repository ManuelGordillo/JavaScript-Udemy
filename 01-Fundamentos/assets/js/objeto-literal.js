let personaje = {
  nombre: "Tony stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.04,
    lng: -118.7,
  },
  trajes: ["Mark 1", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90365",
    ubicacion: "Malibu, California",
  },
  ultimaPelicula: "Infinity War",
};

console.log("Nombre:", personaje.nombre);
console.log(personaje);
console.log("Nombre:", personaje["nombre"]);
console.log("Edad:", personaje["edad"]);
console.log("Coors:", personaje.coords);
console.log("Latitud:", personaje.coords.lat);
console.log("No. Trajes:", personaje.trajes.length);
console.log("Ultimo Traje:", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";
console.log("Vivo:", personaje[x]);
