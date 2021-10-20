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

export const listCasinosandImage = `
  query ListCasinosandImage {
    listCasinos {
      items {
        imagenes(limit: 1, sortDirection: ASC) {
          items {
            file {
              key
            }
          }
        }
        id
        descripcion
        titulo
      }
    }
  }
`;