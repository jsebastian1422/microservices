
import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";

interface AffiliateTypeIdAttribute {
    afiliado_tipo_id: string;
    descripcion_tipo_id: string;
    tipo_id_tercero: string;
}

export interface AffiliateTypeIdInput extends Optional<AffiliateTypeIdAttribute, 'afiliado_tipo_id'> {}
export interface AffiliateTypeIdOutput extends Required<AffiliateTypeIdAttribute> {}

class AffiliateTypeId extends Model<AffiliateTypeIdAttribute, AffiliateTypeIdAttribute> implements AffiliateTypeIdAttribute {
    public afiliado_tipo_id!: string;
    public descripcion_tipo_id!: string;
    public tipo_id_tercero!: string;
}

AffiliateTypeId.init({
    afiliado_tipo_id: {
        type: DataTypes.CHAR(2),
        allowNull: false,
        primaryKey: true
    },
    descripcion_tipo_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_id_tercero: {
        type: DataTypes.CHAR(3)
    }

},{
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'eps_afiliados_tipos_id',
    paranoid: true 
});

export default AffiliateTypeId;