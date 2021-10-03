/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvento = /* GraphQL */ `
  subscription OnCreateEvento {
    onCreateEvento {
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
export const onUpdateEvento = /* GraphQL */ `
  subscription OnUpdateEvento {
    onUpdateEvento {
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
export const onDeleteEvento = /* GraphQL */ `
  subscription OnDeleteEvento {
    onDeleteEvento {
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
export const onCreateCasinoHorarioFijo = /* GraphQL */ `
  subscription OnCreateCasinoHorarioFijo {
    onCreateCasinoHorarioFijo {
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
export const onUpdateCasinoHorarioFijo = /* GraphQL */ `
  subscription OnUpdateCasinoHorarioFijo {
    onUpdateCasinoHorarioFijo {
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
export const onDeleteCasinoHorarioFijo = /* GraphQL */ `
  subscription OnDeleteCasinoHorarioFijo {
    onDeleteCasinoHorarioFijo {
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
export const onCreateCasinoHorarioFlex = /* GraphQL */ `
  subscription OnCreateCasinoHorarioFlex {
    onCreateCasinoHorarioFlex {
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
export const onUpdateCasinoHorarioFlex = /* GraphQL */ `
  subscription OnUpdateCasinoHorarioFlex {
    onUpdateCasinoHorarioFlex {
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
export const onDeleteCasinoHorarioFlex = /* GraphQL */ `
  subscription OnDeleteCasinoHorarioFlex {
    onDeleteCasinoHorarioFlex {
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
export const onCreateCasinoPrecioFlex = /* GraphQL */ `
  subscription OnCreateCasinoPrecioFlex {
    onCreateCasinoPrecioFlex {
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
export const onUpdateCasinoPrecioFlex = /* GraphQL */ `
  subscription OnUpdateCasinoPrecioFlex {
    onUpdateCasinoPrecioFlex {
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
export const onDeleteCasinoPrecioFlex = /* GraphQL */ `
  subscription OnDeleteCasinoPrecioFlex {
    onDeleteCasinoPrecioFlex {
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
export const onCreateCasino = /* GraphQL */ `
  subscription OnCreateCasino {
    onCreateCasino {
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
export const onUpdateCasino = /* GraphQL */ `
  subscription OnUpdateCasino {
    onUpdateCasino {
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
export const onDeleteCasino = /* GraphQL */ `
  subscription OnDeleteCasino {
    onDeleteCasino {
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
export const onCreateCasinoArea = /* GraphQL */ `
  subscription OnCreateCasinoArea {
    onCreateCasinoArea {
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
export const onUpdateCasinoArea = /* GraphQL */ `
  subscription OnUpdateCasinoArea {
    onUpdateCasinoArea {
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
export const onDeleteCasinoArea = /* GraphQL */ `
  subscription OnDeleteCasinoArea {
    onDeleteCasinoArea {
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
export const onCreateArea = /* GraphQL */ `
  subscription OnCreateArea {
    onCreateArea {
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
export const onUpdateArea = /* GraphQL */ `
  subscription OnUpdateArea {
    onUpdateArea {
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
export const onDeleteArea = /* GraphQL */ `
  subscription OnDeleteArea {
    onDeleteArea {
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
export const onCreateCasinoServicio = /* GraphQL */ `
  subscription OnCreateCasinoServicio {
    onCreateCasinoServicio {
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
export const onUpdateCasinoServicio = /* GraphQL */ `
  subscription OnUpdateCasinoServicio {
    onUpdateCasinoServicio {
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
export const onDeleteCasinoServicio = /* GraphQL */ `
  subscription OnDeleteCasinoServicio {
    onDeleteCasinoServicio {
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
export const onCreateServicio = /* GraphQL */ `
  subscription OnCreateServicio {
    onCreateServicio {
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
export const onUpdateServicio = /* GraphQL */ `
  subscription OnUpdateServicio {
    onUpdateServicio {
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
export const onDeleteServicio = /* GraphQL */ `
  subscription OnDeleteServicio {
    onDeleteServicio {
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
export const onCreateCasinoServicioExtra = /* GraphQL */ `
  subscription OnCreateCasinoServicioExtra {
    onCreateCasinoServicioExtra {
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
export const onUpdateCasinoServicioExtra = /* GraphQL */ `
  subscription OnUpdateCasinoServicioExtra {
    onUpdateCasinoServicioExtra {
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
export const onDeleteCasinoServicioExtra = /* GraphQL */ `
  subscription OnDeleteCasinoServicioExtra {
    onDeleteCasinoServicioExtra {
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
export const onCreateServicioExtra = /* GraphQL */ `
  subscription OnCreateServicioExtra {
    onCreateServicioExtra {
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
export const onUpdateServicioExtra = /* GraphQL */ `
  subscription OnUpdateServicioExtra {
    onUpdateServicioExtra {
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
export const onDeleteServicioExtra = /* GraphQL */ `
  subscription OnDeleteServicioExtra {
    onDeleteServicioExtra {
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
export const onCreateEventoCasinoSE = /* GraphQL */ `
  subscription OnCreateEventoCasinoSE {
    onCreateEventoCasinoSE {
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
export const onUpdateEventoCasinoSE = /* GraphQL */ `
  subscription OnUpdateEventoCasinoSE {
    onUpdateEventoCasinoSE {
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
export const onDeleteEventoCasinoSE = /* GraphQL */ `
  subscription OnDeleteEventoCasinoSE {
    onDeleteEventoCasinoSE {
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
export const onCreateUsuario = /* GraphQL */ `
  subscription OnCreateUsuario {
    onCreateUsuario {
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
export const onUpdateUsuario = /* GraphQL */ `
  subscription OnUpdateUsuario {
    onUpdateUsuario {
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
export const onDeleteUsuario = /* GraphQL */ `
  subscription OnDeleteUsuario {
    onDeleteUsuario {
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
export const onCreateImagen = /* GraphQL */ `
  subscription OnCreateImagen {
    onCreateImagen {
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
export const onUpdateImagen = /* GraphQL */ `
  subscription OnUpdateImagen {
    onUpdateImagen {
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
export const onDeleteImagen = /* GraphQL */ `
  subscription OnDeleteImagen {
    onDeleteImagen {
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
