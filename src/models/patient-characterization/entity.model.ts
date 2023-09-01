import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";

interface EntityAttribute {
    plan_id: number;
    empresa_id: string;
    tipo_tercero_id: string;
    tercero_id: string;
    plan_descripcion: string;
    tipo_cliente: string;
    num_contrato: string;
    fecha_inicio: string;
    fecha_final: string;
    monto_contrato: number;
    saldo_contrato: number;
    tope_maximo_factura: number;
    sw_autoriza_sin_bd: string;
    sw_afiliacion: string;
    sw_tipo_plan: string;
    fecha_registro: string;
    sw_paragrafados_cd: string;
    sw_paragrafados_imd: string;
    usuario_id: number;
    estado: string;
    sw_facturacion_agrupada: string;
    servicios_contratados: string;
    protocolos: string;
    contacto: string;
    nombre_cuota_moderadora: string;
    nombre_copago: string;
    lineas_atencion: string;
    monto_contrato_mensual: string;
    sw_base_liquidacion_imd: string;
    sw_exceder_monto_mensual: string;
    tipo_liquidacion_id: number;
    actividad_incumplimientos: number;
    meses_consulta_base_datos: number;
    telefono_cancelacion_cita: string;
    horas_cancelacion: string;
    observacion: string;
    tipo_liquidacion_cargo: number;
    tipo_para_imd: number;
    dias_credito_cartera: number;
    sw_contrata_hospitalizacion: string;
    lista_precios: string;
    porcentaje_utilidad: number;
    protocolo_internacion: string;
    sw_rips_con_cargo_cups: string;
    marca_prioridad_atencion: string;
    sw_solicita_autorizacion_admision: string;
    porcentaje_descuento_iym: number;
    mensaje_plan: string;
    sw_afiliados: string;
    programas_id: number;
    sw_desc_nomina: string;
    programa_consulta_externa_id: number;
    sw_multimedicas: number;
    monto_alerta_contrato: number;
    fecha_alerta_contrato: string;
    linea_costo_fi: string;
    sw_cumplimiento_automatico: number;
    sw_entrega_med: string;
    sw_division_pos: string;
    sw_ente_territorial: string;
    sw_secretaria: string;
    sw_cobra_iva: number;
    sw_crea_cuenta_adic: number;
    id_tipo_doc: number;
    correo_autorizacion: string;
    sw_certificado: string;
    sw_proyeccion: string;
    sw_envio_autorizaciones_email: string;
    sw_estado_demanda: string;
    sw_videoconsulta: string;
    sw_cargar_acuenta: string;
    sw_cumplir_estado_plan: string;
    sw_enviar_formulas: string;
    sw_integra_solicitudes: string;
    ws_interoperabilidad: string;
    sw_afiliados_integracion: string;
    sw_autorizacion_medicamentos: string;
}

export interface EntityInput extends Optional<EntityAttribute, 'plan_id'> {}
export interface EntityOutput extends Required<EntityAttribute> {}

