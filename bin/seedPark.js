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
    IMAGEN: "https://www.pueblosde.es/wp-content/uploads/2019/03/Rio-cantocochino-la-pedriza-madrid.jpg",
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
    IMAGEN: "data:image/jpeg;base64,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", IT_MESA: "N",
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
