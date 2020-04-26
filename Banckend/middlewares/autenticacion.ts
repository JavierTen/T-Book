import { Response, Request, NextFunction } from 'express'
import Token from '../clases/token';


export const verificaToken = (req: Response, res: Request, next: NextFunction) => {

    const userToken = req.get('x-token') || '';

    Token.comprobarToken(userToken)
        .then((decoded: any) => {
            console.log('Decoded', decoded);
            req.usuario = decoded.usuario;
            next();
        })
        .catch(err => {
            res.json({
                ok: false,
                mensaje: 'Token no es correcto'
            })
        })

}