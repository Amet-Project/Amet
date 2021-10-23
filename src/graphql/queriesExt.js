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
        id_orden_casino
      }
      nextToken
    }
  }
`;

export const listCasinosWithImage = `
  query ListCasinosWithImage {
    listCasinos {
      items {
        cap_maxima
        descripcion
        direccion
        id
        rfc
        titulo
        imagenes(limit: 1, sortDirection: DESC) {
          items {
            file {
              key
            }
          }
        }
        horarios_fijos {
          items {
            domingo
            jueves
            lunes
            martes
            miercoles
            precio
            sabado
            viernes
            hora_inicio
            hora_fin
          }
        }
      }
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
          servicio {
            nombre
          }
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
          servicio_extra {
            nombre
          }
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