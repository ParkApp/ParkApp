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
    IMAGEN: "AQUI VA LA DIRECCION EN EL SERVIDOR",
    IT_MESA: "S",
    IT_BANCO: "S",
    IT_PAPELERA: "S",
    IT_CONTENEDOR: "S",
    IT_FUENTE: "N",
    IT_SENAL: "S",
    IT_JUEGOS: "N",
    IT_SENDA: "S",
    IT_KIOSCO: "S",
    IT_ASEOS: "N",
    IT_ESTACIONAMIENTO: "S",
    IT_P_BICIS: "N",
    IT_BIOSALUDAB: "N",
    IT_BANO: "N",
    IT_PANELES: "N",
    IT_BARBACOA: "N",
    geometry: {
      type: "Point",
      coordinates: [1, 2]
    }
  }
]

Park.create(parks, (err) => {
  if (err) { throw err }
  console.log(`Creado ${parks.length} park`)
  mongoose.connection.close()
})
