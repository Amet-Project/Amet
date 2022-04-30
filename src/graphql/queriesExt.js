export const eventoPorFecha =`
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
        casino {
          id_casino
        }
        banquete {
          id_banquete
        }
        entretenimiento {
          id_entretenimiento
        }
      }
      nextToken
    }
  }
`;

export const listCrudCasinos = `
  query listCrudCasinos {
    listCasinos {
      items {
        id
        cap_maxima
        titulo
        aprobado
        usuario {
          id
          nombres
          ap_materno
          ap_paterno
        }
      }
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
        servicios {
          items {
            descripcion
            servicio {
              nombre
            }
          }
        }
      }
    }
  }
`;

export const listBanquetesWithImage = `
  query ListBanquetesWithImage {
    listBanquetes {
      items {
        id
        aprobado
        descripcion
        minimo
        titulo
        rfc
        precio_unitario
        imagenes (limit: 1, sortDirection: DESC) {
          items {
            file {
              key
            }
          }
        }
      }
    }
  }
  `;

  export const listEntretenimientoWithImage = `
  query ListEntretenimientoWithImage {
    listEntretenimientos {
      items {
        id
        aprobado
        descripcion
        imagenes {
          items {
            file {
              key
            }
          }
        }
        minimo
        precio_hora
        rfc
        titulo
      }
    }
  }
  `;

export const getCasino = `
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
          file {
            key
          }
        }
      }
    }
  }
`;

export const GetUsuarioDetails = /* GraphQL */ `
  query GetUsuario($id: ID!) {
    getUsuario(id: $id) {
      ap_materno
      ap_paterno
      celular
      createdAt
      email
      nacimiento
      nombres
      rol
      sexo
      telefono
      id
    }
  }
`;

export const listCasinosByUser = `
  query ListCasinosByUser($id: ID!) {
    getUsuario(id: $id) {
      casinos {
        items {
          titulo
          id
          direccion
          descripcion
          cap_maxima
          imagenes {
            items {
              file {
                key
              }
            }
          }
        }
      }
    }
  }
`;

export const listBanqueteByUser = `
  query listBanqueteByUser($id: ID!) {
    getUsuario(id: $id) {
      banquete {
        items {
          titulo
          id
          descripcion
          precio_unitario
        }
      }
    }
  }
`;

export const listEntretenimientoByUser = `
query ListEntretenimientoyUser($id: ID!) {
  getUsuario(id: $id) {
    entretenimiento {
      items {
        id
        titulo
        descripcion
        precio_hora
        imagenes {
          items {
            file {
              key
            }
          }
        }
      }
    }
  }
}
`;

export const listEventsByUser = `
query ListEventsByUser($id: ID!) {
  getUsuario(id: $id) {
    eventos {
      items {
        id
        fecha
        importe_total
        id_orden_banquete
        id_orden_casino
        id_orden_entretenimiento
        banquete {
          importe
          banquete {
            titulo
            id
          }
        }
        casino {
          casino {
            titulo
            id
            imagenes(limit: 1, sortDirection: DESC) {
              items {
                file {
                  key
                }
              }
            }
          }
          importe
        }
        entretenimiento {
          id
          importe
          entretenimiento {
            titulo
          }
        }
      }
    }
    nombres
  }
}
`;

export const getEvento = `
query getEvento($id: ID!) {
  getEvento(id: $id) {
    id
    fecha
    importe_total
    id_orden_banquete
    id_orden_casino
    id_orden_entretenimiento
    banquete {
      importe
      banquete {
        titulo
        id
      }
    }
    casino {
      casino {
        titulo
        id
        imagenes(limit: 1, sortDirection: DESC) {
          items {
            file {
              key
            }
          }
        }
      }
      importe
    }
    entretenimiento {
      importe
      entretenimiento {
        titulo
        id
      }
    }
  }
}
`;

export const listEventosByCasinoProv = `
  query ListEventos(
    $filter: ModelEventoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fecha
        id_orden_casino
        importe_total
        id_usuario
        usuario {
          nombres
          ap_materno
          ap_paterno
        }
        casino {
          fecha
          importe
          casino {
            id_usuario
            titulo
            descripcion
          }
        }
      }
      nextToken
    }
  }
`;

export const listEventosByBanqueteProv = `
  query ListEventos(
    $filter: ModelEventoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fecha
        id_orden_banquete
        importe_total
        id_usuario
        usuario {
          ap_materno
          ap_paterno
          nombres
        }
        banquete {
          fecha
          importe
          numero_platillos
          banquete {
            id_usuario
            titulo
          }
        }
      }
      nextToken
    }
  }
`;

export const listEventosByEntretenimientoProv = `
  query ListEventos(
    $filter: ModelEventoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fecha
        id_orden_entretenimiento
        id_usuario
        importe_total
        usuario {
          ap_materno
          ap_paterno
          nombres
        }
        entretenimiento {
          fecha
          importe
          horas
          entretenimiento {
            id_usuario
            titulo
          }
        }
      }
      nextToken
    }
  }
`;