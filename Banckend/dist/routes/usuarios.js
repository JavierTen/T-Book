"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuario_model_1 = require("../models/usuario.model");
var bcrypt_1 = __importDefault(require("bcrypt"));
var token_1 = __importDefault(require("../clases/token"));
var autenticacion_1 = require("../middlewares/autenticacion");
var userRoutes = express_1.Router();
//Login
userRoutes.post('/login', function (req, res) {
    var body = req.body;
    usuario_model_1.Usuario.findOne({ idEstudiante: body.idEstudiante }, function (err, userDB) {
        if (err)
            throw err;
        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: 'Usuario/contraseña no son correctos'
            });
        }
        if (userDB.compararPass(body.password)) {
            var tokenUsuario = token_1.default.getJwtToken({
                _id: userDB._id,
                nombre: userDB.nombre,
                apellido: userDB.apellido,
                facultad: userDB.facultad,
                avatar: userDB.avatar
            });
            res.json({
                ok: true,
                token: tokenUsuario
            });
        }
        else {
            return res.json({
                ok: false,
                mensaje: 'Usuario/contraseña no son correctos ***'
            });
        }
    });
});
//crear usuario
userRoutes.post('/create', function (req, res) {
    var user = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        avatar: req.body.avatar,
        idEstudiante: req.body.idEstudiante,
        facultad: req.body.facultad,
        email: req.body.email,
        password: bcrypt_1.default.hashSync(req.body.password, 10)
    };
    usuario_model_1.Usuario.create(user).then(function (userDB) {
        var tokenUsuario = token_1.default.getJwtToken({
            _id: userDB._id,
            nombre: userDB.nombre,
            apellido: userDB.apellido,
            facultad: userDB.facultad,
            avatar: userDB.avatar
        });
        res.json({
            ok: true,
            token: tokenUsuario
        });
    }).catch(function (err) {
        res.json({
            ok: false,
            err: err
        });
    });
});
userRoutes.post('/update', autenticacion_1.verificaToken, function (req, res) {
    var user = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        avatar: req.body.avatar,
        idEstudiante: req.body.idEstudiante,
        facultad: req.body.facultad,
        email: req.body.email,
        password: bcrypt_1.default.hashSync(req.body.password, 10)
    };
    usuario_model_1.Usuario.findByIdAndUpdate(req.usuario._id, user, { new: true }, function (err, userDB) {
        if (err)
            throw err;
        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: 'No existe un usuario con ese ID'
            });
        }
        var tokenUsuario = token_1.default.getJwtToken({
            _id: userDB._id,
            nombre: userDB.nombre,
            apellido: userDB.apellido,
            facultad: userDB.facultad,
            avatar: userDB.avatar
        });
        res.json({
            ok: true,
            token: tokenUsuario
        });
    });
});
exports.default = userRoutes;