class Entity extends Model<EntityAttribute, EntityAttribute> implements EntityAttribute {
    public plan_id!: number;
    public empresa_id!: string;
    public tipo_tercero_id!: string;
    public tercero_id!: string;
    public plan_descripcion!: string;
    public tipo_cliente!: string;
    public num_contrato!: string;
    public fecha_inicio!: string;
    public fecha_final!: string;
    public monto_contrato!: number;
    public saldo_contrato!: number;
    public tope_maximo_factura!: number;
    public sw_autoriza_sin_bd!: string;
    public sw_afiliacion!: string;
    public sw_tipo_plan!: string;
    public fecha_registro!: string;
    public sw_paragrafados_cd!: string;
    public sw_paragrafados_imd!: string;
    public usuario_id!: number;
    public estado!: string;
    public sw_facturacion_agrupada!: string;
    public servicios_contratados!: string;
    public protocolos!: string;
    public contacto!: string;
    public nombre_cuota_moderadora!: string;
    public nombre_copago!: string;
    public lineas_atencion!: string;
    public monto_contrato_mensual!: string;
    public sw_base_liquidacion_imd!: string;
    public sw_exceder_monto_mensual!: string;
    public tipo_liquidacion_id!: number;
    public actividad_incumplimientos!: number;
    public meses_consulta_base_datos!: number;
    public telefono_cancelacion_cita!: string;
    public horas_cancelacion!: string;
    public observacion!: string;
    public tipo_liquidacion_cargo!: number;
    public tipo_para_imd!: number;
    public dias_credito_cartera!: number;
    public sw_contrata_hospitalizacion!: string;
    public lista_precios!: string;
    public porcentaje_utilidad!: number;
    public protocolo_internacion!: string;
    public sw_rips_con_cargo_cups!: string;
    public marca_prioridad_atencion!: string;
    public sw_solicita_autorizacion_admision!: string;
    public porcentaje_descuento_iym!: number;
    public mensaje_plan!: string;
    public sw_afiliados!: string;
    public programas_id!: number;
    public sw_desc_nomina!: string;
    public programa_consulta_externa_id!: number;
    public sw_multimedicas!: number;
    public monto_alerta_contrato!: number;
    public fecha_alerta_contrato!: string;
    public linea_costo_fi!: string;
    public sw_cumplimiento_automatico!: number;
    public sw_entrega_med!: string;
    public sw_division_pos!: string;
    public sw_ente_territorial!: string;
    public sw_secretaria!: string;
    public sw_cobra_iva!: number;
    public sw_crea_cuenta_adic!: number;
    public id_tipo_doc!: number;
    public correo_autorizacion!: string;
    public sw_certificado!: string;
    public sw_proyeccion!: string;
    public sw_envio_autorizaciones_email!: string;
    public sw_estado_demanda!: string;
    public sw_videoconsulta!: string;
    public sw_cargar_acuenta!: string;
    public sw_cumplir_estado_plan!: string;
    public sw_enviar_formulas!: string;
    public sw_integra_solicitudes!: string;
    public ws_interoperabilidad!: string;
    public sw_afiliados_integracion!: string;
    public sw_autorizacion_medicamentos!: string;
}

Entity.init({
    plan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    empresa_id: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    tipo_tercero_id: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    tercero_id: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    plan_descripcion: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    tipo_cliente: {
        type: DataTypes.STRING(2),
        allowNull: true
    },
    num_contrato: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    fecha_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    fecha_final: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    monto_contrato: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    saldo_contrato: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    tope_maximo_factura: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    sw_autoriza_sin_bd: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    sw_afiliacion: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    sw_tipo_plan: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    fecha_registro: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sw_paragrafados_cd: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    sw_paragrafados_imd: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    sw_facturacion_agrupada: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    servicios_contratados: {
        type: DataTypes.STRING,
        allowNull: false
    },
    protocolos: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    contacto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre_cuota_moderadora: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    nombre_copago: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    lineas_atencion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    monto_contrato_mensual: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    sw_base_liquidacion_imd: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    sw_exceder_monto_mensual: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    tipo_liquidacion_id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    actividad_incumplimientos: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    meses_consulta_base_datos: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    telefono_cancelacion_cita: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    horas_cancelacion: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    observacion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tipo_liquidacion_cargo: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    tipo_para_imd: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    dias_credito_cartera: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    sw_contrata_hospitalizacion: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    lista_precios: {
        type: DataTypes.STRING(4),
        allowNull: false
    },
    porcentaje_utilidad: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    protocolo_internacion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    sw_rips_con_cargo_cups: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    marca_prioridad_atencion: {
        type: DataTypes.STRING(8),
        allowNull: false
    },
    sw_solicita_autorizacion_admision: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    porcentaje_descuento_iym: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    mensaje_plan: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    sw_afiliados: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    programas_id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    sw_desc_nomina: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    programa_consulta_externa_id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    sw_multimedicas: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    monto_alerta_contrato: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    fecha_alerta_contrato: {
        type: DataTypes.DATE,
        allowNull: false
    },
    linea_costo_fi: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    sw_cumplimiento_automatico: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    sw_entrega_med: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    sw_division_pos: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    sw_ente_territorial: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    sw_secretaria: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    sw_cobra_iva: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    sw_crea_cuenta_adic: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    id_tipo_doc: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    correo_autorizacion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    sw_certificado: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    sw_proyeccion: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    sw_envio_autorizaciones_email: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    sw_estado_demanda: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    sw_videoconsulta: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    sw_cargar_acuenta: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    sw_cumplir_estado_plan: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    sw_enviar_formulas: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    sw_integra_solicitudes: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    ws_interoperabilidad: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    sw_afiliados_integracion: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    sw_autorizacion_medicamentos: {
        type: DataTypes.CHAR(1),
        allowNull: false
    }
},{
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'planes',
    paranoid: true 
});

export default Entity;