import { Router, Response } from "express";
import { verificaToken } from "../middlewares/autenticacion";
import { Prestamo } from "../models/prestamo.model";
import bodyParser from "body-parser";

const prestamoRoutes = Router();

//mostrar libros
prestamoRoutes.get("/", [verificaToken], async (req: any, res: Response) => {
  const prestamo = await Prestamo.find()
    .where("usuario")
    .equals(req.usuario._id)
    .sort({ _id: -1 })
    .exec();

  res.json({
    ok: true,
    prestamo,
  });
});
// existePrestamo
prestamoRoutes.get("/prestado",[verificaToken], async (req: any, res: Response) => {
  const body = req.body;
    Prestamo.findOne({ usuario: req.usuario._id }, (err, userDB) => {
      if (err) throw err;   
      if (!userDB) {
          return res.json({
              ok: false,
              mensaje: 'Usuario no es correctos'
          });
      }
      if(userDB.idLibro === body.idLibro){
        res.json({
          ok: true,
          mensaje: 'Libro prestado'
      });
      }else {
        return res.json({
            ok: false,
            mensaje: 'Libro no prestado'
        });
    }
    })
  }
);

// tomar libro
prestamoRoutes.post("/", [verificaToken], (req: any, res: Response) => {
  const body = req.body;
  body.usuario = req.usuario._id;

  Prestamo.create(body)
    .then((prestamoDB) => {
      res.json({
        ok: true,
        prestamo: prestamoDB,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

//update
prestamoRoutes.post('/update', (req: any, res: Response)=>{

  const prestamo = {
    FechaEntregado: req.body.FechaEntregado,
    entregado: req.body.entregado

  }

  Prestamo.findOne({ prestamo: req.prestamo.idLibro },(err, prestamoDB)=>{
    if(err) throw err;
    if(!prestamoDB){
      return res.json({
        ok: true,
        mensaje: 'No existe libro'
      })
    }
  })

  res.json({
    ok:true,
    prestamo: req.prestamo
  });
})

export default prestamoRoutes;
