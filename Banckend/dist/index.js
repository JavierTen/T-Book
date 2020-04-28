"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./clases/server"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var prestamo_1 = __importDefault(require("./routes/prestamo"));
var usuarios_1 = __importDefault(require("./routes/usuarios"));
var server = new server_1.default;
//Body parser 
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//configuracion cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
//rutas de la app
server.app.use('/user', usuarios_1.default);
server.app.use('/prestamo', prestamo_1.default);
//conectar db
mongoose_1.default.connect('mongodb+srv://root:toor@pruebatbook-msnju.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true }, function (err) {
    if (err)
        throw err;
    console.log("Base de datos online");
});
// levantar express
server.start(function () {
    console.log('Server corriendo en el puerto ', server.port);
});
