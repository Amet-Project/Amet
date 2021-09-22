import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Rol {
  ADMIN = "ADMIN",
  PROVEEDOR = "PROVEEDOR",
  CLIENTE = "CLIENTE"
}



type EventoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventoCasinoSEMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CasinoServicioExtraMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CasinoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CasinoHorarioFijoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CasinoPrecioFlexMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CasinoHorarioFlexMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CasinoAreaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AreaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CasinoServicioMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ServicioMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ImagenMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsuarioMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ServicioExtraMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Evento {
  readonly id: string;
  readonly fecha: string;
  readonly importe: number;
  readonly casino_servicios_extras?: (EventoCasinoSE | null)[];
  readonly usuario: Usuario;
  readonly cas_hor_fijo?: CasinoHorarioFijo;
  readonly cas_hor_flex?: CasinoHorarioFlex;
  readonly casino: Casino;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Evento, EventoMetaData>);
  static copyOf(source: Evento, mutator: (draft: MutableModel<Evento, EventoMetaData>) => MutableModel<Evento, EventoMetaData> | void): Evento;
}

export declare class EventoCasinoSE {
  readonly id: string;
  readonly evento: Evento;
  readonly casino_se: CasinoServicioExtra;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<EventoCasinoSE, EventoCasinoSEMetaData>);
  static copyOf(source: EventoCasinoSE, mutator: (draft: MutableModel<EventoCasinoSE, EventoCasinoSEMetaData>) => MutableModel<EventoCasinoSE, EventoCasinoSEMetaData> | void): EventoCasinoSE;
}

export declare class CasinoServicioExtra {
  readonly id: string;
  readonly descripcion?: string;
  readonly costo: number;
  readonly eventos?: (EventoCasinoSE | null)[];
  readonly casino: Casino;
  readonly servicio_extra: ServicioExtra;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CasinoServicioExtra, CasinoServicioExtraMetaData>);
  static copyOf(source: CasinoServicioExtra, mutator: (draft: MutableModel<CasinoServicioExtra, CasinoServicioExtraMetaData>) => MutableModel<CasinoServicioExtra, CasinoServicioExtraMetaData> | void): CasinoServicioExtra;
}

export declare class Casino {
  readonly id: string;
  readonly direccion: string;
  readonly titulo: string;
  readonly descripcion?: string;
  readonly rfc?: string;
  readonly horarios_fijos?: (CasinoHorarioFijo | null)[];
  readonly precios_flexibles?: (CasinoPrecioFlex | null)[];
  readonly areas?: (CasinoArea | null)[];
  readonly servicios?: (CasinoServicio | null)[];
  readonly servicios_extras?: (CasinoServicioExtra | null)[];
  readonly eventos?: (Evento | null)[];
  readonly imagenes?: (Imagen | null)[];
  readonly usuario: Usuario;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Casino, CasinoMetaData>);
  static copyOf(source: Casino, mutator: (draft: MutableModel<Casino, CasinoMetaData>) => MutableModel<Casino, CasinoMetaData> | void): Casino;
}

export declare class CasinoHorarioFijo {
  readonly id: string;
  readonly hora_inicio: string;
  readonly hora_fin: string;
  readonly lunes: boolean;
  readonly martes: boolean;
  readonly miercoles: boolean;
  readonly jueves: boolean;
  readonly viernes: boolean;
  readonly sabado: boolean;
  readonly domingo: boolean;
  readonly precio: number;
  readonly eventos?: (Evento | null)[];
  readonly casino: Casino;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CasinoHorarioFijo, CasinoHorarioFijoMetaData>);
  static copyOf(source: CasinoHorarioFijo, mutator: (draft: MutableModel<CasinoHorarioFijo, CasinoHorarioFijoMetaData>) => MutableModel<CasinoHorarioFijo, CasinoHorarioFijoMetaData> | void): CasinoHorarioFijo;
}

