import { Schema, Document, model } from "mongoose";

const prestamoSchema = new Schema({
  idLibro: {
    type: String,
    required: [true, "Debe existir un id de Libro"],
  },
  tituloLibro: {
    type: String,
  },
  imagenLibro: {
    type: String,
  },
  FechaPrestamo: {
    type: Date,
  },
  FechaEntrega: {
    type: Date,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: [true, "Debe existir una referencia a un usuario"],
  },
});

prestamoSchema.pre<IPrestamo>("save", function (next) {
  var fecha = new Date();
  var diasPrestamo = 4;
  this.FechaPrestamo = new Date();
  fecha.setDate(fecha.getDate() + diasPrestamo);
  var diaSemana = fecha.getDay();
  if (diaSemana === 0) {
    fecha.setDate(fecha.getDate() + diasPrestamo - 2);
    this.FechaEntrega = fecha;
  } else {
    this.FechaEntrega = fecha;
  }

  next();
});

interface IPrestamo extends Document {
  idLibro: String;
  tituloLibro: String;
  imagenLibro: String;
  FechaPrestamo: Date;
  FechaEntrega: Date;
  usuario: String;
}

export const Prestamo = model<IPrestamo>("Prestamo", prestamoSchema);
