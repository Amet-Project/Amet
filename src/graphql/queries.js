/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrdenCasino = /* GraphQL */ `
  query GetOrdenCasino($id: ID!) {
    getOrdenCasino(id: $id) {
      id
      id_cas_hor_fijo
      id_cas_hor_flex
      id_casino
      fecha
      importe
      reviewed
      casino_servicios_extras {
        items {
          id
          id_orden
          id_casino_se
          createdAt
          updatedAt
        }
        nextToken
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
        ordenes {
          nextToken
        }
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          cap_maxima
          aprobado
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
        ordenes {
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
        cap_maxima
        aprobado
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
        ordenes {
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
export const listOrdenCasinos = /* GraphQL */ `
  query ListOrdenCasinos(
    $filter: ModelOrdenCasinoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrdenCasinos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        id_cas_hor_fijo
        id_cas_hor_flex
        id_casino
        fecha
        importe
        reviewed
        casino_servicios_extras {
          nextToken
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
          cap_maxima
          aprobado
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
      ordenes {
        items {
          id
          id_cas_hor_fijo
          id_cas_hor_flex
          id_casino
          fecha
          importe
          reviewed
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
        cap_maxima
        aprobado
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
        ordenes {
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
        ordenes {
          nextToken
        }
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          cap_maxima
          aprobado
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
      ordenes {
        items {
          id
          id_cas_hor_fijo
          id_cas_hor_flex
          id_casino
          fecha
          importe
          reviewed
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
          cap_maxima
          aprobado
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
        ordenes {
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
        cap_maxima
        aprobado
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
        ordenes {
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
          cap_maxima
          aprobado
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
      cap_maxima
      aprobado
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
      ordenes {
        items {
          id
          id_cas_hor_fijo
          id_cas_hor_flex
          id_casino
          fecha
          importe
          reviewed
          createdAt
          updatedAt
        }
        nextToken
      }
      imagenes {
        items {
          id
          id_casino
          url
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
        banquete {
          nextToken
        }
        entretenimiento {
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
        cap_maxima
        aprobado
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
        ordenes {
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
        cap_maxima
        aprobado
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
        ordenes {
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
          cap_maxima
          aprobado
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
        cap_maxima
        aprobado
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
        ordenes {
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
          cap_maxima
          aprobado
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
      ordenes {
        items {
          id
          id_orden
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
        cap_maxima
        aprobado
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
        ordenes {
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
        ordenes {
          nextToken
        }
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          cap_maxima
          aprobado
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
export const getOrdenCasinoSE = /* GraphQL */ `
  query GetOrdenCasinoSE($id: ID!) {
    getOrdenCasinoSE(id: $id) {
      id
      id_orden
      id_casino_se
      orden {
        id
        id_cas_hor_fijo
        id_cas_hor_flex
        id_casino
        fecha
        importe
        reviewed
        casino_servicios_extras {
          nextToken
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
          cap_maxima
          aprobado
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
        ordenes {
          nextToken
        }
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          cap_maxima
          aprobado
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
export const listOrdenCasinoSES = /* GraphQL */ `
  query ListOrdenCasinoSES(
    $filter: ModelOrdenCasinoSEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrdenCasinoSES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        id_orden
        id_casino_se
        orden {
          id
          id_cas_hor_fijo
          id_cas_hor_flex
          id_casino
          fecha
          importe
          reviewed
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
export const getImagenCasino = /* GraphQL */ `
  query GetImagenCasino($id: ID!) {
    getImagenCasino(id: $id) {
      id
      id_casino
      url
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
        cap_maxima
        aprobado
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
        ordenes {
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
export const listImagenCasinos = /* GraphQL */ `
  query ListImagenCasinos(
    $filter: ModelImagenCasinoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImagenCasinos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        id_casino
        url
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
          cap_maxima
          aprobado
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
export const getBanquete = /* GraphQL */ `
  query GetBanquete($id: ID!) {
    getBanquete(id: $id) {
      id
      id_usuario
      titulo
      descripcion
      rfc
      precio_unitario
      minimo
      aprobado
      ordenes {
        items {
          id
          id_banquete
          fecha
          numero_platillos
          importe
          reviewed
          createdAt
          updatedAt
        }
        nextToken
      }
      imagenes {
        items {
          id
          id_banquete
          url
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
        banquete {
          nextToken
        }
        entretenimiento {
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
export const listBanquetes = /* GraphQL */ `
  query ListBanquetes(
    $filter: ModelBanqueteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBanquetes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        id_usuario
        titulo
        descripcion
        rfc
        precio_unitario
        minimo
        aprobado
        ordenes {
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
export const getImagenBanquete = /* GraphQL */ `
  query GetImagenBanquete($id: ID!) {
    getImagenBanquete(id: $id) {
      id
      id_banquete
      url
      file {
        bucket
        region
        key
      }
      banquete {
        id
        id_usuario
        titulo
        descripcion
        rfc
        precio_unitario
        minimo
        aprobado
        ordenes {
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
export const listImagenBanquetes = /* GraphQL */ `
  query ListImagenBanquetes(
    $filter: ModelImagenBanqueteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImagenBanquetes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        id_banquete
        url
        file {
          bucket
          region
          key
        }
        banquete {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_unitario
          minimo
          aprobado
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
export const getOrdenBanquete = /* GraphQL */ `
  query GetOrdenBanquete($id: ID!) {
    getOrdenBanquete(id: $id) {
      id
      id_banquete
      fecha
      numero_platillos
      importe
      reviewed
      banquete {
        id
        id_usuario
        titulo
        descripcion
        rfc
        precio_unitario
        minimo
        aprobado
        ordenes {
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
export const listOrdenBanquetes = /* GraphQL */ `
  query ListOrdenBanquetes(
    $filter: ModelOrdenBanqueteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrdenBanquetes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        id_banquete
        fecha
        numero_platillos
        importe
        reviewed
        banquete {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_unitario
          minimo
          aprobado
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
export const getEntretenimiento = /* GraphQL */ `
  query GetEntretenimiento($id: ID!) {
    getEntretenimiento(id: $id) {
      id
      id_usuario
      titulo
      descripcion
      rfc
      precio_hora
      minimo
      aprobado
      ordenes {
        items {
          id
          id_entretenimiento
          fecha
          horas
          importe
          reviewed
          createdAt
          updatedAt
        }
        nextToken
      }
      imagenes {
        items {
          id
          id_entretenimiento
          url
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
        banquete {
          nextToken
        }
        entretenimiento {
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
export const listEntretenimientos = /* GraphQL */ `
  query ListEntretenimientos(
    $filter: ModelEntretenimientoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntretenimientos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        id_usuario
        titulo
        descripcion
        rfc
        precio_hora
        minimo
        aprobado
        ordenes {
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
export const getImagenEntretenimiento = /* GraphQL */ `
  query GetImagenEntretenimiento($id: ID!) {
    getImagenEntretenimiento(id: $id) {
      id
      id_entretenimiento
      url
      file {
        bucket
        region
        key
      }
      entretenimiento {
        id
        id_usuario
        titulo
        descripcion
        rfc
        precio_hora
        minimo
        aprobado
        ordenes {
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
export const listImagenEntretenimientos = /* GraphQL */ `
  query ListImagenEntretenimientos(
    $filter: ModelImagenEntretenimientoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImagenEntretenimientos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        id_entretenimiento
        url
        file {
          bucket
          region
          key
        }
        entretenimiento {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_hora
          minimo
          aprobado
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
export const getOrdenEntretenimiento = /* GraphQL */ `
  query GetOrdenEntretenimiento($id: ID!) {
    getOrdenEntretenimiento(id: $id) {
      id
      id_entretenimiento
      fecha
      horas
      importe
      reviewed
      entretenimiento {
        id
        id_usuario
        titulo
        descripcion
        rfc
        precio_hora
        minimo
        aprobado
        ordenes {
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
export const listOrdenEntretenimientos = /* GraphQL */ `
  query ListOrdenEntretenimientos(
    $filter: ModelOrdenEntretenimientoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrdenEntretenimientos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        id_entretenimiento
        fecha
        horas
        importe
        reviewed
        entretenimiento {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_hora
          minimo
          aprobado
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
export const getEvento = /* GraphQL */ `
  query GetEvento($id: ID!) {
    getEvento(id: $id) {
      id
      id_usuario
      id_orden_casino
      id_orden_banquete
      id_orden_entretenimiento
      fecha
      importe_total
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
        banquete {
          nextToken
        }
        entretenimiento {
          nextToken
        }
        rol
        createdAt
        updatedAt
      }
      casino {
        id
        id_cas_hor_fijo
        id_cas_hor_flex
        id_casino
        fecha
        importe
        reviewed
        casino_servicios_extras {
          nextToken
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
          cap_maxima
          aprobado
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      banquete {
        id
        id_banquete
        fecha
        numero_platillos
        importe
        reviewed
        banquete {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_unitario
          minimo
          aprobado
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      entretenimiento {
        id
        id_entretenimiento
        fecha
        horas
        importe
        reviewed
        entretenimiento {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_hora
          minimo
          aprobado
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
        id_orden_casino
        id_orden_banquete
        id_orden_entretenimiento
        fecha
        importe_total
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
        casino {
          id
          id_cas_hor_fijo
          id_cas_hor_flex
          id_casino
          fecha
          importe
          reviewed
          createdAt
          updatedAt
        }
        banquete {
          id
          id_banquete
          fecha
          numero_platillos
          importe
          reviewed
          createdAt
          updatedAt
        }
        entretenimiento {
          id
          id_entretenimiento
          fecha
          horas
          importe
          reviewed
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
          id_orden_casino
          id_orden_banquete
          id_orden_entretenimiento
          fecha
          importe_total
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
          cap_maxima
          aprobado
          createdAt
          updatedAt
        }
        nextToken
      }
      banquete {
        items {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_unitario
          minimo
          aprobado
          createdAt
          updatedAt
        }
        nextToken
      }
      entretenimiento {
        items {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_hora
          minimo
          aprobado
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
        banquete {
          nextToken
        }
        entretenimiento {
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
export const getRatingCasino = /* GraphQL */ `
  query GetRatingCasino($id: ID!) {
    getRatingCasino(id: $id) {
      id
      id_usuario
      id_casino
      rating
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
        banquete {
          nextToken
        }
        entretenimiento {
          nextToken
        }
        rol
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
        cap_maxima
        aprobado
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
        ordenes {
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
export const listRatingCasinos = /* GraphQL */ `
  query ListRatingCasinos(
    $filter: ModelRatingCasinoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatingCasinos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        id_usuario
        id_casino
        rating
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
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          cap_maxima
          aprobado
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
export const getRatingBanquete = /* GraphQL */ `
  query GetRatingBanquete($id: ID!) {
    getRatingBanquete(id: $id) {
      id
      id_usuario
      id_banquete
      rating
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
        banquete {
          nextToken
        }
        entretenimiento {
          nextToken
        }
        rol
        createdAt
        updatedAt
      }
      banquete {
        id
        id_usuario
        titulo
        descripcion
        rfc
        precio_unitario
        minimo
        aprobado
        ordenes {
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
export const listRatingBanquetes = /* GraphQL */ `
  query ListRatingBanquetes(
    $filter: ModelRatingBanqueteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatingBanquetes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        id_usuario
        id_banquete
        rating
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
        banquete {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_unitario
          minimo
          aprobado
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
export const getRatingEntretenimiento = /* GraphQL */ `
  query GetRatingEntretenimiento($id: ID!) {
    getRatingEntretenimiento(id: $id) {
      id
      id_usuario
      id_entretenimiento
      rating
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
        banquete {
          nextToken
        }
        entretenimiento {
          nextToken
        }
        rol
        createdAt
        updatedAt
      }
      entretenimiento {
        id
        id_usuario
        titulo
        descripcion
        rfc
        precio_hora
        minimo
        aprobado
        ordenes {
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
export const listRatingEntretenimientos = /* GraphQL */ `
  query ListRatingEntretenimientos(
    $filter: ModelRatingEntretenimientoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatingEntretenimientos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        id_usuario
        id_entretenimiento
        rating
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
        entretenimiento {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_hora
          minimo
          aprobado
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
export const casinoPorFecha = /* GraphQL */ `
  query CasinoPorFecha(
    $fecha: String
    $id_casino: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrdenCasinoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    casinoPorFecha(
      fecha: $fecha
      id_casino: $id_casino
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        id_cas_hor_fijo
        id_cas_hor_flex
        id_casino
        fecha
        importe
        reviewed
        casino_servicios_extras {
          nextToken
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
          cap_maxima
          aprobado
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
export const banquetePorFecha = /* GraphQL */ `
  query BanquetePorFecha(
    $fecha: String
    $id_banquete: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrdenBanqueteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    banquetePorFecha(
      fecha: $fecha
      id_banquete: $id_banquete
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        id_banquete
        fecha
        numero_platillos
        importe
        reviewed
        banquete {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_unitario
          minimo
          aprobado
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
export const entretenimientoPorFecha = /* GraphQL */ `
  query EntretenimientoPorFecha(
    $fecha: String
    $id_entretenimiento: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrdenEntretenimientoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    entretenimientoPorFecha(
      fecha: $fecha
      id_entretenimiento: $id_entretenimiento
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        id_entretenimiento
        fecha
        horas
        importe
        reviewed
        entretenimiento {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_hora
          minimo
          aprobado
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
export const eventoPorFecha = /* GraphQL */ `
  query EventoPorFecha(
    $fecha: String
    $id_usuario: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventoPorFecha(
      fecha: $fecha
      id_usuario: $id_usuario
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        id_usuario
        id_orden_casino
        id_orden_banquete
        id_orden_entretenimiento
        fecha
        importe_total
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
        casino {
          id
          id_cas_hor_fijo
          id_cas_hor_flex
          id_casino
          fecha
          importe
          reviewed
          createdAt
          updatedAt
        }
        banquete {
          id
          id_banquete
          fecha
          numero_platillos
          importe
          reviewed
          createdAt
          updatedAt
        }
        entretenimiento {
          id
          id_entretenimiento
          fecha
          horas
          importe
          reviewed
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
export const usuarioPorEmail = /* GraphQL */ `
  query UsuarioPorEmail(
    $email: String
    $ap_paterno: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUsuarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usuarioPorEmail(
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
        banquete {
          nextToken
        }
        entretenimiento {
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
export const ratingCasinoPorUsuario = /* GraphQL */ `
  query RatingCasinoPorUsuario(
    $id_usuario: ID
    $id_casino: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRatingCasinoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingCasinoPorUsuario(
      id_usuario: $id_usuario
      id_casino: $id_casino
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        id_usuario
        id_casino
        rating
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
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          cap_maxima
          aprobado
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
export const ratingBanquetePorUsuario = /* GraphQL */ `
  query RatingBanquetePorUsuario(
    $id_usuario: ID
    $id_banquete: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRatingBanqueteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingBanquetePorUsuario(
      id_usuario: $id_usuario
      id_banquete: $id_banquete
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        id_usuario
        id_banquete
        rating
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
        banquete {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_unitario
          minimo
          aprobado
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
export const ratingEntretenimientoPorUsuario = /* GraphQL */ `
  query RatingEntretenimientoPorUsuario(
    $id_usuario: ID
    $id_entretenimiento: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRatingEntretenimientoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingEntretenimientoPorUsuario(
      id_usuario: $id_usuario
      id_entretenimiento: $id_entretenimiento
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        id_usuario
        id_entretenimiento
        rating
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
        entretenimiento {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_hora
          minimo
          aprobado
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
export const searchImagenCasinos = /* GraphQL */ `
  query SearchImagenCasinos(
    $filter: SearchableImagenCasinoFilterInput
    $sort: SearchableImagenCasinoSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchImagenCasinos(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        id_casino
        url
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
          cap_maxima
          aprobado
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
export const searchImagenBanquetes = /* GraphQL */ `
  query SearchImagenBanquetes(
    $filter: SearchableImagenBanqueteFilterInput
    $sort: SearchableImagenBanqueteSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchImagenBanquetes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        id_banquete
        url
        file {
          bucket
          region
          key
        }
        banquete {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_unitario
          minimo
          aprobado
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
export const searchImagenEntretenimientos = /* GraphQL */ `
  query SearchImagenEntretenimientos(
    $filter: SearchableImagenEntretenimientoFilterInput
    $sort: SearchableImagenEntretenimientoSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchImagenEntretenimientos(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        id_entretenimiento
        url
        file {
          bucket
          region
          key
        }
        entretenimiento {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_hora
          minimo
          aprobado
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
        banquete {
          nextToken
        }
        entretenimiento {
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
export const searchRatingCasinos = /* GraphQL */ `
  query SearchRatingCasinos(
    $filter: SearchableRatingCasinoFilterInput
    $sort: SearchableRatingCasinoSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchRatingCasinos(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        id_usuario
        id_casino
        rating
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
        casino {
          id
          id_usuario
          direccion
          titulo
          descripcion
          rfc
          cap_maxima
          aprobado
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
export const searchRatingBanquetes = /* GraphQL */ `
  query SearchRatingBanquetes(
    $filter: SearchableRatingBanqueteFilterInput
    $sort: SearchableRatingBanqueteSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchRatingBanquetes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        id_usuario
        id_banquete
        rating
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
        banquete {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_unitario
          minimo
          aprobado
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
export const searchRatingEntretenimientos = /* GraphQL */ `
  query SearchRatingEntretenimientos(
    $filter: SearchableRatingEntretenimientoFilterInput
    $sort: SearchableRatingEntretenimientoSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchRatingEntretenimientos(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        id_usuario
        id_entretenimiento
        rating
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
        entretenimiento {
          id
          id_usuario
          titulo
          descripcion
          rfc
          precio_hora
          minimo
          aprobado
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
