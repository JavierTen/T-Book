"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var Token = /** @class */ (function () {
    function Token() {
    }
    Token.getJwtToken = function (payload) {
        return jsonwebtoken_1.default.sign({
            usuario: payload
        }, this.seed, { expiresIn: this.caducidad });
    };
    Token.comprobarToken = function (userToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            jsonwebtoken_1.default.verify(userToken, _this.seed, function (err, decoded) {
                if (err) {
                    //token invalido
                    reject();
                }
                else {
                    // token valido
                    resolve(decoded);
                }
            });
        });
    };
    Token.seed = 'este-es-el-seed-de-la-aplicacion-tbook-2020-by-tenza-morales';
    Token.caducidad = '30d';
    return Token;
}());
exports.default = Token;
