/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
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
export const updateEvento = /* GraphQL */ `
  mutation UpdateEvento(
    $input: UpdateEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    updateEvento(input: $input, condition: $condition) {
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
export const deleteEvento = /* GraphQL */ `
  mutation DeleteEvento(
    $input: DeleteEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    deleteEvento(input: $input, condition: $condition) {
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
export const createEventoCasinoSE = /* GraphQL */ `
  mutation CreateEventoCasinoSE(
    $input: CreateEventoCasinoSEInput!
    $condition: ModelEventoCasinoSEConditionInput
  ) {
    createEventoCasinoSE(input: $input, condition: $condition) {
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
export const updateEventoCasinoSE = /* GraphQL */ `
  mutation UpdateEventoCasinoSE(
    $input: UpdateEventoCasinoSEInput!
    $condition: ModelEventoCasinoSEConditionInput
  ) {
    updateEventoCasinoSE(input: $input, condition: $condition) {
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
export const deleteEventoCasinoSE = /* GraphQL */ `
  mutation DeleteEventoCasinoSE(
    $input: DeleteEventoCasinoSEInput!
    $condition: ModelEventoCasinoSEConditionInput
  ) {
    deleteEventoCasinoSE(input: $input, condition: $condition) {
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
export const createImagen = /* GraphQL */ `
  mutation CreateImagen(
    $input: CreateImagenInput!
    $condition: ModelImagenConditionInput
  ) {
    createImagen(input: $input, condition: $condition) {
      id
      id_casino
      url
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
export const updateImagen = /* GraphQL */ `
  mutation UpdateImagen(
    $input: UpdateImagenInput!
    $condition: ModelImagenConditionInput
  ) {
    updateImagen(input: $input, condition: $condition) {
      id
      id_casino
      url
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
export const deleteImagen = /* GraphQL */ `
  mutation DeleteImagen(
    $input: DeleteImagenInput!
    $condition: ModelImagenConditionInput
  ) {
    deleteImagen(input: $input, condition: $condition) {
      id
      id_casino
      url
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
