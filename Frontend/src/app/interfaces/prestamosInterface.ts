export interface RespuestaPrestamos {
  ok: boolean;
  prestamo: Prestamo[];
}

export  interface Prestamo {
  _id: string;
  idLibro: string;
  usuario: string;
  created: string;
  FechaPrestamo: string;
  FechaEntrega: string;
}