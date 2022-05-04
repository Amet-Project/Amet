/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrdenCasino = /* GraphQL */ `
  subscription OnCreateOrdenCasino {
    onCreateOrdenCasino {
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
export const onUpdateOrdenCasino = /* GraphQL */ `
  subscription OnUpdateOrdenCasino {
    onUpdateOrdenCasino {
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
export const onDeleteOrdenCasino = /* GraphQL */ `
  subscription OnDeleteOrdenCasino {
    onDeleteOrdenCasino {
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
export const onCreateCasinoHorarioFlex = /* GraphQL */ `
  subscription OnCreateCasinoHorarioFlex {
    onCreateCasinoHorarioFlex {
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
export const onUpdateCasinoHorarioFlex = /* GraphQL */ `
  subscription OnUpdateCasinoHorarioFlex {
    onUpdateCasinoHorarioFlex {
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
export const onDeleteCasinoHorarioFlex = /* GraphQL */ `
  subscription OnDeleteCasinoHorarioFlex {
    onDeleteCasinoHorarioFlex {
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
export const onCreateCasino = /* GraphQL */ `
  subscription OnCreateCasino {
    onCreateCasino {
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
export const onUpdateCasino = /* GraphQL */ `
  subscription OnUpdateCasino {
    onUpdateCasino {
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
export const onDeleteCasino = /* GraphQL */ `
  subscription OnDeleteCasino {
    onDeleteCasino {
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
export const onUpdateCasinoServicioExtra = /* GraphQL */ `
  subscription OnUpdateCasinoServicioExtra {
    onUpdateCasinoServicioExtra {
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
export const onDeleteCasinoServicioExtra = /* GraphQL */ `
  subscription OnDeleteCasinoServicioExtra {
    onDeleteCasinoServicioExtra {
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
export const onCreateOrdenCasinoSE = /* GraphQL */ `
  subscription OnCreateOrdenCasinoSE {
    onCreateOrdenCasinoSE {
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
export const onUpdateOrdenCasinoSE = /* GraphQL */ `
  subscription OnUpdateOrdenCasinoSE {
    onUpdateOrdenCasinoSE {
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
export const onDeleteOrdenCasinoSE = /* GraphQL */ `
  subscription OnDeleteOrdenCasinoSE {
    onDeleteOrdenCasinoSE {
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
export const onCreateImagenCasino = /* GraphQL */ `
  subscription OnCreateImagenCasino {
    onCreateImagenCasino {
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
export const onUpdateImagenCasino = /* GraphQL */ `
  subscription OnUpdateImagenCasino {
    onUpdateImagenCasino {
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
export const onDeleteImagenCasino = /* GraphQL */ `
  subscription OnDeleteImagenCasino {
    onDeleteImagenCasino {
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
export const onCreateBanquete = /* GraphQL */ `
  subscription OnCreateBanquete {
    onCreateBanquete {
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
export const onUpdateBanquete = /* GraphQL */ `
  subscription OnUpdateBanquete {
    onUpdateBanquete {
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
export const onDeleteBanquete = /* GraphQL */ `
  subscription OnDeleteBanquete {
    onDeleteBanquete {
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
export const onCreateImagenBanquete = /* GraphQL */ `
  subscription OnCreateImagenBanquete {
    onCreateImagenBanquete {
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
export const onUpdateImagenBanquete = /* GraphQL */ `
  subscription OnUpdateImagenBanquete {
    onUpdateImagenBanquete {
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
export const onDeleteImagenBanquete = /* GraphQL */ `
  subscription OnDeleteImagenBanquete {
    onDeleteImagenBanquete {
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
export const onCreateOrdenBanquete = /* GraphQL */ `
  subscription OnCreateOrdenBanquete {
    onCreateOrdenBanquete {
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
export const onUpdateOrdenBanquete = /* GraphQL */ `
  subscription OnUpdateOrdenBanquete {
    onUpdateOrdenBanquete {
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
export const onDeleteOrdenBanquete = /* GraphQL */ `
  subscription OnDeleteOrdenBanquete {
    onDeleteOrdenBanquete {
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
export const onCreateEntretenimiento = /* GraphQL */ `
  subscription OnCreateEntretenimiento {
    onCreateEntretenimiento {
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
export const onUpdateEntretenimiento = /* GraphQL */ `
  subscription OnUpdateEntretenimiento {
    onUpdateEntretenimiento {
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
export const onDeleteEntretenimiento = /* GraphQL */ `
  subscription OnDeleteEntretenimiento {
    onDeleteEntretenimiento {
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
export const onCreateImagenEntretenimiento = /* GraphQL */ `
  subscription OnCreateImagenEntretenimiento {
    onCreateImagenEntretenimiento {
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
export const onUpdateImagenEntretenimiento = /* GraphQL */ `
  subscription OnUpdateImagenEntretenimiento {
    onUpdateImagenEntretenimiento {
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
export const onDeleteImagenEntretenimiento = /* GraphQL */ `
  subscription OnDeleteImagenEntretenimiento {
    onDeleteImagenEntretenimiento {
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
export const onCreateOrdenEntretenimiento = /* GraphQL */ `
  subscription OnCreateOrdenEntretenimiento {
    onCreateOrdenEntretenimiento {
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
export const onUpdateOrdenEntretenimiento = /* GraphQL */ `
  subscription OnUpdateOrdenEntretenimiento {
    onUpdateOrdenEntretenimiento {
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
export const onDeleteOrdenEntretenimiento = /* GraphQL */ `
  subscription OnDeleteOrdenEntretenimiento {
    onDeleteOrdenEntretenimiento {
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
export const onCreateEvento = /* GraphQL */ `
  subscription OnCreateEvento {
    onCreateEvento {
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
export const onUpdateEvento = /* GraphQL */ `
  subscription OnUpdateEvento {
    onUpdateEvento {
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
export const onDeleteEvento = /* GraphQL */ `
  subscription OnDeleteEvento {
    onDeleteEvento {
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
export const onCreateRatingCasino = /* GraphQL */ `
  subscription OnCreateRatingCasino {
    onCreateRatingCasino {
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
export const onUpdateRatingCasino = /* GraphQL */ `
  subscription OnUpdateRatingCasino {
    onUpdateRatingCasino {
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
export const onDeleteRatingCasino = /* GraphQL */ `
  subscription OnDeleteRatingCasino {
    onDeleteRatingCasino {
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
export const onCreateRatingBanquete = /* GraphQL */ `
  subscription OnCreateRatingBanquete {
    onCreateRatingBanquete {
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
export const onUpdateRatingBanquete = /* GraphQL */ `
  subscription OnUpdateRatingBanquete {
    onUpdateRatingBanquete {
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
export const onDeleteRatingBanquete = /* GraphQL */ `
  subscription OnDeleteRatingBanquete {
    onDeleteRatingBanquete {
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
export const onCreateRatingEntretenimiento = /* GraphQL */ `
  subscription OnCreateRatingEntretenimiento {
    onCreateRatingEntretenimiento {
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
export const onUpdateRatingEntretenimiento = /* GraphQL */ `
  subscription OnUpdateRatingEntretenimiento {
    onUpdateRatingEntretenimiento {
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
export const onDeleteRatingEntretenimiento = /* GraphQL */ `
  subscription OnDeleteRatingEntretenimiento {
    onDeleteRatingEntretenimiento {
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
