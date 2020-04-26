"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bcrypt_1 = __importDefault(require("bcrypt"));
var usuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es necesario"]
    },
    apellido: {
        type: String,
        required: [true, "El apellido es necesario"]
    },
    avatar: {
        type: String,
        default: 'av-1.png'
    },
    idEstudiante: {
        type: String,
        unique: true,
        required: [true, 'El id es necesario']
    },
    facultad: {
        type: String,
        required: [true, 'La facultad es necesaria']
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'la contraseña en necesaria'],
    }
});
usuarioSchema.method('compararPass', function (password) {
    if (password === void 0) { password = ''; }
    if (bcrypt_1.default.compareSync(password, this.password)) {
        return true;
    }
    else {
        return false;
    }
});
exports.Usuario = mongoose_1.model('Usuario', usuarioSchema);
