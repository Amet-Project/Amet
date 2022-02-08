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
        id_orden_casino
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