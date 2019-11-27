const mongoose = require("mongoose")
const Park = require('../models/Park.model')

const dbName = 'parkapp'
mongoose.connect(`mongodb://localhost/${dbName}`)
Park.collection.drop()

const parks = [
  {
    CDID: 51,
    DS_NOMBRE: "Zona de Canto Cochino (La Pedriza)",
    DS_TIPO: "Área recreativa de la Comunidad de Madrid",
    CD_TIPO: "C",
    DS_ACCESO: "M-608, entrada a la Pedriza / Bueno",
    DS_MUNICIPIO: "Manzanares El Real",
    IMAGEN: "./images/parkImages/Rio-cantocochino-la-pedriza-madrid.jpg",
    "IT_MESA": "S",
    "IT_BANCO": "S",
    "IT_PAPELERA": "S",
    "IT_CONTENEDOR": "S",
    "IT_FUENTE": "N",
    "IT_SENAL": "S",
    "IT_JUEGOS": "N",
    "IT_SENDA": "S",
    "IT_KIOSCO": "S",
    "IT_ASEOS": "N",
    "IT_ESTACIONAMIENTO": "S",
    "IT_P_BICIS": "N",
    "IT_BIOSALUDAB": "N",
    "IT_BANO": "N",
    "IT_PANELES": "N",
    "IT_BARBACOA": "N",
    location: {
      type: "Point",
      coordinates: [40.45001, -3.53481]
    }
  },
  {
    CDID: 52,
    DS_NOMBRE: "Parque de los Sentidos",
    DS_TIPO: "Área recreativa de la Comunidad de Madrid",
    CD_TIPO: "C",
    DS_ACCESO: "Si se llega a Manzanares desde Colmenar Viejo, se encuentra poco antes del Castillo, casi enfrente del Cuartel de la Guardia Civil",
    DS_MUNICIPIO: "Manzanares El Real",
    IT_MESA: "N",
    IT_BANCO: "S",
    IT_PAPELERA: "S",
    IT_CONTENEDOR: "N",
    IT_FUENTE: "N",
    IT_SENAL: "S",
    IT_JUEGOS: "S",
    IT_SENDA: "N",
    IT_KIOSCO: "N",
    IT_ASEOS: "N",
    IT_ESTACIONAMIENTO: "S",
    IT_P_BICIS: "N",
    IT_BIOSALUDAB: "N",
    IT_BANO: "N",
    IT_PANELES: "N",
    IT_BARBACOA: "N",
    location: {
      type: "Point",
      coordinates: [40.356271, -3.677866]
    }
  },
  {
    CDID: 53,
    DS_NOMBRE: "Cordel de los Toros",
    DS_TIPO: "Área recreativa de la Comunidad de Madrid",
    CD_TIPO: "C",
    DS_ACCESO: "Tomando la Avenida de la Pedriza en dirección al Tranco, se encuentra un aparcamiento a mano derecha que da servicio a esta Área",
    DS_MUNICIPIO: "Manzanares El Real",
    IMAGEN: "https://www.fotonazos.es/wp-content/uploads/2017/04/Ruta-por-el-corredor-ambiental-del-r%C3%ADo-Manzanares-hasta-el-embalse-de-El-Pardo.jpg",
    IT_MESA: "N",
    IT_BANCO: "S",
    IT_PAPELERA: "S",
    IT_CONTENEDOR: "N",
    IT_FUENTE: "S",
    IT_SENAL: "S",
    IT_JUEGOS: "S",
    IT_SENDA: "N",
    IT_KIOSCO: "N",
    IT_ASEOS: "N",
    IT_ESTACIONAMIENTO: "S",
    IT_P_BICIS: "N",
    IT_BIOSALUDAB: "N",
    IT_BANO: "N",
    IT_PANELES: "N",
    IT_BARBACOA: "N",
    location: {
      type: "Point",
      coordinates: [40.738249, -3.876852]
    }
  }
]

Park.create(parks, (err) => {
  if (err) { throw err }
  console.log(`Creado ${parks.length} park`)
  mongoose.connection.close()
})
