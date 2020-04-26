import jwt from 'jsonwebtoken'

export default class Token {


    private static seed: string = 'este-es-el-seed-de-la-aplicacion-tbook-2020-by-tenza-morales';
    private static caducidad: string = '30d';

    constructor() { }

    static getJwtToken(payload: any): string {
        return jwt.sign({
            usuario: payload
        }, this.seed, { expiresIn: this.caducidad });
    }

    static comprobarToken(userToken: string) {

        return new Promise((resolve, reject) => {
            jwt.verify(userToken, this.seed, (err, decoded) => {
                if (err) {
                    //token invalido
                    reject();
                } else {
                    // token valido
                    resolve(decoded);
                }
            })
        })
    }

}