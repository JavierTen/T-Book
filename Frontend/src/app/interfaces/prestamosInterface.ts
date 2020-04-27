export interface RespuestaPrestamos{
  ok: boolean;
  prestamo: Prestamo[];
}

export interface Prestamo {
  _id: string;
  idLibro: string;
  tituloLibro: string;
  imagenLibro: string;
  usuario: string;
  FechaPrestamo: string;
  FechaEntrega: string;
  __v: number;
}