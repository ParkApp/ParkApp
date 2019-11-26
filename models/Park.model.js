const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parkSchema = new Schema({
  CDID: Number,
  DS_NOMBRE: String,
  DS_TIPO: String,
  CD_TIPO: String,
  DS_ACCESO: String,
  DS_MUNICIPIO: String,
  IMAGEN: String,
  IT_MESA: {
    type: String,
    enum: ["S", "N"]
  }
  ,

  IT_BANCO: {
    type: String,
    enum: ["S", "N"]
  }
  ,
  IT_PAPELERA: {
    type: String,
    enum: ["S", "N"]
  }
  ,
  IT_CONTENEDOR: {
    type: String,
    enum: ["S", "N"]
  }
  ,
  IT_FUENTE: {
    type: String,
    enum: ["S", "N"]
  }
  ,
  IT_SENAL: {
    type: String,
    enum: ["S", "N"]
  }
  ,
  IT_JUEGOS: {
    type: String,
    enum: ["S", "N"]
  }
  ,
  IT_SENDA: {
    type: String,
    enum: ["S", "N"]
  }
  ,
  IT_KIOSCO: {
    type: String,
    enum: ["S", "N"]
  }
  ,
  IT_ASEOS: {
    type: String,
    enum: ["S", "N"]
  }
  ,
  IT_ESTACIONAMIENTO: {
    type: String,
    enum: ["S", "N"]
  }
  ,
  IT_P_BICIS: {
    type: String,
    enum: ["S", "N"]
  }
  ,
  IT_BIOSALUDAB: {
    type: String,
    enum: ["S", "N"]
  }
  ,
  IT_BANO: {
    type: String,
    enum: ["S", "N"]
  }
  ,
  IT_PANELES: {
    type: String,
    enum: ["S", "N"]
  }
  ,
  IT_BARBACOA: {
    type: String,
    enum: ["S", "N"]
  },

  location: { type: { type: String }, coordinates: [Number] }
}, {
  timestamps: true
})

const Park = mongoose.model("Park", parkSchema)

module.exports = Park