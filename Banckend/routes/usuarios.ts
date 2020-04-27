import { Router, Request, Response } from 'express';
import { Usuario } from '../models/usuario.model';
import bcrypt from 'bcrypt';
import Token from '../clases/token';
import { verificaToken } from '../middlewares/autenticacion';


const userRoutes = Router();

//Login
userRoutes.post('/login', (req: Request, res: Response) => {
    const body = req.body;

    Usuario.findOne({ idEstudiante: body.idEstudiante }, (err, userDB) => {
        if (err) throw err;

        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: 'Usuario/contraseña no son correctos'
            });
        }

        if (userDB.compararPass(body.password)) {

            const tokenUsuario = Token.getJwtToken({
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
        } else {
            return res.json({
                ok: false,
                mensaje: 'Usuario/contraseña no son correctos ***'
            });
        }


    })


});

//crear usuario
userRoutes.post('/create', (req: Request, res: Response) => {


    const user = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        avatar: req.body.avatar,
        idEstudiante: req.body.idEstudiante,
        facultad: req.body.facultad,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }

    Usuario.create(user).then(userDB => {
        const tokenUsuario = Token.getJwtToken({
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
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });


});

//actualizar usuario
userRoutes.post('/update', verificaToken, (req: any, res: Response) => {

    const user = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        avatar: req.body.avatar,
        idEstudiante: req.body.idEstudiante,
        facultad: req.body.facultad,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)

    }

    Usuario.findByIdAndUpdate(req.usuario._id, user, { new: true }, (err, userDB) => {
        if (err) throw err;

        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: 'No existe un usuario con ese ID'
            })
        }

        const tokenUsuario = Token.getJwtToken({
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


    })


});

userRoutes.get('/', [ verificaToken ], ( req: any, res: Response ) => {

    const usuario = req.usuario;

    res.json({
        ok: true,
        usuario
    });

});

export default userRoutes; 