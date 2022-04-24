export const createEventoCasino = /* GraphQL */ `
  mutation CreateEventoCasino(
    $input: CreateEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    createEvento(input: $input, condition: $condition) {
      id
      id_usuario
      id_orden_casino
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
    }
  }
`;

export const createEventoCasEnt = /* GraphQL */ `
  mutation CreateEventoCasEnt(
    $input: CreateEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    createEvento(input: $input, condition: $condition) {
      id
      id_usuario
      id_orden_casino
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
      entretenimiento {
        id
        id_entretenimiento
        fecha
        horas
        importe
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

export const createEventoCasBan = /* GraphQL */ `
  mutation CreateEventoCasBan(
    $input: CreateEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    createEvento(input: $input, condition: $condition) {
      id
      id_usuario
      id_orden_casino
      id_orden_banquete
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
      createdAt
      updatedAt
    }
  }
`;