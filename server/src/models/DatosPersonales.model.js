import { Schema, model } from "mongoose";

const PersonsSchema = new Schema({
  TipoPerso: {
    type: String,
  },
  Nombre: {
    type: String,
  },
  Genero: {
    type: String,
  },
  FecNac: {
    type: Date,
  },
  Edad: {
    type: Date,
  },
  RFC: {
    type: String,
  },
  CURP: {
    type: String,
  },
  Telefono: {
    type: String,
  },
  Correo: {
    type: String,
  },
  CvDirecc: {
    type: String,
  },
});

export default model("persons", PersonsSchema);
