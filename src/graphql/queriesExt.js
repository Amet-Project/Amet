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
        aprobado
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
        }
      }
      areas {
        items {
          id
          id_casino
          id_area
          descripcion
        }
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
        }
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
        }
      }
      imagenes {
        items {
          id
          id_casino
          url
        }
      }
    }
  }
`;