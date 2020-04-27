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

export default prestamoRoutes;
