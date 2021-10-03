/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvento = /* GraphQL */ `
  query GetEvento($id: ID!) {
    getEvento(id: $id) {
      id
      id_usuario
      id_cas_hor_fijo
      id_cas_hor_flex
      id_casino
      fecha
      importe
      casino_servicios_extras {
        items {
          id
          id_evento
          id_casino_se
          createdAt
          updatedAt
        }
        nextToken
      }
      usuario {
        id
        nombres
        ap_paterno
        ap_materno
        nacimiento
        sexo
        email
        telefono
        celular
        pwd
        eventos {
          nextToken
        }
        casinos {
          nextToken
        }
        rol
        createdAt
        updatedAt
      }
      cas_hor_fijo {
        id
        id_casino
        hora_inicio
        hora_fin
        lunes
        martes
        miercoles
        jueves
        viernes
        sabado
        domingo
        precio
        eventos {
          nextToken
        }
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      cas_hor_flex {
        id
        id_cas_precio_flex
        hora_inicio
        hora_fin
        eventos {
          nextToken
        }
        cas_precio_flex {
          id
          id_casino
          lunes
          martes
          miercoles
          jueves
          viernes
          sabado
          domingo
          precio
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      casino {
        id
        id_usuario
        direccion
        titulo
        descripcion
        rfc
        horarios_fijos {
          nextToken
        }
        precios_flexibles {
          nextToken
        }
        areas {
          nextToken
        }
        servicios {
          nextToken
        }
        servicios_extras {
          nextToken
        }
        eventos {
          nextToken
        }
        imagenes {
          nextToken
        }
        usuario {
          id
          nombres
          ap_paterno
          ap_materno
          nacimiento
          sexo
          email
          telefono
          celular
          pwd
          rol
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEventos = /* GraphQL */ `
  query ListEventos(
    $filter: ModelEventoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        id_usuario
        id_cas_hor_fijo
        id_cas_hor_flex
        id_casino
        fecha
        importe
        casino_servicios_extras {
          nextToken
        }
        usuario {
          id
          nombres
          ap_paterno
          ap_materno
          nacimiento
          sexo
          email
          telefono
          celular
          pwd
          rol
          createdAt
          updatedAt
        }
        cas_hor_fijo {
          id
          id_casino
          hora_inicio
          hora_fin
          lunes
          martes
          miercoles
          jueves
          viernes
          sabado
          domingo
          precio
          createdAt
          updatedAt
        }
        cas_hor_flex {
          id
          id_cas_precio_flex
          hora_inicio
          hora_fin
          createdAt
          updatedAt
        }
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCasinoHorarioFijo = /* GraphQL */ `
  query GetCasinoHorarioFijo($id: ID!) {
    getCasinoHorarioFijo(id: $id) {
      id
      id_casino
      hora_inicio
      hora_fin
      lunes
      martes
      miercoles
      jueves
      viernes
      sabado
      domingo
      precio
      eventos {
        items {
          id
          id_usuario
          id_cas_hor_fijo
          id_cas_hor_flex
          id_casino
          fecha
          importe
          createdAt
          updatedAt
        }
        nextToken
      }
      casino {
        id
        id_usuario
        direccion
        titulo
        descripcion
        rfc
        horarios_fijos {
          nextToken
        }
        precios_flexibles {
          nextToken
        }
        areas {
          nextToken
        }
        servicios {
          nextToken
        }
        servicios_extras {
          nextToken
        }
        eventos {
          nextToken
        }
        imagenes {
          nextToken
        }
        usuario {
          id
          nombres
          ap_paterno
          ap_materno
          nacimiento
          sexo
          email
          telefono
          celular
          pwd
          rol
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCasinoHorarioFijos = /* GraphQL */ `
  query ListCasinoHorarioFijos(
    $filter: ModelCasinoHorarioFijoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCasinoHorarioFijos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        id_casino
        hora_inicio
        hora_fin
        lunes
        martes
        miercoles
        jueves
        viernes
        sabado
        domingo
        precio
        eventos {
          nextToken
        }
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCasinoHorarioFlex = /* GraphQL */ `
  query GetCasinoHorarioFlex($id: ID!) {
    getCasinoHorarioFlex(id: $id) {
      id
      id_cas_precio_flex
      hora_inicio
      hora_fin
      eventos {
        items {
          id
          id_usuario
          id_cas_hor_fijo
          id_cas_hor_flex
          id_casino
          fecha
          importe
          createdAt
          updatedAt
        }
        nextToken
      }
      cas_precio_flex {
        id
        id_casino
        lunes
        martes
        miercoles
        jueves
        viernes
        sabado
        domingo
        precio
        horarios {
          nextToken
        }
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCasinoHorarioFlexes = /* GraphQL */ `
  query ListCasinoHorarioFlexes(
    $filter: ModelCasinoHorarioFlexFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCasinoHorarioFlexes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        id_cas_precio_flex
        hora_inicio
        hora_fin
        eventos {
          nextToken
        }
        cas_precio_flex {
          id
          id_casino
          lunes
          martes
          miercoles
          jueves
          viernes
          sabado
          domingo
          precio
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCasinoPrecioFlex = /* GraphQL */ `
  query GetCasinoPrecioFlex($id: ID!) {
    getCasinoPrecioFlex(id: $id) {
      id
      id_casino
      lunes
      martes
      miercoles
      jueves
      viernes
      sabado
      domingo
      precio
      horarios {
        items {
          id
          id_cas_precio_flex
          hora_inicio
          hora_fin
          createdAt
          updatedAt
        }
        nextToken
      }
      casino {
        id
        id_usuario
        direccion
        titulo
        descripcion
        rfc
        horarios_fijos {
          nextToken
        }
        precios_flexibles {
          nextToken
        }
        areas {
          nextToken
        }
        servicios {
          nextToken
        }
        servicios_extras {
          nextToken
        }
        eventos {
          nextToken
        }
        imagenes {
          nextToken
        }
        usuario {
          id
          nombres
          ap_paterno
          ap_materno
          nacimiento
          sexo
          email
          telefono
          celular
          pwd
          rol
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCasinoPrecioFlexes = /* GraphQL */ `
  query ListCasinoPrecioFlexes(
    $filter: ModelCasinoPrecioFlexFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCasinoPrecioFlexes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        id_casino
        lunes
        martes
        miercoles
        jueves
        viernes
        sabado
        domingo
        precio
        horarios {
          nextToken
        }
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCasino = /* GraphQL */ `
  query GetCasino($id: ID!) {
    getCasino(id: $id) {
      id
      id_usuario
      direccion
      titulo
      descripcion
      rfc
      horarios_fijos {
        items {
          id
          id_casino
          hora_inicio
          hora_fin
          lunes
          martes
          miercoles
          jueves
          viernes
          sabado
          domingo
          precio
          createdAt
          updatedAt
        }
        nextToken
      }
      precios_flexibles {
        items {
          id
          id_casino
          lunes
          martes
          miercoles
          jueves
          viernes
          sabado
          domingo
          precio
          createdAt
          updatedAt
        }
        nextToken
      }
      areas {
        items {
          id
          id_casino
          id_area
          descripcion
          createdAt
          updatedAt
        }
        nextToken
      }
      servicios {
        items {
          id
          id_casino
          id_servicio
          descripcion
          createdAt
          updatedAt
        }
        nextToken
      }
      servicios_extras {
        items {
          id
          id_casino
          id_servicio_extra
          descripcion
          costo
          createdAt
          updatedAt
        }
        nextToken
      }
      eventos {
        items {
          id
          id_usuario
          id_cas_hor_fijo
          id_cas_hor_flex
          id_casino
          fecha
          importe
          createdAt
          updatedAt
        }
        nextToken
      }
      imagenes {
        items {
          id
          id_casino
          createdAt
          updatedAt
        }
        nextToken
      }
      usuario {
        id
        nombres
        ap_paterno
        ap_materno
        nacimiento
        sexo
        email
        telefono
        celular
        pwd
        eventos {
          nextToken
        }
        casinos {
          nextToken
        }
        rol
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCasinos = /* GraphQL */ `
  query ListCasinos(
    $filter: ModelCasinoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCasinos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        id_usuario
        direccion
        titulo
        descripcion
        rfc
        horarios_fijos {
          nextToken
        }
        precios_flexibles {
          nextToken
        }
        areas {
          nextToken
        }
        servicios {
          nextToken
        }
        servicios_extras {
          nextToken
        }
        eventos {
          nextToken
        }
        imagenes {
          nextToken
        }
        usuario {
          id
          nombres
          ap_paterno
          ap_materno
          nacimiento
          sexo
          email
          telefono
          celular
          pwd
          rol
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCasinoArea = /* GraphQL */ `
  query GetCasinoArea($id: ID!) {
    getCasinoArea(id: $id) {
      id
      id_casino
      id_area
      descripcion
      casino {
        id
        id_usuario
        direccion
        titulo
        descripcion
        rfc
        horarios_fijos {
          nextToken
        }
        precios_flexibles {
          nextToken
        }
        areas {
          nextToken
        }
        servicios {
          nextToken
        }
        servicios_extras {
          nextToken
        }
        eventos {
          nextToken
        }
        imagenes {
          nextToken
        }
        usuario {
          id
          nombres
          ap_paterno
          ap_materno
          nacimiento
          sexo
          email
          telefono
          celular
          pwd
          rol
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      area {
        id
        nombre
        casinos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCasinoAreas = /* GraphQL */ `
  query ListCasinoAreas(
    $filter: ModelCasinoAreaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCasinoAreas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        id_casino
        id_area
        descripcion
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          createdAt
          updatedAt
        }
        area {
          id
          nombre
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArea = /* GraphQL */ `
  query GetArea($id: ID!) {
    getArea(id: $id) {
      id
      nombre
      casinos {
        items {
          id
          id_casino
          id_area
          descripcion
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAreas = /* GraphQL */ `
  query ListAreas(
    $filter: ModelAreaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAreas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        casinos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCasinoServicio = /* GraphQL */ `
  query GetCasinoServicio($id: ID!) {
    getCasinoServicio(id: $id) {
      id
      id_casino
      id_servicio
      descripcion
      casino {
        id
        id_usuario
        direccion
        titulo
        descripcion
        rfc
        horarios_fijos {
          nextToken
        }
        precios_flexibles {
          nextToken
        }
        areas {
          nextToken
        }
        servicios {
          nextToken
        }
        servicios_extras {
          nextToken
        }
        eventos {
          nextToken
        }
        imagenes {
          nextToken
        }
        usuario {
          id
          nombres
          ap_paterno
          ap_materno
          nacimiento
          sexo
          email
          telefono
          celular
          pwd
          rol
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      servicio {
        id
        nombre
        casinos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCasinoServicios = /* GraphQL */ `
  query ListCasinoServicios(
    $filter: ModelCasinoServicioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCasinoServicios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        id_casino
        id_servicio
        descripcion
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          createdAt
          updatedAt
        }
        servicio {
          id
          nombre
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getServicio = /* GraphQL */ `
  query GetServicio($id: ID!) {
    getServicio(id: $id) {
      id
      nombre
      casinos {
        items {
          id
          id_casino
          id_servicio
          descripcion
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listServicios = /* GraphQL */ `
  query ListServicios(
    $filter: ModelServicioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServicios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        casinos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCasinoServicioExtra = /* GraphQL */ `
  query GetCasinoServicioExtra($id: ID!) {
    getCasinoServicioExtra(id: $id) {
      id
      id_casino
      id_servicio_extra
      descripcion
      costo
      eventos {
        items {
          id
          id_evento
          id_casino_se
          createdAt
          updatedAt
        }
        nextToken
      }
      casino {
        id
        id_usuario
        direccion
        titulo
        descripcion
        rfc
        horarios_fijos {
          nextToken
        }
        precios_flexibles {
          nextToken
        }
        areas {
          nextToken
        }
        servicios {
          nextToken
        }
        servicios_extras {
          nextToken
        }
        eventos {
          nextToken
        }
        imagenes {
          nextToken
        }
        usuario {
          id
          nombres
          ap_paterno
          ap_materno
          nacimiento
          sexo
          email
          telefono
          celular
          pwd
          rol
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      servicio_extra {
        id
        nombre
        casinos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCasinoServicioExtras = /* GraphQL */ `
  query ListCasinoServicioExtras(
    $filter: ModelCasinoServicioExtraFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCasinoServicioExtras(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        id_casino
        id_servicio_extra
        descripcion
        costo
        eventos {
          nextToken
        }
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          createdAt
          updatedAt
        }
        servicio_extra {
          id
          nombre
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getServicioExtra = /* GraphQL */ `
  query GetServicioExtra($id: ID!) {
    getServicioExtra(id: $id) {
      id
      nombre
      casinos {
        items {
          id
          id_casino
          id_servicio_extra
          descripcion
          costo
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listServicioExtras = /* GraphQL */ `
  query ListServicioExtras(
    $filter: ModelServicioExtraFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServicioExtras(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        casinos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEventoCasinoSE = /* GraphQL */ `
  query GetEventoCasinoSE($id: ID!) {
    getEventoCasinoSE(id: $id) {
      id
      id_evento
      id_casino_se
      evento {
        id
        id_usuario
        id_cas_hor_fijo
        id_cas_hor_flex
        id_casino
        fecha
        importe
        casino_servicios_extras {
          nextToken
        }
        usuario {
          id
          nombres
          ap_paterno
          ap_materno
          nacimiento
          sexo
          email
          telefono
          celular
          pwd
          rol
          createdAt
          updatedAt
        }
        cas_hor_fijo {
          id
          id_casino
          hora_inicio
          hora_fin
          lunes
          martes
          miercoles
          jueves
          viernes
          sabado
          domingo
          precio
          createdAt
          updatedAt
        }
        cas_hor_flex {
          id
          id_cas_precio_flex
          hora_inicio
          hora_fin
          createdAt
          updatedAt
        }
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      casino_se {
        id
        id_casino
        id_servicio_extra
        descripcion
        costo
        eventos {
          nextToken
        }
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          createdAt
          updatedAt
        }
        servicio_extra {
          id
          nombre
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEventoCasinoSES = /* GraphQL */ `
  query ListEventoCasinoSES(
    $filter: ModelEventoCasinoSEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventoCasinoSES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        id_evento
        id_casino_se
        evento {
          id
          id_usuario
          id_cas_hor_fijo
          id_cas_hor_flex
          id_casino
          fecha
          importe
          createdAt
          updatedAt
        }
        casino_se {
          id
          id_casino
          id_servicio_extra
          descripcion
          costo
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUsuario = /* GraphQL */ `
  query GetUsuario($id: ID!) {
    getUsuario(id: $id) {
      id
      nombres
      ap_paterno
      ap_materno
      nacimiento
      sexo
      email
      telefono
      celular
      pwd
      eventos {
        items {
          id
          id_usuario
          id_cas_hor_fijo
          id_cas_hor_flex
          id_casino
          fecha
          importe
          createdAt
          updatedAt
        }
        nextToken
      }
      casinos {
        items {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          createdAt
          updatedAt
        }
        nextToken
      }
      rol
      createdAt
      updatedAt
    }
  }
`;
export const listUsuarios = /* GraphQL */ `
  query ListUsuarios(
    $filter: ModelUsuarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsuarios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombres
        ap_paterno
        ap_materno
        nacimiento
        sexo
        email
        telefono
        celular
        pwd
        eventos {
          nextToken
        }
        casinos {
          nextToken
        }
        rol
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImagen = /* GraphQL */ `
  query GetImagen($id: ID!) {
    getImagen(id: $id) {
      id
      id_casino
      file {
        bucket
        region
        key
      }
      casino {
        id
        id_usuario
        direccion
        titulo
        descripcion
        rfc
        horarios_fijos {
          nextToken
        }
        precios_flexibles {
          nextToken
        }
        areas {
          nextToken
        }
        servicios {
          nextToken
        }
        servicios_extras {
          nextToken
        }
        eventos {
          nextToken
        }
        imagenes {
          nextToken
        }
        usuario {
          id
          nombres
          ap_paterno
          ap_materno
          nacimiento
          sexo
          email
          telefono
          celular
          pwd
          rol
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listImagens = /* GraphQL */ `
  query ListImagens(
    $filter: ModelImagenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImagens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        id_casino
        file {
          bucket
          region
          key
        }
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const porEmail = /* GraphQL */ `
  query PorEmail(
    $email: String
    $ap_paterno: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUsuarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    PorEmail(
      email: $email
      ap_paterno: $ap_paterno
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombres
        ap_paterno
        ap_materno
        nacimiento
        sexo
        email
        telefono
        celular
        pwd
        eventos {
          nextToken
        }
        casinos {
          nextToken
        }
        rol
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchUsuarios = /* GraphQL */ `
  query SearchUsuarios(
    $filter: SearchableUsuarioFilterInput
    $sort: SearchableUsuarioSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchUsuarios(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        nombres
        ap_paterno
        ap_materno
        nacimiento
        sexo
        email
        telefono
        celular
        pwd
        eventos {
          nextToken
        }
        casinos {
          nextToken
        }
        rol
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchImagens = /* GraphQL */ `
  query SearchImagens(
    $filter: SearchableImagenFilterInput
    $sort: SearchableImagenSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchImagens(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        id_casino
        file {
          bucket
          region
          key
        }
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
