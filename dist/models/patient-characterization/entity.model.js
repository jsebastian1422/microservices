"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
class Entity extends sequelize_1.Model {
}
Entity.init({
    plan_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    empresa_id: {
        type: sequelize_1.DataTypes.STRING(2),
        allowNull: false
    },
    tipo_tercero_id: {
        type: sequelize_1.DataTypes.STRING(3),
        allowNull: false
    },
    tercero_id: {
        type: sequelize_1.DataTypes.STRING(32),
        allowNull: false
    },
    plan_descripcion: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false
    },
    tipo_cliente: {
        type: sequelize_1.DataTypes.STRING(2),
        allowNull: true
    },
    num_contrato: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    fecha_inicio: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    },
    fecha_final: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    },
    monto_contrato: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    saldo_contrato: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    tope_maximo_factura: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    sw_autoriza_sin_bd: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    sw_afiliacion: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    sw_tipo_plan: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    fecha_registro: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    sw_paragrafados_cd: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    sw_paragrafados_imd: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    usuario_id: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    estado: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    sw_facturacion_agrupada: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    servicios_contratados: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    protocolos: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    contacto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    nombre_cuota_moderadora: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    nombre_copago: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    lineas_atencion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    monto_contrato_mensual: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    sw_base_liquidacion_imd: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    sw_exceder_monto_mensual: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    tipo_liquidacion_id: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    actividad_incumplimientos: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false
    },
    meses_consulta_base_datos: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false
    },
    telefono_cancelacion_cita: {
        type: sequelize_1.DataTypes.STRING(40),
        allowNull: false
    },
    horas_cancelacion: {
        type: sequelize_1.DataTypes.STRING(2),
        allowNull: false
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    tipo_liquidacion_cargo: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    tipo_para_imd: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    dias_credito_cartera: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false
    },
    sw_contrata_hospitalizacion: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    },
    lista_precios: {
        type: sequelize_1.DataTypes.STRING(4),
        allowNull: false
    },
    porcentaje_utilidad: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    protocolo_internacion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    sw_rips_con_cargo_cups: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    },
    marca_prioridad_atencion: {
        type: sequelize_1.DataTypes.STRING(8),
        allowNull: false
    },
    sw_solicita_autorizacion_admision: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    porcentaje_descuento_iym: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    mensaje_plan: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    sw_afiliados: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    },
    programas_id: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    sw_desc_nomina: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    programa_consulta_externa_id: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    sw_multimedicas: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    monto_alerta_contrato: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    fecha_alerta_contrato: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    linea_costo_fi: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    sw_cumplimiento_automatico: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    sw_entrega_med: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    },
    sw_division_pos: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    },
    sw_ente_territorial: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    },
    sw_secretaria: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    },
    sw_cobra_iva: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    sw_crea_cuenta_adic: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    id_tipo_doc: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    correo_autorizacion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    sw_certificado: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    sw_proyeccion: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    },
    sw_envio_autorizaciones_email: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    sw_estado_demanda: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    sw_videoconsulta: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    },
    sw_cargar_acuenta: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    sw_cumplir_estado_plan: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    sw_enviar_formulas: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    sw_integra_solicitudes: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    },
    ws_interoperabilidad: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    },
    sw_afiliados_integracion: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    },
    sw_autorizacion_medicamentos: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'planes',
    paranoid: true
});
exports.default = Entity;
