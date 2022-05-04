export const schema = {
    "models": {
        "Evento": {
            "name": "Evento",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "fecha": {
                    "name": "fecha",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "importe": {
                    "name": "importe",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "casino_servicios_extras": {
                    "name": "casino_servicios_extras",
                    "isArray": true,
                    "type": {
                        "model": "EventoCasinoSE"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "evento"
                    }
                },
                "usuario": {
                    "name": "usuario",
                    "isArray": false,
                    "type": {
                        "model": "Usuario"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_usuario"
                    }
                },
                "cas_hor_fijo": {
                    "name": "cas_hor_fijo",
                    "isArray": false,
                    "type": {
                        "model": "CasinoHorarioFijo"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_cas_hor_fijo"
                    }
                },
                "cas_hor_flex": {
                    "name": "cas_hor_flex",
                    "isArray": false,
                    "type": {
                        "model": "CasinoHorarioFlex"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_cas_hor_flex"
                    }
                },
                "casino": {
                    "name": "casino",
                    "isArray": false,
                    "type": {
                        "model": "Casino"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_casino"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Eventos",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porUsuario",
                        "fields": [
                            "id_usuario",
                            "fecha"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porCasinoHorarioFijo",
                        "fields": [
                            "id_cas_hor_fijo",
                            "fecha"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porCasinoHorarioFlex",
                        "fields": [
                            "id_cas_hor_flex",
                            "fecha"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porCasino",
                        "fields": [
                            "id_casino",
                            "fecha"
                        ]
                    }
                }
            ]
        },
        "EventoCasinoSE": {
            "name": "EventoCasinoSE",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "evento": {
                    "name": "evento",
                    "isArray": false,
                    "type": {
                        "model": "Evento"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_evento"
                    }
                },
                "casino_se": {
                    "name": "casino_se",
                    "isArray": false,
                    "type": {
                        "model": "CasinoServicioExtra"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_casino_se"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EventoCasinoSES",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porEvento",
                        "fields": [
                            "id_evento",
                            "id_casino_se"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porCasinoSE",
                        "fields": [
                            "id_casino_se",
                            "id_evento"
                        ]
                    }
                }
            ]
        },
        "CasinoServicioExtra": {
            "name": "CasinoServicioExtra",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "descripcion": {
                    "name": "descripcion",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "costo": {
                    "name": "costo",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "eventos": {
                    "name": "eventos",
                    "isArray": true,
                    "type": {
                        "model": "EventoCasinoSE"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "casino_se"
                    }
                },
                "casino": {
                    "name": "casino",
                    "isArray": false,
                    "type": {
                        "model": "Casino"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_casino"
                    }
                },
                "servicio_extra": {
                    "name": "servicio_extra",
                    "isArray": false,
                    "type": {
                        "model": "ServicioExtra"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_servicio_extra"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "CasinoServicioExtras",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porCasino",
                        "fields": [
                            "id_casino",
                            "id_servicio_extra"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porServicioExtra",
                        "fields": [
                            "id_servicio_extra",
                            "id_casino"
                        ]
                    }
                }
            ]
        },
        "Casino": {
            "name": "Casino",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "direccion": {
                    "name": "direccion",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "titulo": {
                    "name": "titulo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "descripcion": {
                    "name": "descripcion",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "rfc": {
                    "name": "rfc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "horarios_fijos": {
                    "name": "horarios_fijos",
                    "isArray": true,
                    "type": {
                        "model": "CasinoHorarioFijo"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "casino"
                    }
                },
                "precios_flexibles": {
                    "name": "precios_flexibles",
                    "isArray": true,
                    "type": {
                        "model": "CasinoPrecioFlex"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "casino"
                    }
                },
                "areas": {
                    "name": "areas",
                    "isArray": true,
                    "type": {
                        "model": "CasinoArea"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "casino"
                    }
                },
                "servicios": {
                    "name": "servicios",
                    "isArray": true,
                    "type": {
                        "model": "CasinoServicio"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "casino"
                    }
                },
                "servicios_extras": {
                    "name": "servicios_extras",
                    "isArray": true,
                    "type": {
                        "model": "CasinoServicioExtra"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "casino"
                    }
                },
                "eventos": {
                    "name": "eventos",
                    "isArray": true,
                    "type": {
                        "model": "Evento"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "casino"
                    }
                },
                "imagenes": {
                    "name": "imagenes",
                    "isArray": true,
                    "type": {
                        "model": "Imagen"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "casino"
                    }
                },
                "usuario": {
                    "name": "usuario",
                    "isArray": false,
                    "type": {
                        "model": "Usuario"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_usuario"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Casinos",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porUsuario",
                        "fields": [
                            "id_usuario",
                            "titulo"
                        ]
                    }
                }
            ]
        },
        "CasinoHorarioFijo": {
            "name": "CasinoHorarioFijo",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "hora_inicio": {
                    "name": "hora_inicio",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "hora_fin": {
                    "name": "hora_fin",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "lunes": {
                    "name": "lunes",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "martes": {
                    "name": "martes",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "miercoles": {
                    "name": "miercoles",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "jueves": {
                    "name": "jueves",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "viernes": {
                    "name": "viernes",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "sabado": {
                    "name": "sabado",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "domingo": {
                    "name": "domingo",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "precio": {
                    "name": "precio",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "eventos": {
                    "name": "eventos",
                    "isArray": true,
                    "type": {
                        "model": "Evento"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "cas_hor_fijo"
                    }
                },
                "casino": {
                    "name": "casino",
                    "isArray": false,
                    "type": {
                        "model": "Casino"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_casino"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "CasinoHorarioFijos",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porCasino",
                        "fields": [
                            "id_casino",
                            "precio"
                        ]
                    }
                }
            ]
        },
        "CasinoPrecioFlex": {
            "name": "CasinoPrecioFlex",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "lunes": {
                    "name": "lunes",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "martes": {
                    "name": "martes",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "miercoles": {
                    "name": "miercoles",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "jueves": {
                    "name": "jueves",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "viernes": {
                    "name": "viernes",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "sabado": {
                    "name": "sabado",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "domingo": {
                    "name": "domingo",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "precio": {
                    "name": "precio",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "horarios": {
                    "name": "horarios",
                    "isArray": true,
                    "type": {
                        "model": "CasinoHorarioFlex"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "cas_precio_flex"
                    }
                },
                "casino": {
                    "name": "casino",
                    "isArray": false,
                    "type": {
                        "model": "Casino"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_casino"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "CasinoPrecioFlexes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porCasino",
                        "fields": [
                            "id_casino",
                            "precio"
                        ]
                    }
                }
            ]
        },
        "CasinoHorarioFlex": {
            "name": "CasinoHorarioFlex",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "hora_inicio": {
                    "name": "hora_inicio",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "hora_fin": {
                    "name": "hora_fin",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "eventos": {
                    "name": "eventos",
                    "isArray": true,
                    "type": {
                        "model": "Evento"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "cas_hor_flex"
                    }
                },
                "cas_precio_flex": {
                    "name": "cas_precio_flex",
                    "isArray": false,
                    "type": {
                        "model": "CasinoPrecioFlex"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_cas_precio_flex"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "CasinoHorarioFlexes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porCasinoPrecioFlex",
                        "fields": [
                            "id_cas_precio_flex"
                        ]
                    }
                }
            ]
        },
        "CasinoArea": {
            "name": "CasinoArea",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "descripcion": {
                    "name": "descripcion",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "casino": {
                    "name": "casino",
                    "isArray": false,
                    "type": {
                        "model": "Casino"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_casino"
                    }
                },
                "area": {
                    "name": "area",
                    "isArray": false,
                    "type": {
                        "model": "Area"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_area"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "CasinoAreas",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porCasino",
                        "fields": [
                            "id_casino",
                            "id_area"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porArea",
                        "fields": [
                            "id_area",
                            "id_casino"
                        ]
                    }
                }
            ]
        },
        "Area": {
            "name": "Area",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "nombre": {
                    "name": "nombre",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "casinos": {
                    "name": "casinos",
                    "isArray": true,
                    "type": {
                        "model": "CasinoArea"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "area"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Areas",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "CasinoServicio": {
            "name": "CasinoServicio",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "descripcion": {
                    "name": "descripcion",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "casino": {
                    "name": "casino",
                    "isArray": false,
                    "type": {
                        "model": "Casino"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_casino"
                    }
                },
                "servicio": {
                    "name": "servicio",
                    "isArray": false,
                    "type": {
                        "model": "Servicio"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_servicio"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "CasinoServicios",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porCasino",
                        "fields": [
                            "id_casino",
                            "id_servicio"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porServicio",
                        "fields": [
                            "id_servicio",
                            "id_casino"
                        ]
                    }
                }
            ]
        },
        "Servicio": {
            "name": "Servicio",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "nombre": {
                    "name": "nombre",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "casinos": {
                    "name": "casinos",
                    "isArray": true,
                    "type": {
                        "model": "CasinoServicio"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "servicio"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Servicios",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Imagen": {
            "name": "Imagen",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "url": {
                    "name": "url",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "casino": {
                    "name": "casino",
                    "isArray": false,
                    "type": {
                        "model": "Casino"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id_casino"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Imagens",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "searchable",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "porCasino",
                        "fields": [
                            "id_casino",
                            "id"
                        ]
                    }
                }
            ]
        },
        "Usuario": {
            "name": "Usuario",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "nombres": {
                    "name": "nombres",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ap_paterno": {
                    "name": "ap_paterno",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ap_materno": {
                    "name": "ap_materno",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "nacimiento": {
                    "name": "nacimiento",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sexo": {
                    "name": "sexo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "telefono": {
                    "name": "telefono",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "celular": {
                    "name": "celular",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pwd": {
                    "name": "pwd",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "eventos": {
                    "name": "eventos",
                    "isArray": true,
                    "type": {
                        "model": "Evento"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "usuario"
                    }
                },
                "casinos": {
                    "name": "casinos",
                    "isArray": true,
                    "type": {
                        "model": "Casino"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "usuario"
                    }
                },
                "rol": {
                    "name": "rol",
                    "isArray": false,
                    "type": {
                        "enum": "Rol"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Usuarios",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "searchable",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "usuarioPorEmail",
                        "fields": [
                            "email",
                            "ap_paterno"
                        ],
                        "queryField": "PorEmail"
                    }
                }
            ]
        },
        "ServicioExtra": {
            "name": "ServicioExtra",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "nombre": {
                    "name": "nombre",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "casinos": {
                    "name": "casinos",
                    "isArray": true,
                    "type": {
                        "model": "CasinoServicioExtra"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "servicio_extra"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ServicioExtras",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {
        "Rol": {
            "name": "Rol",
            "values": [
                "ADMIN",
                "PROVEEDOR",
                "CLIENTE"
            ]
        }
    },
    "nonModels": {},
    "version": "ca0feba5cc6c28387f8f069f3c1e3d52"
};