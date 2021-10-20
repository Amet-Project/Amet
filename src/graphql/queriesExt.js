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

export const listCasinos = /* GraphQL */ `
  query ListCasinos(
    $filter: ModelCasinoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCasinos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        cap_maxima
        descripcion
        direccion
        id
        rfc
        titulo
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
          }
        }
      }
      nextToken
    }
  }
`;

export const listCasinosandImage = `
  query ListCasinosandImage {
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
            url
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
          }
        }
      }
    }
  }
`;