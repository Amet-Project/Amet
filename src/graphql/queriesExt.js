export const eventoPorFecha = /* GraphQL */ `
  query EventoPorFecha(
    $fecha: String
    $id_casino: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventoPorFecha(
      fecha: $fecha
      id_casino: $id_casino
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id_casino
      }
      nextToken
    }
  }
`;