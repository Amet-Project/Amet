// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Rol = {
  "ADMIN": "ADMIN",
  "PROVEEDOR": "PROVEEDOR",
  "CLIENTE": "CLIENTE"
};

const { Evento, EventoCasinoSE, CasinoServicioExtra, Casino, CasinoHorarioFijo, CasinoPrecioFlex, CasinoHorarioFlex, CasinoArea, Area, CasinoServicio, Servicio, Imagen, Usuario, ServicioExtra } = initSchema(schema);

export {
  Evento,
  EventoCasinoSE,
  CasinoServicioExtra,
  Casino,
  CasinoHorarioFijo,
  CasinoPrecioFlex,
  CasinoHorarioFlex,
  CasinoArea,
  Area,
  CasinoServicio,
  Servicio,
  Imagen,
  Usuario,
  ServicioExtra,
  Rol
};