"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var prestamoSchema = new mongoose_1.Schema({
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
    FechaEntregado: {
        type: Date,
    },
    usuario: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Usuario",
        required: [true, "Debe existir una referencia a un usuario"],
    },
    entregado: {
        type: Boolean,
    }
});
prestamoSchema.pre("save", function (next) {
    var fecha = new Date();
    var diasPrestamo = 4;
    this.FechaPrestamo = new Date();
    fecha.setDate(fecha.getDate() + diasPrestamo);
    var diaSemana = fecha.getDay();
    if (diaSemana === 0) {
        fecha.setDate(fecha.getDate() + diasPrestamo - 2);
        this.FechaEntrega = fecha;
    }
    else {
        this.FechaEntrega = fecha;
    }
    next();
});
exports.Prestamo = mongoose_1.model("Prestamo", prestamoSchema);