export declare class CasinoPrecioFlex {
  readonly id: string;
  readonly lunes: boolean;
  readonly martes: boolean;
  readonly miercoles: boolean;
  readonly jueves: boolean;
  readonly viernes: boolean;
  readonly sabado: boolean;
  readonly domingo: boolean;
  readonly precio: number;
  readonly horarios?: (CasinoHorarioFlex | null)[];
  readonly casino: Casino;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CasinoPrecioFlex, CasinoPrecioFlexMetaData>);
  static copyOf(source: CasinoPrecioFlex, mutator: (draft: MutableModel<CasinoPrecioFlex, CasinoPrecioFlexMetaData>) => MutableModel<CasinoPrecioFlex, CasinoPrecioFlexMetaData> | void): CasinoPrecioFlex;
}

export declare class CasinoHorarioFlex {
  readonly id: string;
  readonly hora_inicio: string;
  readonly hora_fin: string;
  readonly eventos?: (Evento | null)[];
  readonly cas_precio_flex: CasinoPrecioFlex;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CasinoHorarioFlex, CasinoHorarioFlexMetaData>);
  static copyOf(source: CasinoHorarioFlex, mutator: (draft: MutableModel<CasinoHorarioFlex, CasinoHorarioFlexMetaData>) => MutableModel<CasinoHorarioFlex, CasinoHorarioFlexMetaData> | void): CasinoHorarioFlex;
}

export declare class CasinoArea {
  readonly id: string;
  readonly descripcion?: string;
  readonly casino: Casino;
  readonly area: Area;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CasinoArea, CasinoAreaMetaData>);
  static copyOf(source: CasinoArea, mutator: (draft: MutableModel<CasinoArea, CasinoAreaMetaData>) => MutableModel<CasinoArea, CasinoAreaMetaData> | void): CasinoArea;
}

export declare class Area {
  readonly id: string;
  readonly nombre: string;
  readonly casinos?: (CasinoArea | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Area, AreaMetaData>);
  static copyOf(source: Area, mutator: (draft: MutableModel<Area, AreaMetaData>) => MutableModel<Area, AreaMetaData> | void): Area;
}

export declare class CasinoServicio {
  readonly id: string;
  readonly descripcion?: string;
  readonly casino: Casino;
  readonly servicio: Servicio;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CasinoServicio, CasinoServicioMetaData>);
  static copyOf(source: CasinoServicio, mutator: (draft: MutableModel<CasinoServicio, CasinoServicioMetaData>) => MutableModel<CasinoServicio, CasinoServicioMetaData> | void): CasinoServicio;
}

export declare class Servicio {
  readonly id: string;
  readonly nombre: string;
  readonly casinos?: (CasinoServicio | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Servicio, ServicioMetaData>);
  static copyOf(source: Servicio, mutator: (draft: MutableModel<Servicio, ServicioMetaData>) => MutableModel<Servicio, ServicioMetaData> | void): Servicio;
}

export declare class Imagen {
  readonly id: string;
  readonly url: string;
  readonly casino: Casino;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Imagen, ImagenMetaData>);
  static copyOf(source: Imagen, mutator: (draft: MutableModel<Imagen, ImagenMetaData>) => MutableModel<Imagen, ImagenMetaData> | void): Imagen;
}

export declare class Usuario {
  readonly id: string;
  readonly nombres: string;
  readonly ap_paterno: string;
  readonly ap_materno?: string;
  readonly nacimiento?: string;
  readonly sexo?: string;
  readonly email: string;
  readonly telefono?: string;
  readonly celular?: string;
  readonly pwd: string;
  readonly eventos?: (Evento | null)[];
  readonly casinos?: (Casino | null)[];
  readonly rol: Rol | keyof typeof Rol;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Usuario, UsuarioMetaData>);
  static copyOf(source: Usuario, mutator: (draft: MutableModel<Usuario, UsuarioMetaData>) => MutableModel<Usuario, UsuarioMetaData> | void): Usuario;
}

export declare class ServicioExtra {
  readonly id: string;
  readonly nombre: string;
  readonly casinos?: (CasinoServicioExtra | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ServicioExtra, ServicioExtraMetaData>);
  static copyOf(source: ServicioExtra, mutator: (draft: MutableModel<ServicioExtra, ServicioExtraMetaData>) => MutableModel<ServicioExtra, ServicioExtraMetaData> | void): ServicioExtra;
}