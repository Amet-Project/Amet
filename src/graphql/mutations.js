/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrdenCasino = /* GraphQL */ `
  mutation CreateOrdenCasino(
    $input: CreateOrdenCasinoInput!
    $condition: ModelOrdenCasinoConditionInput
  ) {
    createOrdenCasino(input: $input, condition: $condition) {
      id
      id_cas_hor_fijo
      id_cas_hor_flex
      id_casino
      fecha
      importe
      reviewed
      status
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
export const updateOrdenCasino = /* GraphQL */ `
  mutation UpdateOrdenCasino(
    $input: UpdateOrdenCasinoInput!
    $condition: ModelOrdenCasinoConditionInput
  ) {
    updateOrdenCasino(input: $input, condition: $condition) {
      id
      id_cas_hor_fijo
      id_cas_hor_flex
      id_casino
      fecha
      importe
      reviewed
      status
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
export const deleteOrdenCasino = /* GraphQL */ `
  mutation DeleteOrdenCasino(
    $input: DeleteOrdenCasinoInput!
    $condition: ModelOrdenCasinoConditionInput
  ) {
    deleteOrdenCasino(input: $input, condition: $condition) {
      id
      id_cas_hor_fijo
      id_cas_hor_flex
      id_casino
      fecha
      importe
      reviewed
      status
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
export const createCasinoHorarioFijo = /* GraphQL */ `
  mutation CreateCasinoHorarioFijo(
    $input: CreateCasinoHorarioFijoInput!
    $condition: ModelCasinoHorarioFijoConditionInput
  ) {
    createCasinoHorarioFijo(input: $input, condition: $condition) {
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
          status
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
export const updateCasinoHorarioFijo = /* GraphQL */ `
  mutation UpdateCasinoHorarioFijo(
    $input: UpdateCasinoHorarioFijoInput!
    $condition: ModelCasinoHorarioFijoConditionInput
  ) {
    updateCasinoHorarioFijo(input: $input, condition: $condition) {
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
          status
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
export const deleteCasinoHorarioFijo = /* GraphQL */ `
  mutation DeleteCasinoHorarioFijo(
    $input: DeleteCasinoHorarioFijoInput!
    $condition: ModelCasinoHorarioFijoConditionInput
  ) {
    deleteCasinoHorarioFijo(input: $input, condition: $condition) {
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
          status
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
export const createCasinoHorarioFlex = /* GraphQL */ `
  mutation CreateCasinoHorarioFlex(
    $input: CreateCasinoHorarioFlexInput!
    $condition: ModelCasinoHorarioFlexConditionInput
  ) {
    createCasinoHorarioFlex(input: $input, condition: $condition) {
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
          status
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
export const updateCasinoHorarioFlex = /* GraphQL */ `
  mutation UpdateCasinoHorarioFlex(
    $input: UpdateCasinoHorarioFlexInput!
    $condition: ModelCasinoHorarioFlexConditionInput
  ) {
    updateCasinoHorarioFlex(input: $input, condition: $condition) {
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
          status
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
export const deleteCasinoHorarioFlex = /* GraphQL */ `
  mutation DeleteCasinoHorarioFlex(
    $input: DeleteCasinoHorarioFlexInput!
    $condition: ModelCasinoHorarioFlexConditionInput
  ) {
    deleteCasinoHorarioFlex(input: $input, condition: $condition) {
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
          status
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
export const createCasinoPrecioFlex = /* GraphQL */ `
  mutation CreateCasinoPrecioFlex(
    $input: CreateCasinoPrecioFlexInput!
    $condition: ModelCasinoPrecioFlexConditionInput
  ) {
    createCasinoPrecioFlex(input: $input, condition: $condition) {
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
export const updateCasinoPrecioFlex = /* GraphQL */ `
  mutation UpdateCasinoPrecioFlex(
    $input: UpdateCasinoPrecioFlexInput!
    $condition: ModelCasinoPrecioFlexConditionInput
  ) {
    updateCasinoPrecioFlex(input: $input, condition: $condition) {
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
export const deleteCasinoPrecioFlex = /* GraphQL */ `
  mutation DeleteCasinoPrecioFlex(
    $input: DeleteCasinoPrecioFlexInput!
    $condition: ModelCasinoPrecioFlexConditionInput
  ) {
    deleteCasinoPrecioFlex(input: $input, condition: $condition) {
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
export const createCasino = /* GraphQL */ `
  mutation CreateCasino(
    $input: CreateCasinoInput!
    $condition: ModelCasinoConditionInput
  ) {
    createCasino(input: $input, condition: $condition) {
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
          status
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
export const updateCasino = /* GraphQL */ `
  mutation UpdateCasino(
    $input: UpdateCasinoInput!
    $condition: ModelCasinoConditionInput
  ) {
    updateCasino(input: $input, condition: $condition) {
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
          status
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
export const deleteCasino = /* GraphQL */ `
  mutation DeleteCasino(
    $input: DeleteCasinoInput!
    $condition: ModelCasinoConditionInput
  ) {
    deleteCasino(input: $input, condition: $condition) {
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
          status
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
export const createCasinoArea = /* GraphQL */ `
  mutation CreateCasinoArea(
    $input: CreateCasinoAreaInput!
    $condition: ModelCasinoAreaConditionInput
  ) {
    createCasinoArea(input: $input, condition: $condition) {
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
export const updateCasinoArea = /* GraphQL */ `
  mutation UpdateCasinoArea(
    $input: UpdateCasinoAreaInput!
    $condition: ModelCasinoAreaConditionInput
  ) {
    updateCasinoArea(input: $input, condition: $condition) {
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
export const deleteCasinoArea = /* GraphQL */ `
  mutation DeleteCasinoArea(
    $input: DeleteCasinoAreaInput!
    $condition: ModelCasinoAreaConditionInput
  ) {
    deleteCasinoArea(input: $input, condition: $condition) {
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
export const createArea = /* GraphQL */ `
  mutation CreateArea(
    $input: CreateAreaInput!
    $condition: ModelAreaConditionInput
  ) {
    createArea(input: $input, condition: $condition) {
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
export const updateArea = /* GraphQL */ `
  mutation UpdateArea(
    $input: UpdateAreaInput!
    $condition: ModelAreaConditionInput
  ) {
    updateArea(input: $input, condition: $condition) {
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
export const deleteArea = /* GraphQL */ `
  mutation DeleteArea(
    $input: DeleteAreaInput!
    $condition: ModelAreaConditionInput
  ) {
    deleteArea(input: $input, condition: $condition) {
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
export const createCasinoServicio = /* GraphQL */ `
  mutation CreateCasinoServicio(
    $input: CreateCasinoServicioInput!
    $condition: ModelCasinoServicioConditionInput
  ) {
    createCasinoServicio(input: $input, condition: $condition) {
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
export const updateCasinoServicio = /* GraphQL */ `
  mutation UpdateCasinoServicio(
    $input: UpdateCasinoServicioInput!
    $condition: ModelCasinoServicioConditionInput
  ) {
    updateCasinoServicio(input: $input, condition: $condition) {
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
export const deleteCasinoServicio = /* GraphQL */ `
  mutation DeleteCasinoServicio(
    $input: DeleteCasinoServicioInput!
    $condition: ModelCasinoServicioConditionInput
  ) {
    deleteCasinoServicio(input: $input, condition: $condition) {
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
export const createServicio = /* GraphQL */ `
  mutation CreateServicio(
    $input: CreateServicioInput!
    $condition: ModelServicioConditionInput
  ) {
    createServicio(input: $input, condition: $condition) {
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
export const updateServicio = /* GraphQL */ `
  mutation UpdateServicio(
    $input: UpdateServicioInput!
    $condition: ModelServicioConditionInput
  ) {
    updateServicio(input: $input, condition: $condition) {
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
export const deleteServicio = /* GraphQL */ `
  mutation DeleteServicio(
    $input: DeleteServicioInput!
    $condition: ModelServicioConditionInput
  ) {
    deleteServicio(input: $input, condition: $condition) {
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
export const createCasinoServicioExtra = /* GraphQL */ `
  mutation CreateCasinoServicioExtra(
    $input: CreateCasinoServicioExtraInput!
    $condition: ModelCasinoServicioExtraConditionInput
  ) {
    createCasinoServicioExtra(input: $input, condition: $condition) {
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
export const updateCasinoServicioExtra = /* GraphQL */ `
  mutation UpdateCasinoServicioExtra(
    $input: UpdateCasinoServicioExtraInput!
    $condition: ModelCasinoServicioExtraConditionInput
  ) {
    updateCasinoServicioExtra(input: $input, condition: $condition) {
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
export const deleteCasinoServicioExtra = /* GraphQL */ `
  mutation DeleteCasinoServicioExtra(
    $input: DeleteCasinoServicioExtraInput!
    $condition: ModelCasinoServicioExtraConditionInput
  ) {
    deleteCasinoServicioExtra(input: $input, condition: $condition) {
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
export const createServicioExtra = /* GraphQL */ `
  mutation CreateServicioExtra(
    $input: CreateServicioExtraInput!
    $condition: ModelServicioExtraConditionInput
  ) {
    createServicioExtra(input: $input, condition: $condition) {
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
export const updateServicioExtra = /* GraphQL */ `
  mutation UpdateServicioExtra(
    $input: UpdateServicioExtraInput!
    $condition: ModelServicioExtraConditionInput
  ) {
    updateServicioExtra(input: $input, condition: $condition) {
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
export const deleteServicioExtra = /* GraphQL */ `
  mutation DeleteServicioExtra(
    $input: DeleteServicioExtraInput!
    $condition: ModelServicioExtraConditionInput
  ) {
    deleteServicioExtra(input: $input, condition: $condition) {
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
export const createOrdenCasinoSE = /* GraphQL */ `
  mutation CreateOrdenCasinoSE(
    $input: CreateOrdenCasinoSEInput!
    $condition: ModelOrdenCasinoSEConditionInput
  ) {
    createOrdenCasinoSE(input: $input, condition: $condition) {
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
        status
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
export const updateOrdenCasinoSE = /* GraphQL */ `
  mutation UpdateOrdenCasinoSE(
    $input: UpdateOrdenCasinoSEInput!
    $condition: ModelOrdenCasinoSEConditionInput
  ) {
    updateOrdenCasinoSE(input: $input, condition: $condition) {
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
        status
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
export const deleteOrdenCasinoSE = /* GraphQL */ `
  mutation DeleteOrdenCasinoSE(
    $input: DeleteOrdenCasinoSEInput!
    $condition: ModelOrdenCasinoSEConditionInput
  ) {
    deleteOrdenCasinoSE(input: $input, condition: $condition) {
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
        status
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
export const createImagenCasino = /* GraphQL */ `
  mutation CreateImagenCasino(
    $input: CreateImagenCasinoInput!
    $condition: ModelImagenCasinoConditionInput
  ) {
    createImagenCasino(input: $input, condition: $condition) {
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
export const updateImagenCasino = /* GraphQL */ `
  mutation UpdateImagenCasino(
    $input: UpdateImagenCasinoInput!
    $condition: ModelImagenCasinoConditionInput
  ) {
    updateImagenCasino(input: $input, condition: $condition) {
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
export const deleteImagenCasino = /* GraphQL */ `
  mutation DeleteImagenCasino(
    $input: DeleteImagenCasinoInput!
    $condition: ModelImagenCasinoConditionInput
  ) {
    deleteImagenCasino(input: $input, condition: $condition) {
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
export const createBanquete = /* GraphQL */ `
  mutation CreateBanquete(
    $input: CreateBanqueteInput!
    $condition: ModelBanqueteConditionInput
  ) {
    createBanquete(input: $input, condition: $condition) {
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
          status
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
export const updateBanquete = /* GraphQL */ `
  mutation UpdateBanquete(
    $input: UpdateBanqueteInput!
    $condition: ModelBanqueteConditionInput
  ) {
    updateBanquete(input: $input, condition: $condition) {
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
          status
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
export const deleteBanquete = /* GraphQL */ `
  mutation DeleteBanquete(
    $input: DeleteBanqueteInput!
    $condition: ModelBanqueteConditionInput
  ) {
    deleteBanquete(input: $input, condition: $condition) {
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
          status
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
export const createImagenBanquete = /* GraphQL */ `
  mutation CreateImagenBanquete(
    $input: CreateImagenBanqueteInput!
    $condition: ModelImagenBanqueteConditionInput
  ) {
    createImagenBanquete(input: $input, condition: $condition) {
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
export const updateImagenBanquete = /* GraphQL */ `
  mutation UpdateImagenBanquete(
    $input: UpdateImagenBanqueteInput!
    $condition: ModelImagenBanqueteConditionInput
  ) {
    updateImagenBanquete(input: $input, condition: $condition) {
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
export const deleteImagenBanquete = /* GraphQL */ `
  mutation DeleteImagenBanquete(
    $input: DeleteImagenBanqueteInput!
    $condition: ModelImagenBanqueteConditionInput
  ) {
    deleteImagenBanquete(input: $input, condition: $condition) {
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
export const createOrdenBanquete = /* GraphQL */ `
  mutation CreateOrdenBanquete(
    $input: CreateOrdenBanqueteInput!
    $condition: ModelOrdenBanqueteConditionInput
  ) {
    createOrdenBanquete(input: $input, condition: $condition) {
      id
      id_banquete
      fecha
      numero_platillos
      importe
      reviewed
      status
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
export const updateOrdenBanquete = /* GraphQL */ `
  mutation UpdateOrdenBanquete(
    $input: UpdateOrdenBanqueteInput!
    $condition: ModelOrdenBanqueteConditionInput
  ) {
    updateOrdenBanquete(input: $input, condition: $condition) {
      id
      id_banquete
      fecha
      numero_platillos
      importe
      reviewed
      status
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
export const deleteOrdenBanquete = /* GraphQL */ `
  mutation DeleteOrdenBanquete(
    $input: DeleteOrdenBanqueteInput!
    $condition: ModelOrdenBanqueteConditionInput
  ) {
    deleteOrdenBanquete(input: $input, condition: $condition) {
      id
      id_banquete
      fecha
      numero_platillos
      importe
      reviewed
      status
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
export const createEntretenimiento = /* GraphQL */ `
  mutation CreateEntretenimiento(
    $input: CreateEntretenimientoInput!
    $condition: ModelEntretenimientoConditionInput
  ) {
    createEntretenimiento(input: $input, condition: $condition) {
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
          status
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
export const updateEntretenimiento = /* GraphQL */ `
  mutation UpdateEntretenimiento(
    $input: UpdateEntretenimientoInput!
    $condition: ModelEntretenimientoConditionInput
  ) {
    updateEntretenimiento(input: $input, condition: $condition) {
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
          status
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
export const deleteEntretenimiento = /* GraphQL */ `
  mutation DeleteEntretenimiento(
    $input: DeleteEntretenimientoInput!
    $condition: ModelEntretenimientoConditionInput
  ) {
    deleteEntretenimiento(input: $input, condition: $condition) {
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
          status
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
export const createImagenEntretenimiento = /* GraphQL */ `
  mutation CreateImagenEntretenimiento(
    $input: CreateImagenEntretenimientoInput!
    $condition: ModelImagenEntretenimientoConditionInput
  ) {
    createImagenEntretenimiento(input: $input, condition: $condition) {
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
export const updateImagenEntretenimiento = /* GraphQL */ `
  mutation UpdateImagenEntretenimiento(
    $input: UpdateImagenEntretenimientoInput!
    $condition: ModelImagenEntretenimientoConditionInput
  ) {
    updateImagenEntretenimiento(input: $input, condition: $condition) {
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
export const deleteImagenEntretenimiento = /* GraphQL */ `
  mutation DeleteImagenEntretenimiento(
    $input: DeleteImagenEntretenimientoInput!
    $condition: ModelImagenEntretenimientoConditionInput
  ) {
    deleteImagenEntretenimiento(input: $input, condition: $condition) {
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
export const createOrdenEntretenimiento = /* GraphQL */ `
  mutation CreateOrdenEntretenimiento(
    $input: CreateOrdenEntretenimientoInput!
    $condition: ModelOrdenEntretenimientoConditionInput
  ) {
    createOrdenEntretenimiento(input: $input, condition: $condition) {
      id
      id_entretenimiento
      fecha
      horas
      importe
      reviewed
      status
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
export const updateOrdenEntretenimiento = /* GraphQL */ `
  mutation UpdateOrdenEntretenimiento(
    $input: UpdateOrdenEntretenimientoInput!
    $condition: ModelOrdenEntretenimientoConditionInput
  ) {
    updateOrdenEntretenimiento(input: $input, condition: $condition) {
      id
      id_entretenimiento
      fecha
      horas
      importe
      reviewed
      status
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
export const deleteOrdenEntretenimiento = /* GraphQL */ `
  mutation DeleteOrdenEntretenimiento(
    $input: DeleteOrdenEntretenimientoInput!
    $condition: ModelOrdenEntretenimientoConditionInput
  ) {
    deleteOrdenEntretenimiento(input: $input, condition: $condition) {
      id
      id_entretenimiento
      fecha
      horas
      importe
      reviewed
      status
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
export const createEvento = /* GraphQL */ `
  mutation CreateEvento(
    $input: CreateEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    createEvento(input: $input, condition: $condition) {
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
        status
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
        status
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
        status
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
export const updateEvento = /* GraphQL */ `
  mutation UpdateEvento(
    $input: UpdateEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    updateEvento(input: $input, condition: $condition) {
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
        status
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
        status
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
        status
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
export const deleteEvento = /* GraphQL */ `
  mutation DeleteEvento(
    $input: DeleteEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    deleteEvento(input: $input, condition: $condition) {
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
        status
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
        status
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
        status
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
export const createUsuario = /* GraphQL */ `
  mutation CreateUsuario(
    $input: CreateUsuarioInput!
    $condition: ModelUsuarioConditionInput
  ) {
    createUsuario(input: $input, condition: $condition) {
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
export const updateUsuario = /* GraphQL */ `
  mutation UpdateUsuario(
    $input: UpdateUsuarioInput!
    $condition: ModelUsuarioConditionInput
  ) {
    updateUsuario(input: $input, condition: $condition) {
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
export const deleteUsuario = /* GraphQL */ `
  mutation DeleteUsuario(
    $input: DeleteUsuarioInput!
    $condition: ModelUsuarioConditionInput
  ) {
    deleteUsuario(input: $input, condition: $condition) {
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
export const createRatingCasino = /* GraphQL */ `
  mutation CreateRatingCasino(
    $input: CreateRatingCasinoInput!
    $condition: ModelRatingCasinoConditionInput
  ) {
    createRatingCasino(input: $input, condition: $condition) {
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
export const updateRatingCasino = /* GraphQL */ `
  mutation UpdateRatingCasino(
    $input: UpdateRatingCasinoInput!
    $condition: ModelRatingCasinoConditionInput
  ) {
    updateRatingCasino(input: $input, condition: $condition) {
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
export const deleteRatingCasino = /* GraphQL */ `
  mutation DeleteRatingCasino(
    $input: DeleteRatingCasinoInput!
    $condition: ModelRatingCasinoConditionInput
  ) {
    deleteRatingCasino(input: $input, condition: $condition) {
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
export const createRatingBanquete = /* GraphQL */ `
  mutation CreateRatingBanquete(
    $input: CreateRatingBanqueteInput!
    $condition: ModelRatingBanqueteConditionInput
  ) {
    createRatingBanquete(input: $input, condition: $condition) {
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
export const updateRatingBanquete = /* GraphQL */ `
  mutation UpdateRatingBanquete(
    $input: UpdateRatingBanqueteInput!
    $condition: ModelRatingBanqueteConditionInput
  ) {
    updateRatingBanquete(input: $input, condition: $condition) {
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
export const deleteRatingBanquete = /* GraphQL */ `
  mutation DeleteRatingBanquete(
    $input: DeleteRatingBanqueteInput!
    $condition: ModelRatingBanqueteConditionInput
  ) {
    deleteRatingBanquete(input: $input, condition: $condition) {
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
export const createRatingEntretenimiento = /* GraphQL */ `
  mutation CreateRatingEntretenimiento(
    $input: CreateRatingEntretenimientoInput!
    $condition: ModelRatingEntretenimientoConditionInput
  ) {
    createRatingEntretenimiento(input: $input, condition: $condition) {
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
export const updateRatingEntretenimiento = /* GraphQL */ `
  mutation UpdateRatingEntretenimiento(
    $input: UpdateRatingEntretenimientoInput!
    $condition: ModelRatingEntretenimientoConditionInput
  ) {
    updateRatingEntretenimiento(input: $input, condition: $condition) {
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
export const deleteRatingEntretenimiento = /* GraphQL */ `
  mutation DeleteRatingEntretenimiento(
    $input: DeleteRatingEntretenimientoInput!
    $condition: ModelRatingEntretenimientoConditionInput
  ) {
    deleteRatingEntretenimiento(input: $input, condition: $condition) {
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
