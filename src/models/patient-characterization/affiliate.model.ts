import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";
import AffiliateTypeId from "./affiliate_type_id.model";
import AffiliateDetail from './affiliate_detail.model';
import Entity from "./entity.model";

interface AffiliateAttribute {
    eps_afiliacion_id: number;
    afiliado_tipo_id: string;
    afiliado_id: string;
    eps_tipo_afiliado_id: string;
    fecha_afiliacion: string;
    eps_anterior: string;
    semanas_cotizadas_eps_anterior: number;
    semanas_cotizadas: number;
    estado_afiliado_id: string;
    subestado_afiliado_id: string;
    observaciones: string;
    usuario_registro: number;
    fecha_registro: string;
    usuario_ultima_actualizacion: number;
    accion_ultima_actualizacion: string;
    fecha_ultima_actualizacion: string;
    plan_atencion: number;
    tipo_afiliado_atencion: string;
    rango_afiliado_atencion: string;
    eps_punto_atencion_id: string;
    fecha_vencimiento: string;
    fecha_afiliacion_eps_anterior: string;
}

export interface AffiliateInput extends Optional<AffiliateAttribute, 'eps_afiliacion_id'> {}
export interface AffiliateOutput extends Required<AffiliateAttribute> {}

class Affiliate extends Model<AffiliateAttribute, AffiliateAttribute> implements AffiliateAttribute {
    public eps_afiliacion_id!: number;
    public afiliado_tipo_id!: string;
    public afiliado_id!: string;
    public eps_tipo_afiliado_id!: string;
    public fecha_afiliacion!: string;
    public eps_anterior!: string;
    public semanas_cotizadas_eps_anterior!: number;
    public semanas_cotizadas!: number;
    public estado_afiliado_id!: string;
    public subestado_afiliado_id!: string;
    public observaciones!: string;
    public usuario_registro!: number;
    public fecha_registro!: string;
    public usuario_ultima_actualizacion!: number;
    public accion_ultima_actualizacion!: string;
    public fecha_ultima_actualizacion!: string;
    public plan_atencion!: number;
    public tipo_afiliado_atencion!: string;
    public rango_afiliado_atencion!: string;
    public eps_punto_atencion_id!: string;
    public fecha_vencimiento!: string;
    public fecha_afiliacion_eps_anterior!: string;
}

Affiliate.init({
    eps_afiliacion_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    afiliado_tipo_id: {
        type: DataTypes.CHAR(2),
        allowNull: false,
        unique: 'affiliate'
    },
    afiliado_id: {
        type: DataTypes.STRING(34),
        allowNull: false,
        unique: 'affiliate'
    },
    eps_tipo_afiliado_id: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    fecha_afiliacion: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    eps_anterior: {
        type: DataTypes.STRING(6),
        allowNull: true
    },
    semanas_cotizadas_eps_anterior: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    semanas_cotizadas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estado_afiliado_id: {
        type: DataTypes.CHAR(2),
        allowNull: false
    },
    subestado_afiliado_id: {
        type: DataTypes.CHAR(3),
        allowNull: false
    },
    observaciones: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    usuario_registro: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_registro: {
        type: DataTypes.DATE,
        allowNull: false
    },
    usuario_ultima_actualizacion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    accion_ultima_actualizacion: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    fecha_ultima_actualizacion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    plan_atencion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    tipo_afiliado_atencion: {
        type: DataTypes.CHAR(2),
        allowNull: true
    },
    rango_afiliado_atencion: {
        type: DataTypes.STRING(40),
        allowNull: true
    },
    eps_punto_atencion_id: {
        type: DataTypes.CHAR(5),
        allowNull: true
    },
    fecha_vencimiento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_afiliacion_eps_anterior: {
        type: DataTypes.DATE,
        allowNull: true
    }
},{
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'eps_afiliados',
    paranoid: true 
});

Affiliate.hasMany(AffiliateTypeId, {
    foreignKey: 'afiliado_tipo_id',
    as: 'eps_afiliados_tipos_id'
});
Affiliate.hasOne(AffiliateDetail, {
    foreignKey: 'afiliado_id',
    sourceKey: 'afiliado_id'
})
Affiliate.hasOne(AffiliateDetail, {
    foreignKey: 'afiliado_tipo_id',
    sourceKey: 'afiliado_tipo_id'
})
Affiliate.hasOne(Entity, {
    foreignKey: 'plan_id',
    sourceKey: 'plan_atencion'
})
export default Affiliate;